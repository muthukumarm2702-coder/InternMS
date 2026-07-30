import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LandingPage } from './Components-LandingPage/LandingPage'
import { LoginPage } from './Components-Login/LoginPage'
import { TwoStepverification as TwoStepVerification } from './Components-Login/TwoStepverification'
import { Verificationcode as VerificationCode } from './Components-Login/Verificationcode'
import { ForgotPassword } from './Components-Login/ForgotPassword'
import { ForgotPasswordOtp } from './Components-Login/ForgotPasswordOtp'
import { ResetPassword } from './Components-Login/ResetPassword'
import { ResetPasswordSuccess } from './Components-Login/ResetPasswordSuccess'
import { HRregistration as HRRegistration } from './Components-Registration/HRregistration'
import { MentorRegistration } from './Components-Registration/MentorRegistration'
import { CompanyRegistration } from './Components-Registration/CompanyRegistration'
import { InternRegistration } from './Components-Registration/InternRegistration'
import { AdminRegistration } from './Components-Registration/AdminRegistration'
import { CompanyDashboard } from './Components-Dashboard/CompanyDashboard'

const routes = [
  { path: '/', element: <LandingPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/twostepverification', element: <TwoStepVerification /> },
  { path: '/verificationcode', element: <VerificationCode /> },
  { path: '/forgot-password', element: <ForgotPassword /> },
  { path: '/forgot-password/verify', element: <ForgotPasswordOtp /> },
  { path: '/reset-password', element: <ResetPassword /> },
  { path: '/reset-password/success', element: <ResetPasswordSuccess /> },
  { path: '/register/hr', element: <HRRegistration /> },
  { path: '/register/mentor', element: <MentorRegistration /> },
  { path: '/register/intern', element: <InternRegistration /> },
  { path: '/register/company', element: <CompanyRegistration /> },
  { path: '/register/admin', element: <AdminRegistration /> },
  { path: '/dashboard', element: <CompanyDashboard /> },
]

const router = createBrowserRouter(routes, { basename: '/ims' })

export default function App() {
  return <RouterProvider router={router} />
}
