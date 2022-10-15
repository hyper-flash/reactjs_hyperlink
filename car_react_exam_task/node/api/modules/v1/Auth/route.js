var express = require('express');
var middleware = require('../../../middleware/headerValidator');
var common = require('../../../config/common');
var auth_model = require('./auth_model');
const { request } = require('express');
var router = express.Router();

//Signup
router.post("/signup", function (req, res) {
    // var request = JSON.parse(req.body);
    // console.log(request.name)
    //request method decryption
    middleware.decryption(req.body, function (request) {
        var rules = {
            name: 'required',
            email: 'required|email',
            password: (request.login_type == 'S') ? 'required' : ''
        }
        
        const messages = {
            'required': req.language.required,
            'in': req.language.in,
        }
        request.language = req.lang
        // checks all validation rules defined above and if error send back response
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            auth_model.signUpUsers(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    });
});

// user login
router.post("/login", function (req, res) {

    middleware.decryption(req.body, function (request) {

        var request = request
        var rules = {
            email: 'required',
            password: ''
        }

        const messages = {
            'required': req.language.required,
            'in': req.language.in,
        }

        request.language = req.lang
        // checks all validation rules defined above and if error send back response
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            auth_model.checkLogin(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    });
});

router.post("/forgotpassword", function (req, res) {

    middleware.decryption(req.body, function (request) {

        var request = request
        var rules = {
            email: 'required|email'
        }

        const messages = {
            'required': req.language.required,
            'email': req.language.email,
        }
        request.language = req.lang
        // checks all validation rules defined above and if error send back response
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            auth_model.forgotPassword(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    });
});

router.post("/changepassword", function (req, res) {

    middleware.decryption(req.body, function (request) {

        var request = request
        var rules = {
            old_password: 'required',
            new_password: 'required',
        }

        const messages = {
            'required': req.language.required
        }
        request.language = req.lang
        // checks all validation rules defined above and if error send back response
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            auth_model.changePassword(req.user_id, request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    });
});

router.post('/logout', function (req, res) {

    var updusers = {
        is_online: "0"
    };
    auth_model.updateuser(req.user_id, updusers, function (userprofile, error) {
        if (userprofile != null) {
            var deviceparam = {
                token: ''
            };
            common.updateDeviceInfo(req.user_id, null,deviceparam, function (respond) {
                middleware.sendresponse(req, res, 200, '1', {
                    keyword: 'rest_keywords_userlogout_success',
                    components: {}
                }, null);
            });
        } else {
            middleware.sendresponse(req, res, 200, '0', {
                keyword: 'rest_keywords_something_went_wrong',
                components: {}
            }, null);
        }
    });
});

router.post("/editProfile", function (req, res) {
    middleware.decryption(req.body, function (request) {
        request.language = req.lang
        // checks all validation rules defined above and if error send back response
        auth_model.editProfile(req.user_id, request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
        });
    });
});

// API for profile Show
router.get("/profileshow", function (req, res) {
        if (middleware.checkValidationRules(request, res, {})) {
            request.language = req.lang
            auth_model.profileshow(req.user_id, request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
});

router.post("/send_otp",function(req,res){
        
    middleware.decryption(req.body,function(request){
        
        var rules = {
            code: 'required',
            mobile: 'required',
        }

        const messages = {
            'required': req.language.required
        }
        request.language = req.lang
        // checks all validation rules defined above and if error send back response
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            auth_model.send_otp(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }

    });//end decryption
});


router.post("/verify_otp",function(req,res){
        
    middleware.decryption(req.body,function(request){
        
        var rules = {
            code: 'required',
            mobile: 'required',
            otp: 'required',
        }

        const messages = {
            'required': req.language.required
        }
        request.language = req.lang
        // checks all validation rules defined above and if error send back response
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            auth_model.verify_otp(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
                
    });//end decryption
});


module.exports = router;
