import { useState } from "react";
import "./Login.css";
import mail from "../assets/loginpage/mail.png";
import lock from "../assets/loginpage/lock.png";
import eye from "../assets/loginpage/eye.png";
import eyeClose from "../assets/loginpage/eyeclose.png";
import google from "../assets/loginpage/google.png";
import arrow from "../assets/loginpage/arrow.png";
import { useNavigate } from "react-router-dom";

export const LoginPage=()=> {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="login-main">
      <div className="leftside-container">
        <div className="left-content">
          <h1 className="logo">InternHub</h1>

          <h2>
            Your next big leap starts
            <br />
            here.
          </h2>

          <p>
            Connect with industry leaders, manage your <br />
            applications, and accelerate your career path with our
            <br />
            comprehensive internship management platform.
          </p>

          <div className="stats">
            <div>
              <h3>500+</h3>
              <span>PARTNER COMPANIES</span>
            </div>

            <div>
              <h3>10k+</h3>
              <span>SUCCESS STORIES</span>
            </div>
          </div>
        </div>

        <p className="copyright">&copy; 2024 InternMS</p>
      </div>

      <div className="rightside-container">
        <form className="login-box" onSubmit={handleSubmit}>
          <h1>Welcome Back</h1>

          <p className="subtitle">
            Manage your career journey.
          </p>

          <label>Email Address</label>

          <div className="input-box">
            <img src={mail} alt="mail" className="input-icon" />

            <input
              type="email"
              placeholder="Enter Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {errors.email && (
            <p className="error">{errors.email}</p>
          )}

          <div className="password-row">
            <label>Password</label>

           <button
  type="button"
  className="forgot-link"
  onClick={() => navigate("/forgot-password")}
>
  Forgot Password?
</button>
          </div>

          <div className="input-box">
            <img src={lock} alt="lock" className="lock-input-icon" />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <img
  src={showPassword ? eyeClose : eye}
  alt="eye"
  className="eye-icon"
  onClick={() => setShowPassword(!showPassword)}
/>
          </div>

          {errors.password && (
            <p className="error">{errors.password}</p>
          )}

          <div className="remember">
            <input type="checkbox" />

            <span>Keep me signed in</span>
          </div>

          <button className="signin-btn" type="submit">
            Sign In

            <img src={arrow} alt="arrow" />
          </button>

            <div className="divider">

      <span></span>

      <p>OR CONTINUE WITH</p>

      <span></span>

    </div>

          <div className="google-align">
            <button type="button" className="google-btn">
              <img src={google} alt="google" />
              Sign in with Google
            </button>

            <p className="create">
              Don't have an account?

              <button
  type="button"
  className="create-link"
  onClick={() => navigate("/register/hr")}
>
  Create Account
</button>
            </p>
          </div>

          <div className="footer-links">
            <a href="/">Help</a>

            <a href="/">Privacy</a>

            <a href="/">Terms</a>
          </div>
        </form>
      </div>
    </div>
  );
}
