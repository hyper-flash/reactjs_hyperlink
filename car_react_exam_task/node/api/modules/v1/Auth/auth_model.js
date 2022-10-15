var con = require('../../../config/database');
require("dotenv").config();
var common = require('../../../config/common');
var cryptoLib = require('cryptlib');
var asyncLoop = require('node-async-loop');
var moment = require('moment');
var shaKey = cryptoLib.getHashSha256(process.env.KEY, 32);
const { response, query } = require('express');
var emailTemplate = require('../../../config/template');

var Auth = {

    // get details of any users
    userdetails: function (user_id, callback) {

        con.query("SELECT u.*, IFNULL(ut.token,'') as token FROM tbl_user u LEFT JOIN tbl_user_token as ut ON u.id = ut.user_id WHERE u.id = '" + user_id + "' AND u.is_deleted='0' GROUP BY u.id", function (err, result, fields) {
            //console.log("Error of Users", err);
            if (!err && result.length > 0) {
                callback(result[0]);
            } else {
                callback(null);
            }
        });
    },

    // check email uniqueness
    checkUniqueEmail: function (user_id, request, callback) {

        if (request.email != undefined && request.email != '') {

            if (user_id != undefined && user_id != '') {
                var uniqueEmail = "SELECT * FROM tbl_user WHERE email = '" + request.email + "' AND is_deleted='0' AND id != '" + user_id + "' ";
            } else {
                var uniqueEmail = "SELECT * FROM tbl_user WHERE email = '" + request.email + "' AND is_deleted='0' ";
            }
            con.query(uniqueEmail, function (error, result, fields) {
                if (!error && result[0] != undefined) {
                    callback('0', {
                        keyword: 'rest_keywords_duplicate_email',
                        components: {}
                    }, false);
                } else {
                    callback('1', "Success", true);
                }
            });

        } else {
            callback('1', "Success", true);
        }
    },

    // update user details
    updateuser: function (user_id, upd_params, callback) {
        con.query("UPDATE tbl_user SET ? WHERE id = ? ", [upd_params, user_id], function (err, result, fields) {
            if (!err) {
                Auth.userdetails(user_id, function (response, err) {
                    callback(response);
                });
            } else {
                callback(null, err);
            }
        });
    },

    // sign Up Users
    signUpUsers: function (request, callback) {
        Auth.checkUniqueEmail('', request, function (uniquecode, uniquemsg, isUnique) {
            if (isUnique) {
                var user = {
                    name: request.name,
                    email: (request.email != undefined && request.email != "") ? request.email : '',
                    password: cryptoLib.encrypt(request.password, shaKey, process.env.IV),
                    last_login: require("node-datetime").create().format('Y-m-d H:M:S'),
                };
                if (request.password != '') {
                    request.password = cryptoLib.encrypt(request.password, shaKey, process.env.IV)
                }

                con.query('INSERT INTO tbl_user SET ?', user, function (err, result, fields) {
                    if (!err) {
                        //removed common checkUpdateinfo
                        Auth.userdetails(result.insertId, function (userprofile, err) {
                            common.generateSessionCode(result.insertId, "user", function (Token) {
                                userprofile.token = Token;
                                callback('1', {
                                    keyword: 'rest_keywords_user_signup_success',
                                    components: {}
                                }, userprofile);
                            });
                        });
                    } else {
                        callback('0', {
                            keyword: 'rest_keywords_user_signup_failed',
                            components: {}
                        }, null);
                    }
                });

            } else {
                callback(uniquecode, uniquemsg, null);
            }
        });
    },

    // check login details
    checkLogin: function (request, callback) {

        con.query(`SELECT * FROM tbl_user where email = '${request.email}' AND is_deleted='0'`, function (err, result, fields) {
            if (!err) {
                if (result[0] != undefined) {

                    Auth.userdetails(result[0].id, function (userprofile) {


                        var password = cryptoLib.decrypt(result[0].password, shaKey, process.env.IV);

                        if (password === request.password) {
                            var flag = 1;
                        } else {
                            var flag = 0;
                        }

                        if (flag == 1) {
                            var updparams = {
                                is_online: "1",
                                last_login: require('node-datetime').create().format('Y-m-d H:M:S'),

                            }
                            // update device information of user
                            //common.checkUpdateDeviceInfo(result[0].id, "userprofile", request, function () {
                            Auth.updateuser(result[0].id, updparams, function (userprofile, error) {
                                common.generateSessionCode(result[0].id, "user", function (token) {
                                    userprofile.token = token;
                                    callback('1', {
                                        keyword: 'rest_keywords_user_login_success',
                                        components: {}
                                    }, userprofile);
                                });
                            });
                            //});
                        } else {
                            callback('0', {
                                keyword: 'rest_keywords_invalid_password',
                                components: {}
                            }, null);
                        }
                    });
                } else {
                    //social id
                    callback('0', {
                        keyword: 'text_user_login_fail',
                        components: {}
                    }, null);
                }
            } else {
                callback('0', {
                    keyword: 'text_user_login_fail',
                    components: {}
                }, null);
            }
        });
    },

    forgotPassword: function (request, callback) {

        con.query("SELECT * FROM tbl_user where email='" + request.email + "' AND is_deleted='0' ", function (err, result, fields) {
            if (!err & result[0] != undefined) {

                var updparams = {
                    forgotpassword_token: process.env.APP_NAME + result[0].id,
                    forgotpassword_date: require('node-datetime').create().format('Y-m-d H:M:S')
                }
                Auth.updateuser(result[0].id, updparams, function (isupdated) {

                    result[0].encoded_user_id = Buffer.from(result[0].id.toString()).toString('base64');
                    emailTemplate.forgot_password(result[0], function (forgotTemplate) {
                        common.send_email("Forgot Password", request.email, forgotTemplate, function (isSend) {
                            if (isSend) {
                                callback('1', {
                                    keyword: 'rest_keywords_user_forgot_password_success',
                                    components: {}
                                }, result[0]);
                            } else {
                                callback('0', {
                                    keyword: 'rest_keywords_user_forgot_password_failed',
                                    components: {}
                                }, result[0]);
                            }
                        });
                    });
                });
            } else {
                callback('0', {
                    keyword: 'rest_keywords_user_doesnot_exist',
                    components: {}
                }, null);
            }
        });
    },

    changePassword: function (user_id, request, callback) {
        Auth.userdetails(user_id, function (userprofile) {
            if (userprofile != null) {
                var currentpassword = cryptoLib.decrypt(userprofile.password, shaKey, process.env.IV);
                if (currentpassword != request.old_password) {
                    callback('0', {
                        keyword: 'rest_keywords_user_old_password_incorrect',
                        components: {}
                    }, null);
                } else if (currentpassword == request.new_password) {
                    callback('0', {
                        keyword: 'rest_keywords_user_newold_password_similar',
                        components: {}
                    }, null);
                } else {
                    var password = cryptoLib.encrypt(request.new_password, shaKey, process.env.IV);
                    var updparams = {
                        password: password
                    };
                    Auth.updateuser(user_id, updparams, function (userprofile) {
                        if (userprofile == null) {
                            callback('0', {
                                keyword: 'rest_keywords_something_went_wrong',
                                components: {}
                            }, null);
                        } else {
                            callback('1', {
                                keyword: 'rest_keywords_user_change_password_success',
                                components: {}
                            }, userprofile);
                        }
                    });
                }
            } else {
                callback('0', {
                    keyword: 'rest_keywords_userdetailsnot_found',
                    components: {}
                }, null);
            }
        });
    },

    send_otp: function (request, callback) {

        var OTP = Math.floor(1000 + Math.random() * 9000);
        //var OTP = '1234';

        con.query(`SELECT * FROM tbl_user_otp_details where mobile = '${request.mobile}'`, function (err, result, fields) {

            if (!err && result[0] != undefined) {
                con.query(`UPDATE tbl_user_otp_details SET ? WHERE id = '${result[0].id}'`, { otp: OTP }, function (err, result, fields) {

                    request.OTP = OTP;
                    callback('1', {
                        keyword: 'otp re-send success',
                        components: {}
                    }, request);
                })
            }
            else {

                var params = {
                    code: request.code,
                    mobile: request.mobile,
                    otp: OTP
                }
                con.query(`INSERT tbl_user_otp_details SET ?`, params, function (err, result, fields) {
                    request.OTP = OTP;
                    callback('1', {
                        keyword: 'otp send success',
                        components: {}
                    }, request);
                })
            }
        });

    },

    verify_otp: function (request, callback) {

        con.query(`SELECT * FROM tbl_user_otp_details where mobile = '${request.mobile}' AND otp = '${request.otp}'`, function (err, result, fields) {

            if (!err && result[0] != undefined) {

                con.query(`update tbl_user_otp_details SET otp='' WHERE id = ${result[0].id}`, function (err, result, fields) {
                    callback('1', {
                        keyword: 'otp verify success',
                        components: {}
                    }, null);
                })
            }
            else {
                callback('0', {
                    keyword: 'otp verify fail.',
                    components: {}
                }, null);
            }
        });

    },

    editProfile: function (user_id, request, callback) {
        
        Auth.userdetails(user_id, function (userprofile) {
            if (userprofile != null) {
                var updparams = {
                    name: (request.name != undefined) ? request.name : userprofile.name,
                    email: (request.email != undefined) ? request.email : userprofile.email
                };
                console.log(request)
                Auth.updateuser(user_id, updparams, function (userprofile) {

                    if (userprofile == null) {
                        callback('0', {
                            keyword: 'rest_keywords_something_went_wrong',
                            components: {}
                        }, null);


                    } else {
                        callback('1', {
                            keyword: 'rest_keywords_profileupdate_success',
                            components: {}
                        }, userprofile);
                    }
                });

            } else {
                callback('0', {
                    keyword: 'rest_keywords_userdetailsnot_found',
                    components: {}
                }, null);
            }
        });
    },

    profileshow: function (user_id, req, callback) {
        Auth.userdetails(user_id, function (result) {
            if (result != null) {
                callback('0', {
                    keyword: 'rest_keywords_userdetailshow',
                    components: {}
                }, result);
            } else {
                callback('0', {
                    keyword: 'rest_keywords_userdetailshow_failed',
                    components: {}
                }, true);
            }
        });
    }
}

module.exports = Auth;