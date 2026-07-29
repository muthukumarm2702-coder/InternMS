import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import {LandingPage} from "./Components-LandingPage/LandingPage";
import {LoginPage} from "./Components-Login/LoginPage";
import {TwoStepverification} from "./Components-Login/TwoStepverification";
import {Verificationcode} from "./Components-Login/Verificationcode";
import {ForgotPassword} from "./Components-Login/ForgotPassword";
import {ForgotPasswordOtp} from "./Components-Login/FrogotPasswordOtp";
import {ResetPassword} from "./Components-Login/ResetPassword";
import {ResetPasswordSuccess} from "./Components-Login/ResetPasswordSuccess";
import {HRregistration} from "./Components-Registration/HRregistration"
import { MentorRegistration } from "./Components-Registration/MentorRegistration";
import { CompanyRegistration } from "./Components-Registration/CompanyRegistration";
import { InternRegistration } from "./Components-Registration/InternRegistration";
import { AdminRegistration } from "./Components-Registration/AdminRegistration";
import CompanyDashboard from "./Components-Dashboard/CompanyDashboard";



const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/twostepverification",
    element: <TwoStepverification />,
  },
  {
    path: "/verificationcode",
    element: <Verificationcode />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/ForgotPasswordOtp",
    element: <ForgotPasswordOtp />,
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword />,
  },
  {
    path: "/ResetPasswordSuccess",
    element: <ResetPasswordSuccess />,
  },

  {
    path: "/HRregistration",
    element: <HRregistration />,
  },
   {
    path: "/MentorRegistration",
    element: <MentorRegistration />,
  },
  {
    path:"/InternRegistration",
    element:<InternRegistration/>,
  },
  {
    path: "/CompanyRegistration",
    element:<CompanyRegistration/>
  },

  {
    path:"/AdminRegistration",
    element:<AdminRegistration/>
  },
  {
    path: "/dashboard",
    element: <CompanyDashboard />,
  },
  {
    path: "/CompanyDashboard",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "/HrDashboard",
    element: <Navigate to="/dashboard" replace />,
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
],
 {
    basename: "/ims",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
