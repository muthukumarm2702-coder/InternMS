import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPasswordOtp.css"
import protect from "../assets/loginpage/protect.png"
import arrow from "../assets/loginpage/arrow.png"
import lock2 from "../assets/loginpage/lock2.png"
import protectcode from "../assets/loginpage/protectcode.png"


export const ForgotPasswordOtp=()=> {
const navigate = useNavigate();
   
const inputs = useRef([]);
const [otp, setOtp] = useState(["", "", "", "", "", ""]);
const [error, setError] = useState("");

const handleChange = (e, index) => {
  const value = e.target.value;
  if (!/^\d*$/.test(value)) return;

  const newOtp = [...otp];
  newOtp[index] = value;
  setOtp(newOtp);

  if (value && index < 5) {
    inputs.current[index + 1].focus();
  }

  setError("");
};

const handleKeyDown = (e, index) => {
  if (e.key === "Backspace" && otp[index] === "" && index > 0) {
    inputs.current[index - 1].focus();
  }
};

const handleVerify = () => {
  if (otp.some((digit) => digit === "")) {
    alert("Please enter all 6 digits.");
    return;
  }

  alert("OTP Verified");
   navigate("/reset-password");
};


  return (
    <div className='main-container'>

        <div className='left-container'>

          <img src={protect} alt="protect" />  

        <h1>Verify Identity</h1>   
        <p>we're sent a 6-digit code to your choosen method. <br />
        Please enter it to continue
        </p>

        </div>

       <div className="right-container">

        <div className="otp-box">

          <h1>Enter Verification Code</h1>

          <p className="otp-text">
            We've sent a 6-digit code to your registered Email and phone
            number. The code will <br />
            expire in <span>09:59</span> minutes.
          </p>

         <div className="otp-inputs">
  {otp.map((digit, index) => (
    <input
      key={index}
      type="text"
      inputMode="numeric"
      maxLength="1"
      value={digit}
      ref={(el) => (inputs.current[index] = el)}
      onChange={(e) => handleChange(e, index)}
      onKeyDown={(e) => handleKeyDown(e, index)}
    />
  ))}
</div>

{error && <p className="otp-error">{error}</p>}

<button className="verify-btn" onClick={handleVerify}>
  Verify and Continue
  <img src={arrow} alt="" />
</button>

          <p className="resend">
            Didn't receive the code?
            <span> Resend (in 00:55)</span>
          </p>

          <hr />

          <div className="security">

            <div>
              <img src={lock2} alt="" />
              <span>END-TO-END ENCRYPTED</span>
            </div>

            <div>
              <img src={protectcode} alt="" />
              <span>SECURE HANDSHAKE</span>
            </div>

          </div>

        </div>

      </div>

    </div>
      
    
  )
}
