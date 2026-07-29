import "./Footer.css";
import mail from"../assets/landingpage/mail.png";
import global from "../assets/landingpage/global.png";
import heart from "../assets/landingpage/heart.png"

export const Footer =() => {
  return (
    <footer className="footer">

      <div className="footer-top">

        <div className="footer-left">
          <h2>InternMS</h2>

          <p>
            The ultimate platform for managing <br />
            internships, connecting talent, and <br />
            building the future of work.
          </p>

         <div className="footer-icons">
  <a href="#">
    <img src={global} alt="Global" />
  </a>

  <a href="#">
    <img src={mail} alt="Mail" />
  </a>
</div>
        </div>

        <div className="footer-links">

          <div className="footer-column">
            <h4>Product</h4>

            <a href="#">For Students</a>
            <a href="#">For Employers</a>
            <a href="#">For Universities</a>
            <a href="#">Pricing</a>
          </div>

          <div className="footer-column">
            <h4>Company</h4>

            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Resources</a>
            <a href="#">Contact Us</a>
          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        <p>&copy; 2024 InternMS. All rights reserved.</p>

        <p>
          Made with <img src={heart} alt="heart" /> for the future workforce
        </p>

      </div>

    </footer>
  );
}
