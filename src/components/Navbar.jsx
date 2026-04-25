import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [menu, setMenu] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="mobileIcon" onClick={() => setMenu(!menu)}>
        {menu ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={menu ? "navMenu active" : "navMenu"}>
        <li onClick={() => scrollToSection("home")}>HOME</li>
        <li onClick={() => scrollToSection("why")}>WHY OUR COMPANY</li>

        <li className="logoWrap" onClick={() => scrollToSection("home")}>
          <img src={logo} alt="logo" className="logo" />
        </li>

        <li onClick={() => scrollToSection("story")}>OUR STORY</li>
        <li onClick={() => scrollToSection("getintouch")}>GET IN TOUCH</li>
        <li onClick={() => scrollToSection("services")}>SERVICES</li>
      </ul>
    </nav>
  );
}