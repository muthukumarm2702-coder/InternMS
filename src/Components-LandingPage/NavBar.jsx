import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";


export const NavBar = () => {
    const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="intern">
        <h2>InternMS</h2>
      </div>
      <div className="nav-buttons">
        <Link to="/login" className="Nav-login-btn">
    Login
  </Link>
        <button className="nav-register-btn"   onClick={() => navigate("/HRregistration")}>Register</button>
      </div>
    </nav>
  );
}
