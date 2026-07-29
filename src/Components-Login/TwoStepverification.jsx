import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./TwoStepverification.css"
import protect from "../assets/loginpage/protect.png"
import twostepmail from "../assets/loginpage/twostepmail.png"
import mobile from "../assets/loginpage/mobile.png"
import arrow from "../assets/loginpage/arrow.png"
import backarrow from "../assets/loginpage/backarrow.png"


export const TwoStepverification=() =>{
    const [selected, setSelected] = useState("email");
    const navigate = useNavigate();
    const handleVerify = () => {
  if (selected === "email") {
    navigate("/verificationcode", {
      state: {
        type: "email",
        value: "j***n@gmail.com",
      },
    });
  } else {
    navigate("/verificationcode", {
      state: {
        type: "mobile",
        value: "+91 9****5678",
      },
    });
  }
};


  return (
    <div className='twostep-main'>

        <div className='twostep-left-container'>
            <div className='twostep-left-content'>
                <h2>Secure Your Account</h2>
                <p>Protecting your professional profile and <br />
                   application history is our top priority. Choose a <br />
                   method to verify your odentity.</p>
                <div className='protect-align'>
                <img src={protect} alt="protect" />
                <div>
                    <h5>265-bit Encryption</h5>
                    <p>Bank-grade security standards</p>
                </div>
                
                </div>
            </div>

             <p className="copyright">&copy; 2024 InternMS</p>
        </div>



        <div className='twostep-right-container'>
         <div>
            <h1>Two-Step Verification</h1>
            <p>Choose how you'd like to verify identity.</p>
         </div>
        

         <div
          className={`verify-option ${selected === "email" ? "active" : ""}`}
          onClick={() => setSelected("email")}
        >
          <div className="option-left">
            <div className="icon-box">
              <img src={twostepmail} alt="mail" />
            </div>

            <div>
              <h4>Email Verification</h4>
              <p>j***n@gmail.com</p>
            </div>
          </div>

          <input
            type="radio"
            checked={selected === "email"}
            readOnly
          />
        </div>

        <div
          className={`verify-option ${selected === "mobile" ? "active" : ""}`}
          onClick={() => setSelected("mobile")}
        >
          <div className="option-left">
            <div className="icon-box">
              <img src={mobile} alt="mobile" />
            </div>

            <div>
              <h4>Mobile Verification</h4>
              <p>+91 9****5678</p>
            </div>
          </div>

          <input
            type="radio"
            checked={selected === "mobile"}
            readOnly
          />
        </div>

        <button className="verify-btn" onClick={handleVerify}>
  Send Verification Code <img className="arrow" src={arrow} alt="arrow"/>
</button>

        <Link to="/login" className="back-link">
          <img className="arrow" src={backarrow} alt="backarrow" /> Back to Login
        </Link>

        <hr />

        <p className="support">
          Need help? <span>Contact Support</span>
        </p>

      </div>
        </div>     
  )
}
