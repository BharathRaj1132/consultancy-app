import logo from "../assets/logo.png";
import { useState, useEffect, useRef } from "react";
import "../styles/footer.css";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const [menu, setMenu] = useState(false);
  const footerRef = useRef(null);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  // 👇 Animation trigger on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          footerRef.current.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (footerRef.current) observer.observe(footerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="footer fadeUp">
      <div className="footerTop">
        <img src={logo} className="footerLogo" alt="logo" />

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

        <div className="socialIcons">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="iconBtn" data-tooltip="Instagram">
            <FaInstagram />
          </a>

          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="iconBtn" data-tooltip="Facebook">
            <FaFacebookF />
          </a>

          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="iconBtn" data-tooltip="LinkedIn">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
}