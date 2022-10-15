import React, { useState,useEffect } from 'react'
import {signInAdmin,getAssignSchool} from '../../api/apiHandler'
import Alert from '../../components/Alert/Alert';
import {loginRedirectCallWithDataStore} from "../../pages/Common/RedirectPathMange"

export default function SignIn(props) {

const [msg,setMsg] = useState (null);

const showAlert = (msgDisplay,type) =>{
        setMsg({
            msg:msgDisplay,
            type:type
        })
}

const initalValue= {email:"",password:""}
const [formValues,setFormValues]= useState(initalValue)

const handleChange = (e)=>{
    if(e.target.value.trim()==""){
        e.target.value=e.target.value.trim()      
    }
    const {name,value} =e.target;
    setFormValues({...formValues,[name]:value});
}

const handleChangePassword = (e)=>{
    const {name,value} =e.target;
    setFormValues({...formValues,[name]:value});
}

const clickSubmitButton = (e)=>{
    e.preventDefault();
    console.log(formValues)
    console.log("Login Api Call");
    props.isLoader(true)
    signInAdmin({"username":formValues.email,"password":formValues.password,"user_type":"monitoring_admin"}).then((resposnse)=>{
        props.isLoader(false)
        console.log(resposnse)
        if(resposnse.data.code==1){
            loginRedirectCallWithDataStore(resposnse.data.data)
        }else{
            showAlert(resposnse.data.message,"danger")
        }
    }); 
       
}

return (
<div className="authentication">
    <Alert alert={msg}/>      
    <div className="card">
        <div className="body">
            <div className="row">
                <div className="col-lg-12">
                    <div className="header slideDown">
                        <div className="logo"><img src="assets/images/logo.png" alt="Nexa"/></div>
                        <h1>Monitoring Admin</h1>
                    </div>                        
                </div>
                <form className="col-lg-12" id="form_validation" method="" onSubmit={clickSubmitButton} action="#" >
                    <h5 className="title">Sign in to your Account</h5>
                    <div className="form-group form-float">
                        <div className="form-line">
                            <input type="text" className="form-control" required id="email" name="email" value={formValues.email} onChange={handleChange}/>
                            <label className="form-label">Username</label>
                        </div>
                    </div>
                    <div className="form-group form-float">
                        <div className="form-line">
                            <input type="password" className="form-control" required id="password" name="password" value={formValues.password} onChange={handleChangePassword}/>
                            <label className="form-label">Password</label>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <button className="btn btn-raised btn-primary waves-effect" type="submit">SIGN IN</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  )
}
