var express = require('express');
var middleware = require('../../../middleware/headerValidator');
var common = require('../../../config/common');
var car_model = require('./car_model');
var router = express.Router();
var moment = require('moment');

router.get("/search", function (req, res) {
    middleware.decryption(req.body, function (request) {
        var rules = {
            search: 'required'
        }

        const messages = {
            'required': req.language.required,
        }
        request.user_id = req.user_id;
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            car_model.get_car_by_search(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    });
});
// Route For Shop List API
router.get("/order", function (req, res) {
    middleware.decryption(req.body, function (request) {
        var rules = {
            "restaurant_id": "required",
            "address_id": "required",
            "total": "required",
            "service_charge": "required",
            "subtotal": "required",
            "discount_amount": "required",
            "grand_total": "required",
            "promocode": "required",
            "payment_method": "required",
            "status": "required",
            "dish": "required"
        }
        const messages = {
            'required': req.language.required,
        }
        request.user_id = req.user_id;
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            car_model.order(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    });
});

router.get("/restaurant_info", function (req, res) {
    middleware.decryption(req.body, function (request) {
        var rules = {
            id: 'required'
        }

        const messages = {
            'required': req.language.required,
        }

        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            car_model.get_one_restaurant_info(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    });
});

router.get("/companylist", function (req, res) {
    car_model.get_company_list(function (responsecode, responsemsg, responsedata) {
        middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
    });
});

router.post("/carinfo", function (req, res) {
    middleware.decryption(req.body, function (request) {
        car_model.get_car_list_and_info(request, function (responsecode, responsemsg, responsedata) {
            middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
        });
    });
});

router.post("/carbrandfilter", function (req, res) {
    var rules = {
        brand: "required"
    }
    const messages = {  
        'required': req.language.required,
    }
    
        middleware.decryption(req.body, function (request) {
            if (middleware.checkValidationRules(request, res, rules, messages, {})) {
                car_model.get_one_brand_car(request.brand, function (responsecode, responsemsg, responsedata) {
                    middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
                });
            }
        });
    
});

router.post("/addtocart", function (req, res) {
    middleware.decryption(req.body, function (request) {
        var rules = {
            product_id: "required",
            qty: "required"
        }

        const messages = {  
            'required': req.language.required,
        }
        request.user_id = req.user_id;
        //if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            car_model.add_to_cart(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        //}
    });
});

router.post("/removecart", function(req, res){
    middleware.decryption(req.body, function (request) {
        var rules = {
            product_id: "required"
        }

        const messages = {  
            'required': req.language.required,
        }
        request.user_id = req.user_id;
        if (middleware.checkValidationRules(request, res, rules, messages, {})) {
            car_model.removeCart(request, function (responsecode, responsemsg, responsedata) {
                middleware.sendresponse(req, res, 200, responsecode, responsemsg, responsedata);
            });
        }
    });
});




module.exports = router;