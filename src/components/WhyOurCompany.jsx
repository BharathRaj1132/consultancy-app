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
            We are foreign medical graduates who completed our MBBS abroad and successfully navigated every challenge from admission to graduation. Having experienced the journey firsthand, we understand the confusion, risks, and struggles students often face while pursuing medical education overseas.<br/><br/>
            Our mission is to guide aspiring medical students with genuine mentorship, reliable support, and practical insights at every step of their journey. From choosing the right university to settling abroad and achieving academic success, we are committed to helping students confidently turn their dream of becoming a doctor into reality.
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