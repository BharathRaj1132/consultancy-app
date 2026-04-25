import logo from "../assets/logo.png";
import "../styles/why.css";

export default function WhyOurCompany() {
  return (
    <section id="why" className="whySection">
      <div className="whyContainer">

        {/* LEFT SIDE */}
        <div className="whyLeft fadeUp">
          <h2>Why Our Company</h2>
          <p>
            We believe in doing things the right way — simple, honest, and effective.
            Our approach is built around delivering real value, building trust, and
            creating long-term relationships with our customers. Every step we take
            is focused on quality, reliability, and continuous improvement.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="whyRight fadeUp delay">
          <div className="circleWrapper">

            {/* CENTER LOGO */}
            <img src={logo} alt="logo" className="centerLogo" />

            {/* POINTS */}
            <div className="point p1">
              <h4>Quality</h4>
              <span>We never compromise on standards.</span>
            </div>

            <div className="point p2">
              <h4>Trust</h4>
              <span>Built through honesty and transparency.</span>
            </div>

            <div className="point p3">
              <h4>Innovation</h4>
              <span>We continuously improve and adapt.</span>
            </div>

            <div className="point p4">
              <h4>Customer First</h4>
              <span>Your needs always come first.</span>
            </div>

            <div className="point p5">
              <h4>Reliability</h4>
              <span>Consistent and dependable service.</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}