import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Company&HR.css'
import usernameIcon from '../assets/loginpage/mail.png'
import passwordLock from '../assets/loginpage/lock.png'
import eyeHidden from '../assets/loginpage/eye.png'
import eyeVisible from '../assets/loginpage/eyeclose.png'
import googleIcon from '../assets/loginpage/google.png'
import arrowIcon from '../assets/loginpage/arrow.png'
import companyHrHero from '../assets/loginpage/company-hr-hero.png'

const validatePassword = (value) => {
  if (!value) return 'Password is required'
  if (value.length < 6) return 'Password must be at least 6 characters'
  return ''
}

export default function CompanyAndHRLogin() {
  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState(false)
  const [keepSignedIn, setKeepSignedIn] = useState(false)
  const [form, setForm] = useState({ username: '', password: '' })
  const [errors, setErrors] = useState({})

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: '' }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {
      username: form.username.trim() ? '' : 'Username is required',
      password: validatePassword(form.password),
    }
    setErrors(nextErrors)
    if (!Object.values(nextErrors).some(Boolean)) navigate('/twostepverification')
  }

  return (
    <div className="companyHrPage">
      <aside
        className="companyHrLeftPanel"
        style={{ backgroundImage: `url(${companyHrHero})` }}
      >
        <div className="companyHrLeftContent">
          <Link to="/" className="companyHrBrand">HR and Company Portal</Link>
          <div className="companyHrLeftMain">
            <h1 className="companyHrLeftTitle">Empowering<br />Growth<br />through<br />Innovation.</h1>
            <p className="companyHrLeftSubtitle">
              Connect with leaders, manage talent, and<br />drive your organization forward with our<br />unified platform.
            </p>
          </div>
          <div className="companyHrStats">
            <div className="companyHrStat"><strong>500+</strong><span>Partner companies</span></div>
            <div className="companyHrStat"><strong>10k+</strong><span>Success stories</span></div>
          </div>
          <p className="companyHrCopyright">&copy; 2024 HR and Company Portal. All rights reserved.</p>
        </div>
      </aside>

      <main className="companyHrRightPanel">
        <div className="companyHrFormContainer">
          <header className="companyHrFormHeader">
            <h2 className="companyHrFormTitle">Welcome Back</h2>
            <p className="companyHrFormSubtitle">Manage your career journey.</p>
          </header>
          <form className="companyHrForm" onSubmit={handleSubmit} noValidate>
            <div className={`companyHrField ${errors.username ? 'hasError' : ''}`}>
              <label htmlFor="company-hr-username">Username</label>
              <div className="companyHrInputWrap">
                <img className="companyHrInputIcon" src={usernameIcon} alt="" />
                <input id="company-hr-username" autoComplete="username" placeholder="Enter your username" value={form.username} onChange={(event) => updateField('username', event.target.value)} />
              </div>
              {errors.username && <p className="companyHrError" role="alert">{errors.username}</p>}
            </div>
            <div className={`companyHrField ${errors.password ? 'hasError' : ''}`}>
              <div className="companyHrLabelRow">
                <label htmlFor="company-hr-password">Password</label>
                <Link to="/forgot-password" className="companyHrForgotLink">Forgot Password?</Link>
              </div>
              <div className="companyHrInputWrap">
                <img className="companyHrInputIcon" src={passwordLock} alt="" />
                <input id="company-hr-password" autoComplete="current-password" type={showPassword ? 'text' : 'password'} placeholder="Enter your password" value={form.password} onChange={(event) => updateField('password', event.target.value)} />
                <button type="button" className="companyHrEyeButton" onClick={() => setShowPassword((shown) => !shown)} aria-label={showPassword ? 'Hide password' : 'Show password'}>
                  <img src={showPassword ? eyeVisible : eyeHidden} alt="" />
                </button>
              </div>
              {errors.password && <p className="companyHrError" role="alert">{errors.password}</p>}
            </div>
            <label className="companyHrCheckboxLabel">
              <input type="checkbox" checked={keepSignedIn} onChange={(event) => setKeepSignedIn(event.target.checked)} />
              <span>Keep me signed in</span>
            </label>
            <button type="submit" className="companyHrSigninButton">Sign In <img src={arrowIcon} alt="" /></button>
            <div className="companyHrOrDivider"><span>Or continue with</span></div>
            <button type="button" className="companyHrGoogleButton"><img src={googleIcon} alt="" />Sign in with Google</button>
            <p className="companyHrCreateText">Don&apos;t have an account? <Link to="/register/hr" className="companyHrCreateLink">Create Account</Link></p>
          </form>
          <nav className="companyHrFooterLinks" aria-label="Legal links">
            <a href="#help">Help</a><span>&bull;</span><a href="#privacy">Privacy</a><span>&bull;</span><a href="#terms">Terms</a>
          </nav>
        </div>
      </main>
    </div>
  )
}
