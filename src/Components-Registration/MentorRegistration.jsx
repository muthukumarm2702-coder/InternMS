import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MentorRegistration.css"
import protect from "../assets/registration/protect.png"
import people from "../assets/registration/people.png"
import star from "../assets/registration/star.png"
import mentoroffice from "../assets/registration/mentoroffice.png"
import hr from "../assets/registration/hr.png";
import mentor from "../assets/registration/mentor.png";
import intern from "../assets/registration/intern.png";
import company from "../assets/registration/company.png";
import eye from "../assets/registration/eye.png";
import eyeClose from "../assets/registration/eyeclose.png";

export const MentorRegistration =() => {

    const navigate = useNavigate();

    const [showPassword,setShowPassword]=useState(false);
    const [showConfirmPassword,setShowConfirmPassword]=useState(false);

    const [form,setForm]=useState({
        fullName:"",
        email:"",
        phone:"",
        title:"",
        skills:"",
        experience:"",
        bio:"",
        password:"",
        confirmPassword:"",
        terms:false
    });

    const [errors,setErrors]=useState({});

    const handleChange=(e)=>{

        const {name,value,type,checked}=e.target;

        setForm({
            ...form,
            [name]:type==="checkbox"?checked:value
        });

    };

    const validate=()=>{

        let newErrors={};

        
        if(!form.fullName.trim()){

            newErrors.fullName="Full name is required";

        }else if(!/^[A-Za-z ]+$/.test(form.fullName)){

            newErrors.fullName="Only letters are allowed";

        }
        if(!form.email){

            newErrors.email="Email is required";

        }else if(!/\S+@\S+\.\S+/.test(form.email)){

            newErrors.email="Invalid email address";

        }
        if(!form.phone){

            newErrors.phone="Phone number is required";

        }else if(!/^[0-9]{10}$/.test(form.phone)){

            newErrors.phone="Enter valid 10 digit phone number";

        }
        if(!form.title.trim()){

            newErrors.title="Professional title is required";

        }
        if(!form.skills.trim()){

            newErrors.skills="Skills are required";

        }
        if(!form.experience){

            newErrors.experience="Select experience";

        }


        if(!form.bio.trim()){

            newErrors.bio="Bio is required";

        }else if(form.bio.length<20){

            newErrors.bio="Minimum 20 characters";

        }
        if(!form.password){

            newErrors.password="Password is required";

        }else if(
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(form.password)
        ){

            newErrors.password="Weak password";

        }

       if (!form.confirmPassword) {

    newErrors.confirmPassword = "Confirm Password is required";

}
else if (form.confirmPassword !== form.password) {

    newErrors.confirmPassword = "Passwords do not match";

}
        if(!form.terms){

            newErrors.terms="Accept terms & conditions";

        }

        setErrors(newErrors);

        return Object.keys(newErrors).length===0;

    };

    const handleSubmit=(e)=>{

        e.preventDefault();

        if(validate()){

            alert("Mentor Registered Successfully");

        }

    };
  return (
    <div className='mentor-main'>

        <div className='mentor-left-container'>
            <p>InternMS</p>
            <div className='mentor-left-content'>
                <h1>Empower the next <br /> generation of talent.</h1>
                <p> Join a community of experts dedicated to guiding <br /> students through their career journey. Share your <br />wisdom, foster growth, and shape the industry's future. </p>
                <div className='mentor-left-align'> 
                  <img src={protect} alt="protect" />
                  <div>
                    <h5>Industry Impact</h5>
                    <p>Bridge the gap between academic learning and real-world <br /> excellence.</p>
                  </div>
                </div>

                <div className='mentor-left-align'> 
                  <img src={people} alt="people" />
                  <div>
                    <h5>Meaningful Connections</h5>
                    <p>Build lasting professional relationships with ambitious young <br />minds.</p>
                  </div>
                </div>
                
                 <div className='mentor-left-align'> 
                  <img src={star} alt="star" />
                  <div>
                    <h5>Personal Growth</h5>
                    <p>Enhance your leadership and communication skills through <br /> mentorship.</p>
                  </div>
                </div>
                <img src={mentoroffice} alt="mentoroffice" className='mentor-image' />


            </div>
           
        </div>
        <div className="mentor-right-container">

  <form className="mentor-register-card" onSubmit={handleSubmit}>

    <h1>Mentor Registration</h1>

    <p className="mentor-subtitle">
      Complete your profile to start connecting with students.
    </p>

    <label className="register-label">Registering as <span>*</span></label>

    <div className="register-type">

      <div className="register-box" onClick={() => navigate("/HRregistration")}>
        <img src={hr} alt="" />
        <p>HR</p>
      </div>

      <div className="register-box active">
        <img src={mentor} alt="" />
        <p>Mentor</p>
      </div>

      <div className="register-box" onClick={() => navigate("/InternRegistration")}>
        <img src={intern} alt="" />
        <p>Intern</p>
      </div>

      <div className="register-box" onClick={() => navigate("/CompanyRegistration")}>
        <img src={company} alt="" />
        <p>Company</p>
      </div>

    </div>

    <div className="mentor-form-row">

      <div className="mentor-input-group">
        <label>Full Name <span>*</span></label>

        <input
          type="text"
          name="fullName"
          placeholder="Enter your full name"
          value={form.fullName}
          onChange={handleChange}
        />

        {errors.fullName && <small>{errors.fullName}</small>}
      </div>

      <div className="mentor-input-group">
        <label>Email Address <span>*</span></label>

        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          value={form.email}
          onChange={handleChange}
        />

        {errors.email && <small>{errors.email}</small>}
      </div>

    </div>

    <div className="mentor-form-row">

      <div className="mentor-input-group">

        <label>Phone Number <span>*</span></label>

       <input
type="text"
name="phone"
placeholder="+91 Enter your number"
maxLength={10}
value={form.phone}
onChange={(e)=>{

const value=e.target.value.replace(/\D/g,"");

setForm({...form,phone:value});

}}
/>
        {errors.phone && <small>{errors.phone}</small>}

      </div>

      <div className="mentor-input-group">

        <label>Professional Title <span>*</span></label>

        <input
          type="text"
          name="title"
          placeholder="e.g. Senior Software Engineer"
          value={form.title}
          onChange={handleChange}
        />

        {errors.title && <small>{errors.title}</small>}

      </div>

    </div>

    <div className="mentor-form-row">

      <div className="mentor-input-group">

        <label>Skills / Expertise <span>*</span></label>

        <input
          type="text"
          name="skills"
          placeholder="UI/UX, React, Java..."
          value={form.skills}
          onChange={handleChange}
        />

        <p className="input-note">
          Separate multiple skills with commas
        </p>

        {errors.skills && <small>{errors.skills}</small>}

      </div>

      <div className="mentor-input-group">

        <label>Years of Experience <span>*</span></label>

        <select
          name="experience"
          value={form.experience}
          onChange={handleChange}
        >
          <option value="">Select experience level</option>
          <option>0-1 Years</option>
          <option>2-5 Years</option>
          <option>5-10 Years</option>
          <option>10+ Years</option>
        </select>

        {errors.experience && <small>{errors.experience}</small>}

      </div>

    </div>

    <div className="mentor-input-group">

      <label>Bio / About You <span>*</span></label>

      <textarea
        rows="5"
        maxLength="500"
        name="bio"
        placeholder="Tell us about yourself, your background and why you're passionate about mentoring..."
        value={form.bio}
        onChange={handleChange}
      ></textarea>

      <div className="char-count">
        {form.bio.length}/500
      </div>

      {errors.bio && <small>{errors.bio}</small>}

    </div>

    <div className="mentor-form-row">

      <div className="mentor-input-group">

        <label>Password <span>*</span></label>

        <div className="password-box">

          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Create a strong password"
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

        {errors.password && <small>{errors.password}</small>}

      </div>

      <div className="mentor-input-group">

        <label>Confirm Password <span>*</span></label>

        <div className="password-box">

          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm your password"
            value={form.confirmPassword}
            onChange={handleChange}
          />

         <img
  src={showConfirmPassword ? eyeClose : eye}
  alt="eye"
  className="eye-icon"
  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
/>

        </div>

        {errors.confirmPassword && (
          <small>{errors.confirmPassword}</small>
        )}

      </div>

    </div>

    <div className="mentor-terms-box">

      <input
        type="checkbox"
        name="terms"
        checked={form.terms}
        onChange={handleChange}
      />

      <p>
        I agree to the
        <span> Terms of Service </span>
        and
        <span> Privacy Policy</span>
      </p>

    </div>

    {errors.terms && <small>{errors.terms}</small>}

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
      <span onClick={() => navigate("/login")}> Sign In</span>
    </p>
<hr className="footerhr"/>
<div className="mentorfooter">
  <div> <p>&copy; InternHub. All rights reserved.</p></div>
  <div className="mentor-footer-link">
    <a href="">support</a>
  <a href="">Contact Us</a>
  </div>

</div>
  </form>
  

</div>
    </div>
  )
}
