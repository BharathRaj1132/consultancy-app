import logo from "../assets/logo.png";
import { useState } from "react";
import "../styles/footer.css";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
    const [menu, setMenu] = useState(false);

    const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <footer className="footer">
      <div className="footerTop">
        <img src={logo} className="footerLogo" />

        <div>
          <h3>xxxxx xxx xxxxxx</h3>
          <p>xxxxx, Tamil Nadu - xxxxxx</p>
        </div>

        <div>
          <h3>Phone</h3>
          <p>+91 xxxxx xxxxx</p>
        </div>

        <div>
          <h3>Email</h3>
          <p>xxx@xxxxxxx.in</p>
        </div>
      </div>

      <div className="footerLinks">
        <span onClick={() => scrollToSection("home")}>Home</span>
        <span onClick={() => scrollToSection("story")}>Our Story</span>
        <span onClick={() => scrollToSection("why")}>Why Our Company</span>
        <span onClick={() => scrollToSection("getintouch")}>Get In Touch</span>
      </div>

      <div className="footerBottom">
        <p>© 2026 xxxx xxx xxxxxx. All Rights Reserved.</p>
        <FaInstagram className="insta" />
      </div>
    </footer>
  );
}