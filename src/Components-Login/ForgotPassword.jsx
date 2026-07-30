import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css"

import forgot from "../assets/loginpage/forgot.png"
import arrow from "../assets/loginpage/arrow.png"
import backarrow from "../assets/loginpage/backarrow.png"

export const ForgotPassword=() => {
  const navigate = useNavigate();
  const [method, setMethod] = useState("email");

  return (
    <div className='main'>
        <div className='left-container'>

          <div className='left-heading'>
            <h1>Regain access to <br />your professional <br />future.</h1>
            <p>We're here to help you get back on track, secure your <br />
            account and continue exploring the best internship <br />
            opportunities worldwide.</p>
                         
          </div>   

           <p>&copy;2024 InternMS &nbsp;  {"\u2022"} &nbsp; privacy policy</p>
              
        </div>

         <div className="right-conatainer">
      <div className="forgot-box">

        <div className="top-links">
          <a href="#">Help</a>
          <a href="#">Login</a>
        </div>

        <div className="forgot-icon">
          <img src={forgot} alt="forgot" />
        </div>

        <h1 className="forgot-title">Forgot Password?</h1>

        <p className="forgot-subtitle">
          Choose your preferred method to receive a one-time <br />
          verification code.
        </p>

        <h4 className="method-title">Verification Method</h4>
        <div
          className={`verify-option ${
            method === "email" ? "active" : ""
          }`}
          onClick={() => setMethod("email")}
        >
          <input
  type="radio"
  checked={method === "email"}
  onChange={() => setMethod("email")}
/>

          <div className="option-content">
            <h4>Email Address</h4>
            <p>Send code to j**n@g***l.com</p>
          </div>
        </div>

        <div
          className={`verify-option ${
            method === "sms" ? "active" : ""
          }`}
          onClick={() => setMethod("sms")}
        >
         <input
  type="radio"
  checked={method === "sms"}
  onChange={() => setMethod("sms")}
/>

          <div className="option-content">
            <h4>SMS / Text Message</h4>
            <p>Send code to +91 9***-5678</p>
          </div>
        </div>

        <button className="verify-btn" onClick={() => navigate("/forgot-password/verify")}>
          Send Verification Code
          <img src={arrow} alt="" />
        </button>

        <div className="back-login">
          <img src={backarrow} alt="" />
          <a href="">Back to Login</a>
        </div>

      </div>
    </div>
    </div>
  )
}
