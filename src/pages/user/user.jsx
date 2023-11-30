import "./user.css"
import user_icon from "../../assets/person.png"
import email_icon from "../../assets/email.png"
import password_icon from "../../assets/password.png"
import { useState } from "react"



import React from "react";

export const User = () => {
    const [action, setAction] = useState("Login");




  return <div className="containerlog">
    <div className="headerlog">
        <div className="text">{action}</div>
        <div className="underline"></div>
        </div>
        <div className="inputs">
            {action==="Login"?<div></div>:             <div className="input">
                <img src={user_icon} alt="" />
                <input type="text" placeholder="Name" />
                </div> }

                <div className="input">
                <img src={email_icon} alt="" />
                <input type="email" placeholder="Email"/>
                </div>
                <div className="input">
                <img src={password_icon} alt="" />
                <input type="password" placeholder="Password"/>
                </div>
        </div>
        {action==="Sign up"?<div></div>:  <div className="forgot-password">Lost Password? <span>Click here!</span></div> }
       
        <div className="submit-container">
            <div className={action==="Login"?"submit gray" : "submit"} onClick={()=>{setAction("Sign up")}}>Sign up</div>
            <div className={action==="Sign up"?"submit gray" : "submit"} onClick={()=>{setAction("Login")}}>Login</div>


        </div>


  </div>;
};

