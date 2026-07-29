import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ResetPassword.css"
import resetprotect from "../assets/loginpage/resetprotect.png"
import forgot from "../assets/loginpage/forgot.png";
import lock from "../assets/loginpage/lock2.png";
import protectcode from "../assets/loginpage/protectcode.png";
import arrow from "../assets/loginpage/arrow.png";
import eye from "../assets/loginpage/eye.png";
import eyeclose from "../assets/loginpage/eyeclose.png";



export const ResetPassword=()=> {
const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);
const [newPassword, setNewPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");
const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleUpdatePassword = () => {
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#!^()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;

  if (!newPassword || !confirmPassword) {
    setError("Please fill in both password fields.");
    return;
  }

  if (!passwordRegex.test(newPassword)) {
    setError(
      "Password must contain at least 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special character."
    );
    return;
  }

  if (newPassword !== confirmPassword) {
    setError("Passwords do not match.");
    return;
  }

  setError("");
  navigate("/ResetPasswordSuccess");
};

  return (
    <div className='resetmain-container'>

        <div className='resetleft-container'>

            <div>
                <h1>Secure your <br /> account.</h1>
                <p>Ensure your career progress is protected. Set a strong <br />
                password to continue your journey with InternHub.
                </p>

                <img src={resetprotect} alt="resetprotect" />
            </div>

             <p>&copy;2024 InternMS &nbsp;  {"\u2022"} &nbsp; privacy policy</p>


        </div>
     
        <div className="resetright-container">

  <div className="reset-password-card">

    <div className="reset-password-icon">
      <img src={forgot} alt="forgot" />
    </div>

    <h1 className="reset-password-title">
      Set New Password
    </h1>

    <p className="reset-password-text">
      Your new password must be different from previous
      passwords.
    </p>

   <div className="reset-password-field">
  <label>New Password</label>

  <div className="reset-password-input-box">
    <img src={lock} alt="" className="left-icon" />

    <input
      type={showPassword ? "text" : "password"}
      placeholder="Min. 8 characters"
      value={newPassword}
      onChange={(e) => setNewPassword(e.target.value)}
    />
    <button
      type="button"
      className="reset-eye-button"
      aria-label={showPassword ? "Hide password" : "Show password"}
      onClick={() => setShowPassword((visible) => !visible)}
    >
      <img src={showPassword ? eyeclose : eye} alt="" className="eye-icon" />
    </button>
  
  </div>
</div>

<div className="reset-password-field">
  <label>Confirm New Password</label>

  <div className="reset-password-input-box">
    <img src={protectcode} alt="" className="left-icon" />

    <input
      type={showConfirmPassword ? "text" : "password"}
      placeholder="Repeat your password"
      value={confirmPassword}
      onChange={(e) => setConfirmPassword(e.target.value)}
    />
    <button
      type="button"
      className="reset-eye-button"
      aria-label={showConfirmPassword ? "Hide confirmed password" : "Show confirmed password"}
      onClick={() => setShowConfirmPassword((visible) => !visible)}
    >
      <img src={showConfirmPassword ? eyeclose : eye} alt="" className="eye-icon" />
    </button>
    
   
  </div>
</div>

{error && <p className="reset-error">{error}</p>}

<div className="reset-password-rules">
  <div className="reset-rule-item">
    <span className="reset-rule-circle"></span>
    <p>At least 8 characters</p>
  </div>

  <div className="reset-rule-item">
    <span className="reset-rule-circle"></span>
    <p>Passwords match</p>
  </div>
</div>
   <button
  className="reset-password-btn"
  onClick={handleUpdatePassword}
>
      Update Password
      <img src={arrow} alt="" />
    </button>

    <div className="reset-login-link" >
      Back to Login
    </div>

  </div>

</div>      
    </div>
  )
}
