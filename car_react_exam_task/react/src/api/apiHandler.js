import axios from "axios";
import { axiosClient } from "./apiClient";

export function signInAdmin(data){
    return axiosClient.post('/api/admin/admin/user_login', data);
}

export function Homepage(){
    return axiosClient.post('/api/v1/car/carinfo');
}

export function Signupapi(data){
    return axiosClient.post('/api/v1/auth/signup',data); 
}

export function Loginapi(data){
    return axiosClient.post('/api/v1/auth/login',data); 
}

export function HeaderMenuapi(data){
    return axiosClient.get('/api/v1/car/companylist',data); 
}

export function Changepasswordapi(data){
    return axiosClient.post('/api/v1/auth/changepassword',data);
}

export function ShowCarInfoapi(data){
    return axiosClient.post('/api/v1/car/carinfo',data);
}

export function Editprofileapi(data){
    return axiosClient.post('/api/v1/auth/editProfile',data);
}

export function AddtoCartapi(data){
    return axiosClient.post('/api/v1/car/addtocart',data);
}

export function BrandFilterapi(data){
    return axiosClient.post('/api/v1/car/carbrandfilter',data);
}

export function RemoveCartapi(data){
    return axiosClient.post('/api/v1/car/removecart',data);
}

export function ForgotPassAPI(data){
    return axiosClient.post('/api/v1/auth/forgotpassword',data);
}

export function Logoutapi(data){
    return axiosClient.post('/api/v1/auth/logout',data);
}