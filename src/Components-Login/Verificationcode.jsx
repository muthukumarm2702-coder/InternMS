import { useRef, useState } from "react";
import { Link, useLocation , useNavigate} from "react-router-dom";
import "./Verificationcode.css"
import protect2 from "../assets/loginpage/protect2.png";
import arrow from "../assets/loginpage/arrow.png";
import protectverify from "../assets/loginpage/protectverify.png";

export const Verificationcode = ()=> {
  const [error, setError] = useState("");
  const { state } = useLocation();

  const type = state?.type || "email";
  const value = state?.value || "j***n@g***l.com";

  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const inputs = useRef([]);
  const navigate = useNavigate();

  
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };


  const handleVerify = () => {
  if (otp.some((digit) => digit === "")) {
    setError("Please enter the 6-digit verification code.");
    return;
  }

  setError("");
  navigate("/forgotpassword");
};

const handleChange = (e, index) => {
  const value = e.target.value;

  if (!/^[0-9]?$/.test(value)) return;

  const newOtp = [...otp];
  newOtp[index] = value;
  setOtp(newOtp);


  if (newOtp.every((digit) => digit !== "")) {
    setError("");
  }

  if (value && index < 5) {
    inputs.current[index + 1].focus();
  }
};

  return (
    <div className="verify-main">


      <div className="verify-left">

        <div className="verify-left-content">

          <div className="icon-box">
            <img src={protect2} alt="protect2" />
          </div>

          <h1>Security first.</h1>

          <p>
            We take your account security seriously.
            Verify your <br />identity to protect your internship
            applications and sensitive professional data.
          </p>
 <span className="joined">
          Joined by 10k+ professionals
        </span>
        </div>

       

      </div>

   



   

      <div className="verify-right">

        <h1>Enter Verification Code</h1>

        <p className="mail-text">
          We've sent a 6-digit code to your{" "}
          {type === "email" ? "email" : "mobile"}{" "}
          <strong>{value}</strong>
        </p>

        <div className="otp-container">

          {otp.map((digit, index) => (

            <input
              key={index}
              ref={(el) => (inputs.current[index] = el)}
              value={digit}
              maxLength={1}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />

          ))}

        </div>
              {error && <p className="otp-error">{error}</p>}
       <button
  className="verify-btn"
  onClick={handleVerify}
>

          Verify Identity

          <img src={arrow} alt="" />

        </button>

        <p className="resend">
          Didn't receive the code?
          <span> Resend in 00:58</span>
        </p>

        <hr />

        <Link to="/twostepverification" className="back">

          <img src={protectverify} alt="" />

          Back to verification options

        </Link>

        <a href=""  className="support"> Contact Support</a>
         
       

      </div>

    </div>
  );
}
