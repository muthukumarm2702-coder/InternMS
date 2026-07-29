import { useState } from "react";
import adminlap from "../assets/registration/adminlap.png";
import transparentprotect from "../assets/registration/transparentprotect.png";
import secure from "../assets/registration/secure.png";
import "./AdminRegistration.css";
import admin from "../assets/registration/admin.png";
import eye from "../assets/registration/eye.png";
import eyeClose from "../assets/registration/eyeclose.png";

export  const AdminRegistration=() =>{
  const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

const [form, setForm] = useState({
  fullName: "",
  email: "",
  phone: "",
  organization: "",
  designation: "",
  country: "",
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
    newErrors.email = "Email Address is required";
  } else if (
    !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(form.email)
  ) {
    newErrors.email = "Enter a valid email";
  }

  if (!form.phone.trim()) {
    newErrors.phone = "Phone Number is required";
  } else if (!/^[6-9]\d{9}$/.test(form.phone)) {
    newErrors.phone = "Enter valid 10 digit number";
  }

  if (!form.organization.trim()) {
    newErrors.organization = "Organization Name is required";
  }

  if (!form.designation.trim()) {
    newErrors.designation = "Designation is required";
  }

  if (!form.country) {
    newErrors.country = "Country is required";
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
    alert("Admin Registered Successfully");
  }

};



  return (
     <div>
    <div className="admin-registration-main">
      <div className="admin-registration-container">
        <p>InterMS</p>
        <div className='admin-left-content'>
            <h1>Regain access to your <br/>professional future.</h1>
            <p>Join thousands of companies and educational<br/>institutions managing the next generation of global<br/>
            talent through our secure, integrated ecosystem.</p>
            <div className='admin-image'>
            <img src={adminlap} alt="adminlap" />
          </div>

        </div>
        <div className='admin-image-content'>
          <div><img src={transparentprotect} alt="shield" /></div>
            
            <div>
                <h6>Role-based access</h6>
                <p>Secure and personalized experience for every user.</p>
            </div>
        </div>
        <div className='admin-image-content'>
            <div><img src={secure} alt="secure" /></div>
            <div>
                <h6>Trusted & Secure</h6>
                <p>Your data is protected with industry-standard security..</p>
            </div>
            </div>
        </div>

       <div className="admin-right-container">

<form className="admin-register-card" onSubmit={handleSubmit}>

    <h1>Admin Registration</h1>

    <p className="admin-subtitle">
      Fill in the details below to create your account
    </p>

    <label className="register-label">
      Registering as <span>*</span>
    </label>

    <div className="register-type">

      <div className="register-box active">
        <img src={admin} alt="Admin" />
        <p>Admin</p>
      </div>

    </div>

    <div className="admin-form-row">

      <div className="admin-input-group">
        <label>Full Name <span>*</span></label>
       <input
  type="text"
  name="fullName"
  value={form.fullName}
  onChange={handleChange}
  placeholder="Enter your full name"
/>

{errors.fullName && (
  <p className="error">{errors.fullName}</p>
)}
      </div>

      <div className="admin-input-group">
        <label>Email Address <span>*</span></label>
        <input
  type="email"
  name="email"
  value={form.email}
  onChange={handleChange}
  placeholder="Enter your email address"
/>

{errors.email && (
  <p className="error">{errors.email}</p>
)}
      </div>

    </div>

    <div className="admin-form-row">

      <div className="admin-input-group">

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

      <div className="admin-input-group">
        <label>Organization / Institution Name <span>*</span></label>

       <input
  type="text"
  name="organization"
  value={form.organization}
  onChange={handleChange}
  placeholder="Enter organization name"
/>

{errors.organization && (
  <p className="error">{errors.organization}</p>
)}
      </div>

    </div>

    <div className="admin-form-row">

      <div className="admin-input-group">
        <label>Job Title / Designation <span>*</span></label>

        <input
  type="text"
  name="designation"
  value={form.designation}
  onChange={handleChange}
  placeholder="Enter your job title"
/>

{errors.designation && (
  <p className="error">{errors.designation}</p>
)}
      </div>

      <div className="admin-input-group">
        <label>Country <span>*</span></label>

        <select
  name="country"
  value={form.country}
  onChange={handleChange}
>
  <option value="">Select your country</option>
  <option>India</option>
  <option>USA</option>
  <option>UK</option>
</select>

{errors.country && (
  <p className="error">{errors.country}</p>
)}
      </div>

    </div>

    <div className="admin-form-row">

      <div className="admin-input-group">

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
    className="eye-icon"
    onClick={() => setShowPassword(!showPassword)}
    alt=""
  />

</div>

{errors.password && (
  <p className="error">{errors.password}</p>
)}
      </div>

      <div className="admin-input-group">

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
    className="eye-icon"
    onClick={() =>
      setShowConfirmPassword(!showConfirmPassword)
    }
    alt=""
  />

</div>

{errors.confirmPassword && (
  <p className="error">{errors.confirmPassword}</p>
)}

      </div>

    </div>

    <div className="admin-terms-box">

      <input
  type="checkbox"
  name="terms"
  checked={form.terms}
  onChange={handleChange}
/>

{errors.terms && (
  <p className="error">{errors.terms}</p>
)}

      <p>
        I agree to the
        <span> Terms of Service </span>
        and
        <span> Privacy Policy</span>
      </p>

    </div>
<button
  type="submit"
  className="create-account-btn"
>
  Create Account
</button>

    <div className="divider">
      <span></span>
      <p>OR</p>
      <span></span>
    </div>

    <p className="signin-text">
      Already have an account?
      <span> Sign In</span>
    </p>
 </form>
  </div> 
</div>

  <div className="admin-nav">
    <div> <p>&copy; 2024 InternMS.All rights reserved.</p></div>
   
    <div className="nav-links">
      <a href="">Privacy Policy</a>
      <a href="">Ters of Service</a>
      <a href="">Support</a>
    </div>
  </div>
 </div>
  );
}
