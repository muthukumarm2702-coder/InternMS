import { useState } from "react";
import "./CompanyRegistration.css"
import { useNavigate } from "react-router-dom";
import peopleplus from "../assets/registration/Peopleplus.png"
import protectblue from "../assets/registration/protectblue.png"
import partnership from "../assets/registration/partnership.png"
import hr from "../assets/registration/hr.png";
import mentor from "../assets/registration/mentor.png";
import intern from "../assets/registration/intern.png";
import company from "../assets/registration/company.png";
import eye from "../assets/registration/eye.png";
import eyeClose from "../assets/registration/eyeclose.png";
import share from "../assets/registration/share.png";
import at from "../assets/registration/at.png";
import Text from "../assets/registration/Text.png";
import smile from "../assets/registration/smile.png"



export const CompanyRegistration=() => {
 const navigate = useNavigate();
    const [formData, setFormData] = useState({
  companyName: "",
  website: "",
  email: "",
  phone: "",
  industry: "",
  companySize: "",
  registrationNumber: "",
  password: "",
  confirmPassword: "",
  terms: false,
});

const [errors, setErrors] = useState({});

const [showPassword, setShowPassword] = useState(false);
const [showConfirmPassword, setShowConfirmPassword] = useState(false);

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: type === "checkbox" ? checked : value,
  }));
};

const validate = () => {
  let newErrors = {};

  if (!formData.companyName.trim()) {
    newErrors.companyName = "Company Name is required";
  }

  if (!formData.website.trim()) {
    newErrors.website = "Company Website is required";
  } else if (
    !/^https?:\/\/.+/i.test(formData.website)
  ) {
    newErrors.website = "Enter valid website URL";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
  ) {
    newErrors.email = "Invalid email address";
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone Number is required";
  } else if (!/^[0-9]{10}$/.test(formData.phone)) {
    newErrors.phone = "Phone Number must be 10 digits";
  }

  if (!formData.industry) {
    newErrors.industry = "Select Industry";
  }

  if (!formData.companySize) {
    newErrors.companySize = "Select Company Size";
  }

  if (!formData.registrationNumber.trim()) {
    newErrors.registrationNumber = "Registration Number is required";
  }

  if (!formData.password) {
    newErrors.password = "Password is required";
  } else if (
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(formData.password)
  ) {
    newErrors.password =
      "Minimum 8 characters with uppercase, lowercase, number & special character";
  }

  if (!formData.confirmPassword) {
    newErrors.confirmPassword = "Confirm Password";
  } else if (formData.password !== formData.confirmPassword) {
    newErrors.confirmPassword = "Passwords do not match";
  }

  if (!formData.terms) {
    newErrors.terms = "Accept Terms & Privacy Policy";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};


const handleSubmit = (e) => {
  e.preventDefault();

  if (validate()) {
    alert("Company Registered Successfully!");

    console.log(formData);

    setFormData({
      companyName: "",
      website: "",
      email: "",
      phone: "",
      industry: "",
      companySize: "",
      registrationNumber: "",
      password: "",
      confirmPassword: "",
      terms: false,
    });

    setErrors({});
  }
};





  return (<div>
    <div className='company-main'>

        <div className='company-left-container'>
            <h1>Partner with InternMS <br />to scale your team.</h1>
            <p> Connect with over 100,000+ top-tier students and  <br />granduatus ready to bring innovation to your company.</p>

            <div className='align-img'>
                <img src={peopleplus} alt="peopleplus" />
                <div>
                <h5>Effortless Hiring</h5>
                <span> Post jobs and manage applications in one centralized <br /> dashboard.</span>
                </div>
            </div>

            <div className='align-img'>
                <img src={protectblue} alt="protect" />
            <div>
             <h5>Verified Talent</h5>
             <span>Every studend profile is verified for education and skill <br />credentials.</span>   
            </div>
            </div>

            <img src={partnership} alt="partnership" className='patrnerimg'/>

        </div>


       <div className="company-right-container">
  <div className="company-form-container">

    <h1>Create Company Account</h1>
    <p className="company-subtitle">
      Fill in the details to register your organization and start hiring.
    </p>

    <div className="register-type">

      <div className="register-box" onClick={() => navigate("/HRregistration")}>
        <img src={hr} alt="HR" />
        <p>HR</p>
      </div>

      <div className="register-box"  onClick={() => navigate("/MentorRegistration")}>
        <img src={mentor} alt="Mentor" />
        <p>Mentor</p>
      </div>

      <div className="register-box" onClick={()=>navigate("/InternRegistration")}>
        <img src={intern} alt="Intern" />
        <p>Intern</p>
      </div>

      <div className="register-box active"  onClick={() => navigate("/CompanyRegistration")}>
        <img src={company} alt="Company" />
        <p>Company</p>
      </div>

    </div>

    <form className="company-form" onSubmit={handleSubmit}>
<div className="form-row">
     <div className="form-group">
  <label>Company Name *</label>

  <input
    type="text"
    name="companyName"
    value={formData.companyName}
    onChange={handleChange}
    placeholder="e.g. Acme Corp"
  />

  {errors.companyName && (
    <small className="error">{errors.companyName}</small>
  )}
</div>

       <div className="form-group">
  <label>Company Website *</label>

  <input
    type="text"
    name="website"
    value={formData.website}
    onChange={handleChange}
    placeholder="https://"
  />

  {errors.website && (
    <small className="error">{errors.website}</small>
  )}
</div>

</div>



      <div className="form-row">

       <div className="form-group">
  <label>Work Email *</label>

  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="name@company.com"
  />

  {errors.email && (
    <small className="error">{errors.email}</small>
  )}
</div>
<div className="form-group">
  <label>Phone Number *</label>

  <div className="phone-input">
    <input
      className="country-code"
      type="text"
      value="+91"
      readOnly
    />

    <input
      type="text"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="Enter your number"
    />
  </div>

  {errors.phone && (
    <small className="error">{errors.phone}</small>
  )}
</div>

      </div>

      <div className="form-row">

       <div className="form-group">
  <label>Industry *</label>

  <select
    name="industry"
    value={formData.industry}
    onChange={handleChange}
  >
    <option value="">Select Industry</option>
    <option>IT</option>
    <option>Finance</option>
    <option>Healthcare</option>
    <option>Education</option>
  </select>

  {errors.industry && (
    <small className="error">{errors.industry}</small>
  )}
</div>

       <div className="form-group">
  <label>Company Size *</label>

  <select
    name="companySize"
    value={formData.companySize}
    onChange={handleChange}
  >
    <option value="">Select Size</option>
    <option>1 - 10</option>
    <option>11 - 50</option>
    <option>51 - 200</option>
    <option>200+</option>
  </select>

  {errors.companySize && (
    <small className="error">{errors.companySize}</small>
  )}
</div>

      </div>

    <div className="form-group full-width">
  <label>Registration Number</label>

  <input
    type="text"
    name="registrationNumber"
    value={formData.registrationNumber}
    onChange={handleChange}
    placeholder="Business ID or Tax ID"
  />

  {errors.registrationNumber && (
    <small className="error">{errors.registrationNumber}</small>
  )}
</div>

      <div className="form-row">

       <div className="form-group">
  <label>Password *</label>

  <div className="password-box">
    <input
      type={showPassword ? "text" : "password"}
      name="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Create password"
    />

    <img
  src={showPassword ? eyeClose : eye}
  alt="eye"
  onClick={() => setShowPassword(!showPassword)}
/>
  </div>

  {errors.password && (
    <small className="error">{errors.password}</small>
  )}
</div>

        <div className="form-group">
          <label>Confirm Password *</label>

         <div className="password-box">
  <input
    type={showConfirmPassword ? "text" : "password"}
    name="confirmPassword"
    value={formData.confirmPassword}
    onChange={handleChange}
    placeholder="Confirm your password"
  />

  <img
    src={showConfirmPassword ? eyeClose : eye}
    alt="eye"
    onClick={() =>
      setShowConfirmPassword(!showConfirmPassword)
    }
  />
</div>

{errors.confirmPassword && (
  <small className="error">
    {errors.confirmPassword}
  </small>
)}

        </div>

      </div>
<div className="checkbox-row">
  <input
    type="checkbox"
    name="terms"
    checked={formData.terms}
    onChange={handleChange}
  />

  <p>
    I agree to the <span>Terms of Service</span> and{" "}
    <span>Privacy Policy</span>
  </p>
</div>

{errors.terms && (
  <small className="error">{errors.terms}</small>
)}

     <button type="submit" className="company-register-btn">
  Register Company
</button>

      <div className="login-link">
        Already have an account? <span onClick={() => navigate("/login")}>Log in</span>
      </div>

    </form>

  </div>
</div>



      
    </div>
    <div className='status-bar-link'>

    <a href="">InternMS</a>
    <div className='status-bar'> 
        <h4>Find Talent</h4>
        <h4>Internships</h4>
        <h4>Pricing</h4>
    </div>
    <a href="">Login</a>

</div>
 <div className="company-footer">

      <div className="company-footer-top">

        <div className="company-footer-about">
          <h3>InternMS</h3>

          <p>
            Connecting the next generation of talent with
            <br />
            world-class opportunities. Build your future with
            <br />
            InternHub.
          </p>
        </div>

        <div className="company-footer-column">
          <h4>Company</h4>

          <p>About Us</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>

        <div className="company-footer-column">
          <h4>For Employers</h4>

          <p>Post a Job</p>
          <p>Hiring Solutions</p>
          <p>Pricing</p>
        </div>

        <div className="company-footer-column">
          <h4>Support</h4>

          <p>Help Center</p>
          <p>Contact Us</p>
          <p>Privacy</p>
        </div>

      </div>

      <hr />

      <div className="company-footer-bottom">

        <p>&copy; 2024 InternHub. All rights reserved.</p>

        <div className="company-footer-icons">
          <img src={smile} alt="" />
          <img src={Text} alt="text" />
          <img src={at} alt="" />
          <img src={share} alt="" />
        </div>

      </div>

    </div>
   
</div>
  )
}
