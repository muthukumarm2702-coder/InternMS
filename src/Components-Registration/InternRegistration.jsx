import { useState } from "react";
import {useNavigate} from "react-router-dom";
import "./InternRegistration.css";
import hr from "../assets/registration/hr.png";
import mentor from "../assets/registration/mentor.png";
import intern from "../assets/registration/intern.png";
import company from "../assets/registration/company.png";
import eye from "../assets/registration/eye.png";
import eyeClose from "../assets/registration/eyeclose.png";
import user from "../assets/registration/user.png";
import smarttracking from"../assets/registration/smarttracking.png";
import verified from "../assets/registration/verifiedemployees.png";


export const InternRegistration =() => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

   const [form, setForm] = useState({
  fullName: "",
  email: "",
  phone: "",
  dob: "",
  college: "",
  field: "",
  graduationYear: "",
  resume: null,
  password: "",
  confirmPassword: "",
  agree: false,
});
const handleChange = (e) => {
  const { name, value, type, checked, files } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]:
      type === "checkbox"
        ? checked
        : type === "file"
        ? files[0]
        : value,
  }));
};

const [errors, setErrors] = useState({});
  const validate = () => {
  let newErrors = {};

  // Full Name
  if (!form.fullName.trim()) {
    newErrors.fullName = "Full Name is required";
  } else if (!/^[A-Za-z ]+$/.test(form.fullName)) {
    newErrors.fullName = "Only letters are allowed";
  }

  // Email
  if (!form.email.trim()) {
    newErrors.email = "Email Address is required";
  } else if (
    !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email)
  ) {
    newErrors.email = "Enter a valid email address";
  }

  // Phone
  if (!form.phone.trim()) {
    newErrors.phone = "Phone Number is required";
  } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
    newErrors.phone = "Enter a valid 10-digit mobile number";
  }

  // Date of Birth
  if (!form.dob) {
    newErrors.dob = "Date of Birth is required";
  }

  // College
  if (!form.college.trim()) {
    newErrors.college = "College Name is required";
  }

  // Field of Study
  if (!form.field) {
    newErrors.field = "Field of Study is required";
  }

  // Graduation Year
  if (!form.graduationYear) {
    newErrors.graduationYear = "Graduation Year is required";
  }

  // Resume
  if (!form.resume) {
    newErrors.resume = "Resume is required";
  }

  // Password
  if (!form.password) {
    newErrors.password = "Password is required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/.test(form.password)
  ) {
    newErrors.password =
      "Minimum 8 characters, uppercase, lowercase, number & special character";
  }

  // Confirm Password
  if (!form.confirmPassword) {
    newErrors.confirmPassword = "Confirm Password is required";
  } else if (form.password !== form.confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match";
  }

  // Terms
  if (!form.agree) {
    newErrors.agree = "Please accept Terms & Privacy Policy";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(validate()){
            alert("Intern Registered Successfully");
        }

    };
  return (
    <div className='intern-main'>
     <div className='intern-left-container'>
     <p>InternMs</p>
      <div className='intern-left-content'>
        <div className='content-align'>
        <h1>Your gateway to<br/>professional
        <br/>excellence starts here.
        </h1>
        <p>Join thousands of ambitious students securing world-<br/>
        class internships at leading tech companies and<br/>
        creative agencies.</p>
        </div>
        <div className='intern-left-align'>
        <img src={verified} alt="verified"/>
            <div>
                <h6>Verified Employers</h6>
            <p>Connect with pre-vetted top-tier companies worldwide. </p>
            </div>
            </div>
            <div className='intern-left-align'>
                <img src={smarttracking} alt="smarttracking"/>
                <div>
                    <h6>Smart Tracking</h6>
                <p>Manage all your applications in one organized <br/> dashboard</p>
                </div>
            </div>
            <hr/>
            <div className='profile'>
                 <p> "InternMS helped me land my dream internship at a Fortune 500<br/>company within 3 weeks of joining."</p>
            </div>
            <div className='profile-author'>
                <img src={user} alt="user"/>
                <span>— Sarah J., Product Design Intern</span>
            </div>
      </div>
     </div>
     <div className='intern-right-container'>
        <form className='intern-register-card'
        onSubmit={handleSubmit}>
            <h1>Intern Registration</h1>
            <p className='intern-subtitle'>Fill in the details below to create your professional account</p>
            <label className='register-label'>Registering as <span>*</span></label>
            <div className='register-type'>
                <div className='register-box' onClick={()=> navigate("/register/hr")}>
                    <img src={hr} alt=""/>
                    <p>HR</p>
                </div>
                <div className='register-box' onClick={()=> navigate("/register/mentor")}>
                    <img src={mentor} alt=""/>
                    <p>Mentor</p>
                </div>
                <div className='register-box active'>
                    <img src={intern} alt="" onClick={()=> navigate("/register/intern")}/>
                    <p>Intern</p>
                </div>
                <div className='register-box' onClick={()=> navigate("/register/company")}>
                <img src={company} alt=""/>
                <p>company</p>
                </div>
            </div>


<div className="intern-form-row">
  <div className="intern-input-group">
    <label>
      Full Name <span>*</span>
    </label>

    <input
      type="text"
      name="fullName"
      placeholder="Enter your full name"
      value={form.fullName}
      onChange={handleChange}
    />

    {errors.fullName && (
      <p className="error">{errors.fullName}</p>
    )}
  </div>
  <div className="intern-input-group">
    <label>Email Address <span>*</span></label>
    <input
      type="email"
      name="email"
      placeholder="Enter your email address"
      value={form.email}
      onChange={handleChange}
    />
    {errors.email && <p className="error">{errors.email}</p>}
  </div>

  <div className="intern-input-group">
    <label>Phone Number <span>*</span></label>

    <div className="phone-number">
      <span className="country-code">+91</span>

      <input
        type="text"
        name="phone"
        placeholder="Enter your phone number"
        value={form.phone}
        onChange={handleChange}
      />
    </div>

    {errors.phone && <p className="error">{errors.phone}</p>}
  </div>
   <div className="intern-input-group">
    <label>
      Date of Birth <span>*</span>
    </label>

    <input
      type="date"
      name="dob"
      value={form.dob}
      onChange={handleChange}
    />

    {errors.dob && (
      <p className="error">{errors.dob}</p>
    )}

  </div>
</div>

<div className="intern-form-row">
  <div className="intern-input-group">
    <label>College / University <span>*</span></label>

    <input
      type="text"
      name="college"
      placeholder="Enter your college name"
      value={form.college}
      onChange={handleChange}
    />

    {errors.college && <p className="error">{errors.college}</p>}
  </div>

  <div className="intern-input-group">
    <label>Field of Study <span>*</span></label>

    <select
      name="field"
      value={form.field}
      onChange={handleChange}
    >
      <option value="">Select your field</option>
      <option value="Computer Science">Computer Science</option>
      <option value="Information Technology">Information Technology</option>
      <option value="Electronics">Electronics</option>
      <option value="Mechanical">Mechanical</option>
      <option value="Civil">Civil</option>
    </select>

    {errors.field && <p className="error">{errors.field}</p>}
  </div>
</div>

<div className="intern-form-row">
  <div className="intern-input-group">
    <label>Graduation Year <span>*</span></label>

    <select
      name="graduationYear"
      value={form.graduationYear}
      onChange={handleChange}
    >
      <option value="">Select Year</option>
      <option>2024</option>
      <option>2025</option>
      <option>2026</option>
      <option>2027</option>
      <option>2028</option>
    </select>

    {errors.graduationYear && (
      <p className="error">{errors.graduationYear}</p>
    )}
  </div>

  <div className="intern-input-group">
    <label>Resume <span>*</span></label>

    <input
      type="file"
      name="resume"
      accept=".pdf,.doc,.docx"
      onChange={handleChange}
    />

    {errors.resume && <p className="error">{errors.resume}</p>}
  </div>
</div>

<div className="intern-form-row">
 <div className="intern-input-group">
  <label>Password <span>*</span></label>

  <div className="password-number">
    <input
      type={showPassword ? "text" : "password"}
      name="password"
      placeholder="Create a password"
      value={form.password}
      onChange={handleChange}
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
</div>

<div className="intern-input-group">
  <label>Confirm Password <span>*</span></label>

  <div className="password-number">
    <input
      type={showConfirmPassword ? "text" : "password"}
      name="confirmPassword"
      placeholder="Confirm password"
      value={form.confirmPassword}
      onChange={handleChange}
    />

    <img
      src={showConfirmPassword ? eyeClose : eye}
      alt="eye"
      className="eye-icon"
      onClick={() =>
        setShowConfirmPassword(!showConfirmPassword)
      }
    />
  </div>

  {errors.confirmPassword && (
    <p className="error">{errors.confirmPassword}</p>
  )}
</div>
</div>

<div className="intern-terms">
  <input
    type="checkbox"
    name="agree"
    checked={form.agree}
    onChange={handleChange}
  />

  <label>
    I agree to the <a href="/">Terms of Service</a> and{" "}
    <a href="/">Privacy Policy</a>
  </label>
</div>

{errors.agree && <p className="error">{errors.agree}</p>}

<button type="submit" className="register-btn">
  Create Account
</button>

<div className="divider">

      <span></span>

      <p>OR</p>

      <span></span>

    </div>

<p className="signin-text">
  Already have an account?{" "}
  <span onClick={() => navigate("/login")} className="signin-link">
    Sign In
  </span>
</p>
</form>
</div>
</div>
)
}
