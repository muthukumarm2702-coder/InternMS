import "./HRregistration.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hrinternleft from "../assets/registration/hrinternleft.png"
import eye from "../assets/registration/eye.png"
import hr from "../assets/registration/hr.png"
import company from "../assets/registration/company.png"
import intern from "../assets/registration/intern.png"
import mentor from "../assets/registration/mentor.png"
import eyeClose from "../assets/registration/eyeclose.png";
import inputcompany from "../assets/registration/inputcompany.png"

export const HRRegistration = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

const [form, setForm] = useState({
  fullName: "",
  email: "",
  phone: "",
  department: "",
  companyName: "",
  password: "",
  confirmPassword: "",
  terms: false,
});

const [errors, setErrors] = useState({});


const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setForm((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
};


const validate = () => {
  let newErrors = {};

  if (!form.fullName.trim()) {
    newErrors.fullName = "Full Name is required";
  } else if (!/^[A-Za-z ]+$/.test(form.fullName)) {
    newErrors.fullName = "Only letters are allowed";
  }

  if (!form.email.trim()) {
    newErrors.email = "Work Email is required";
  } else if (
    !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email)
  ) {
    newErrors.email = "Enter a valid email";
  }

  if (!form.phone.trim()) {
    newErrors.phone = "Phone Number is required";
  } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
    newErrors.phone = "Enter valid 10 digit mobile number";
  }

  if (!form.department) {
    newErrors.department = "Department is required";
  }

  if (!form.companyName.trim()) {
    newErrors.companyName = "Company Name is required";
  }

  if (!form.password) {
    newErrors.password = "Password is required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/.test(form.password)
  ) {
    newErrors.password =
      "Minimum 8 characters with uppercase, lowercase, number & special character";
  }

  if (!form.confirmPassword) {
    newErrors.confirmPassword = "Confirm Password is required";
  } else if (form.password !== form.confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match";
  }

  if (!form.terms) {
    newErrors.terms = "Please accept Terms & Privacy Policy";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

const handleSubmit = (e) => {
  e.preventDefault();

  if (validate()) {
    alert("HR Registered Successfully");
  }
};
    
  return (
    <div className='hr-main-container'>
        <div className='hr-left-container'>
            <p>InternMS</p>

            <div className='hr-left-content'>
             <h1> Empower your team <br />with top-tier talent.  </h1>
            <p> Streamline your recruitment process, manage <br /> internships with ease, and connect with the next <br /> generation of industry leaders.</p>

            <img src={hrinternleft} alt="hrinternleft" />
            </div>
<div>
     </div>
     <div className='sts-bar'>
             <div className="sts-box">
    <h2>500+</h2>
    <p>COMPANIES</p>
     </div>

    <div className="sts-box">
    <h2>10k+</h2>
    <p>STUDENTS</p>
    
 </div>
 </div>
        </div>

        
       <div className="hr-right-container">

  <form className="hr-register-card" onSubmit={handleSubmit}>

    <h1>Create your HR account</h1>

    <p className="hr-subtitle">
      Join our ecosystem of professional employers.
    </p>

    <label className="register-label">Registering as</label>

    <div className="register-type">

      <div className="register-box active" onClick={() => navigate("/register/hr")}>
        <img src={hr} alt="HR" />
        <p>HR</p>
      </div>

      <div className="register-box"
         onClick={() => navigate("/register/mentor")}>
        <img src={mentor} alt="Mentor" />
        <p>Mentor</p>
      </div>

      <div className="register-box"
      onClick={()=> navigate("/register/intern")}>
        <img src={intern} alt="Intern" />
        <p>Intern</p>
      </div>

      <div className="register-box"
      onClick={() => navigate("/register/company")}>
        <img src={company} alt="Company" />
        <p>Company</p>
      </div>

    </div>

    <div className="hr-form-row">

      <div className="hr-input-group">
        <label>Full Name <span>*</span></label>

       <input
  type="text"
  name="fullName"
  value={form.fullName}
  onChange={handleChange}
  placeholder="John Doe"
/>

{errors.fullName && <p className="error">{errors.fullName}</p>}
      </div>

      <div className="hr-input-group">
        <label>Work Email Address <span>*</span></label>

       <input
  type="email"
  name="email"
  value={form.email}
  onChange={handleChange}
  placeholder="john.doe@company.com"
/>

{errors.email && <p className="error">{errors.email}</p>}
      </div>

    </div>




    <div className="hr-form-row">

   <div className="hr-input-group">
  <label>Phone Number <span>*</span></label>

  <div className="phone-box">
    <select>
      <option>+91</option>
    </select>

    <input
      type="text"
      name="phone"
      value={form.phone}
      onChange={handleChange}
      placeholder="Enter your number"
    />
  </div>

  {errors.phone && (
    <p className="error">{errors.phone}</p>
  )}
</div>

      <div className="hr-input-group">

        <label>Department <span>*</span></label>

        <select
  name="department"
  value={form.department}
  onChange={handleChange}
>
  <option value="">Select department</option>
  <option>HR</option>
  <option>Recruitment</option>
  <option>Operations</option>
  <option>Administration</option>
</select>

{errors.department && <p className="error">{errors.department}</p>}

      </div>

    </div>

    <div className="hr-input-group">

      <label>Company Name <span>*</span></label>

      <div className="company-box">
   <img src={inputcompany} alt="" />

   <input
      type="text"
      name="companyName"
      value={form.companyName}
      onChange={handleChange}
      placeholder="InternHub Inc."
   />
</div>

{errors.companyName && (
   <p className="error">{errors.companyName}</p>
)}

    </div>

    <div className="hr-form-row">

      <div className="hr-input-group">

        <label>Password <span>*</span></label>

       <div className="password-box">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    value={form.password}
    onChange={handleChange}
    placeholder="Create a strong password"
  />

  <img
    src={showPassword ? eyeClose : eye}
    alt=""
    onClick={() => setShowPassword(!showPassword)}
  />
</div>

{errors.password && <p className="error">{errors.password}</p>}

      </div>

      <div className="hr-input-group">

        <label>Confirm Password <span>*</span></label>

       <div className="password-box">
  <input
    type={showConfirmPassword ? "text" : "password"}
    name="confirmPassword"
    value={form.confirmPassword}
    onChange={handleChange}
    placeholder="Confirm your password"
  />

  <img
    src={showConfirmPassword ? eyeClose : eye}
    alt=""
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

    <div className="hr-terms-box">

     <input
  type="checkbox"
  name="terms"
  checked={form.terms}
  onChange={handleChange}
/>

{errors.terms && <p className="error">{errors.terms}</p>}

      <p>
        I agree to the
        <span> Terms of Service </span>
        and
        <span> Privacy Policy</span>
      </p>

    </div>

    <button type="submit" className="create-account-btn">
  Create Account
</button>

    <div className="divider">

      <span></span>

      <p>OR</p>

      <span></span>

    </div>

    <p className="signin-text">
      Already have an account?
      <span onClick={() => navigate("/company-hr-login")}> Sign in</span>
    </p>
</form>
  </div>


     
    </div>
  )
}
