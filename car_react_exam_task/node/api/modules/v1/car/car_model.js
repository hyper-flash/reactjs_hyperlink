var con = require('../../../config/database');
require("dotenv").config();
var common = require('../../../config/common');
var cryptoLib = require('cryptlib');
var asyncLoop = require('node-async-loop');
var shaKey = cryptoLib.getHashSha256(process.env.KEY, 32);
var moment = require('moment');
const { end } = require('../../../config/database');
const { updateLocale } = require('moment');
const { checkDeviceInfo } = require('../../../config/common');
const { request } = require('express');
car = {

    get_car_by_search: function (request, callback) {
        con.query(`SELECT id, name, image, fuel_type, top_speed, engine, price FROM tbl_car WHERE name LIKE '%${request.search}%' AND is_active = 1`, (err, result) => {
            if (!err) {
                callback('1', {
                    keyword: 'products found...',
                    components: {}
                }, result);
            } else {
                callback('0', {
                    keyword: 'products not found...',
                    components: {}
                }, null);
            }
        })

    },

    get_company_list: function (callback) {
        con.query('SELECT id , name, image FROM `tbl_company` ORDER BY `tbl_company`.`id` AND is_active = 1 DESC', (err, result) => {
            if (!err) {
                //callback(result)
                callback('1', {
                    keyword: 'Details Found...',
                    components: {}
                }, result);
            } else {
                callback('0', {
                    keyword: 'Details Not Found...',
                    components: {}
                }, null);
            }
        })
    },

    get_car_list_and_info: function (request, callback) {
        if (request.id == '' || request.id == undefined) {
            con.query(`SELECT c.id, co.name, c.name, c.image, c.fuel_type, c.top_speed, c.engine, c.price, c.is_active FROM tbl_car as c
            JOIN tbl_company as co ON c.company_id = co.id
            WHERE c.is_active = 1`, (err, result) => {
                if (!err) {
                    //callback(result)
                    callback('1', {
                        keyword: 'Details Found...',
                        components: {}
                    }, result);
                } else {
                    callback('0', {
                        keyword: 'Details Not Found...',
                        components: {}
                    }, null);
                }
            })
        } else {
            con.query(`SELECT c.id, co.name, c.name, c.image, c.fuel_type, c.top_speed, c.engine, c.price, c.is_active FROM tbl_car as c
            JOIN tbl_company as co ON c.company_id = co.id
            WHERE c.id = ${request.id} AND c.is_active = 1`, (err, result) => {
                if (!err) {
                    //callback(result)
                    callback('1', {
                        keyword: 'Details Found...',
                        components: {}
                    }, result);
                } else {
                    callback('0', {
                        keyword: 'Details Not Found...',
                        components: {}
                    }, null);
                }
            })
        }
    },

    get_car_list: function (callback) {
        con.query('SELECT id , name, image FROM `tbl_car` ORDER BY `tbl_car`.`id` AND is_active = 1 DESC', (err, result) => {
            if (!err) {
                //callback(result)
                callback('1', {
                    keyword: 'Details Found...',
                    components: {}
                }, result);
            } else {
                callback('0', {
                    keyword: 'Details Not Found...',
                    components: {}
                }, null);
            }
        })
    },

    get_one_brand_car: function (brand, callback) {
        con.query(`SELECT c.id, co.name as Brand, c.name, c.image, c.fuel_type, c.top_speed, c.engine, c.price, c.is_active FROM tbl_car as c
        JOIN tbl_company as co ON c.company_id = co.id WHERE co.name LIKE '${brand}' AND c.is_active = 1;`, (err, result) => {
            if (!err) {
                //callback(result)
                callback('1', {
                    keyword: 'Details Found...',
                    components: {}
                }, result);
            } else {
                callback('0', {
                    keyword: 'Details Not Found...',
                    components: {}
                }, null);
            }
        })
    },

    // Add to cart api start -----------------

    add_to_cart: function (request, callback) { 
        if(request.product_id != undefined && request.qty != undefined && request.user_id != undefined){
            if(request.qty <= 1){
                request.qty = 1
            }
            car.cart_in_user_check(request.user_id, (user_check) => {
                if (user_check == 'USER FOUND' && user_check != '') {
                    car.update_product_in_cart(request, (product_check) => {
                        if (product_check == 'NOT UPDATED') {
                            car.add_product_in_cart(request, (add_product) => {
                                if (add_product == 'NOT ADDED PRODUCT') {
                                    callback('0', {
                                        keyword: 'Details Not Found...',
                                        components: {}
                                    }, null);
                                } else {
                                    car.get_cart_details(request, (data_cart_details) => {
                                        callback('1', {
                                            keyword: 'Details Found...',
                                            components: {}
                                        }, data_cart_details);
                                    })
                                }
                            })
                        } else {
                            car.get_cart_details(request, (data_cart_details) => {
                                callback('1', {
                                    keyword: 'Details Found...',
                                    components: {}
                                }, data_cart_details);
                            })
                        }
                    })
                } else {
                    car.add_user_in_cart(request, (check_user_add) => {
                        if (check_user_add == 'ADDED USER') {
                            car.get_cart_details(request, (data_cart_details) => {
                                callback('1', {
                                    keyword: 'Details Found...',
                                    components: {}
                                }, data_cart_details);
                            })
                        } else {
                            callback('0', {
                                keyword: 'Details not Found...',
                                components: {}
                            }, null);
                        }
                    })
                }
            })
        }else{
            car.get_cart_details(request, (data_cart_details) => {
                callback('1', {
                    keyword: 'Details Found...',
                    components: {}
                }, data_cart_details);
            })
        }
    },

    cart_in_user_check: function (user_id, callback) {
        con.query(`SELECT * FROM tbl_order WHERE user_id = ${user_id} AND is_active = 1`, (err, result) => {
            if (!err) {
                if (result == '' || result == undefined) {
                    callback('USER NOT FOUND');
                } else {
                    callback('USER FOUND');
                }
            } else {
                console.log("cart_in_user_check - error: " + err)
                callback(null)
            }
        })
    },

    add_user_in_cart: function (request, callback) {
        con.query(`INSERT INTO tbl_order SET ?`, request, (err, result) => {
            if (!err) {
                if (result == '' || result == undefined || result.affectedRows == 0) {
                    callback('NOT ADDED USER');
                } else {
                    callback('ADDED USER');
                }
            } else {
                console.log("add_user_in_cart - error: " + err)
                callback(null)
            }
        })
    },

    update_product_in_cart: function (request, callback) {
            con.query(`UPDATE tbl_order SET qty = ${request.qty} WHERE user_id = ${request.user_id} AND product_id = ${request.product_id}`, (err, result) => {
                if (!err) {
                    if (result == '' || result == undefined || result.affectedRows == 0) {
                        callback("NOT UPDATED")
                    } else {
                        callback("UPDATED")
                    }
                } else {
                    console.log("update_product_in_cart - error: " + err)
                    console.log(err)
                    callback(null)
                }
            })
        
    },

    add_product_in_cart: function (request, callback) {
        con.query(`INSERT INTO tbl_order SET ?`, request, (err, result) => {
            if (!err) {
                if (result == '' || result == undefined || result.affectedRows == 0) {
                    callback('NOT ADDED PRODUCT');
                } else {
                    callback('ADDED PRODUCT');
                }
            } else {
                console.log("add_product_in_cart - error: " + err)
                callback(null)
            }
        })
    },

    get_cart_details: function (request, callback) {
        con.query(`SELECT o.product_id, o.user_id, c.name, c.image, o.qty, c.price FROM tbl_order as o JOIN tbl_car as c ON o.product_id = c.id WHERE user_id = ${request.user_id}`, (err, result) => {
            if (!err) {
                if (result == '' || result == undefined) {
                    callback(null);
                } else {
                    let total = 0;
                    result.forEach((item, index) => {
                        //console.log(item, index);
                        total = total + item.price
                    });

                    callback(result);
                }
            } else {
                console.log("add_user_in_cart - error: " + err)
                callback(null)
            }
        })
    },

    // Add to cart api end -----------------

    // cart item delete api
    removeCart: function (request, callback) {
        car.get_cart_details(request, function (cart_data) {
            con.query(`Delete from tbl_order where user_id = ${request.user_id} AND product_id = ${request.product_id} AND is_active = 1`, (err, result) => {
                if (!err && result != undefined) {
                    if (result.affectedRows != 0) {
                        callback('1', {
                            keyword: 'deleted',
                            components: {}
                        }, cart_data);
                    } else {
                        callback('1', {
                            keyword: 'product is not found',
                            components: {}
                        }, cart_data);
                    }
                }
                else {
                    callback('0', {
                        keyword: 'delete fail',
                        components: {}
                    }, null);
                }
            });
        });
    },
}

module.exports = car;