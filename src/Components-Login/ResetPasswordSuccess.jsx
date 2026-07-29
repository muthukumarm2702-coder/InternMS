import { useNavigate } from "react-router-dom";
import "./ResetPasswordSuccess.css"
import passwordsuccess from "../assets/loginpage/passwordsuccess.png"
import successimg from "../assets/loginpage/successimg.png";
import success from "../assets/loginpage/success.png"

export const ResetPasswordSuccess=() => {
    const navigate = useNavigate();

  return (
    <div className='resetpassword-success-main'>

        <div className="resetpassword-success-left">

  <div className="success-left-content">

    <img
      className="success-left-icon"
      src={passwordsuccess}
      alt="passwordsuccess"
    />

    <h1>
      Password reset <br />
      successfully
    </h1>

    <p>
      Your security is our priority. You can now log in with
      <br />
      your new credentials.
    </p>

    <img
      className="success-left-image"
      src={successimg} alt="successimg"
    />

  </div>

</div>

  <div className="resetpassword-success-right">

      <div className="success-box">

        <img
          src={success}
          alt="Success"
          className="success-badge"
        />

        <h1 className="success-title">
          Success
        </h1>

        <p className="success-text">
          Your password has been updated. To keep your account
          secure, we recommend not sharing your password with
          anyone.
        </p>

        <button className="login-btn" onClick={() => navigate("/login")}>
          Back to Login
        </button>

      </div>

    </div>
    </div>
  )
}
