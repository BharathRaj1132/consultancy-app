import "../styles/contact.css";

export default function GetInTouch() {
  return (
    <section id="getintouch" className="contactSection">

      <div className="contactContainer">

        {/* LEFT SIDE */}
        <div className="contactInfo fadeUp">
          <h2>Get in Touch</h2>

          <p>
            We’d love to hear from you. Reach out for inquiries, collaborations,
            or support. We usually respond within 24 hours.
          </p>

          <div className="infoCard">
            <h4>📍 Address</h4>
            <span>DOC LAUNCH OVERSEAS PRIVATE LIMITED <br/>
            S.No.214F/1, Appu Towers, Tiruchengode Road, Namakkal, <br/>
            Namakkal- 637001, Tamil Nadu
            </span>
          </div>

          <div className="infoCard">
            <h4>📞 Phone</h4>
            <span>+91 93428 27681</span>
          </div>

          <div className="infoCard">
            <h4>✉️ Email</h4>
            <span>doclaunchoverseaspvt@hotmail.com</span>
          </div>

          <div className="infoCard">
            <h4>⏰ Working Hours</h4>
            <span>Mon - Sat | 9:00 AM - 6:00 PM</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="contactFormBox fadeUp delay">

          <form className="contactForm">

            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Phone No." />
            <input type="email" placeholder="Email" />

            <select>
              <option>How did you hear about us?</option>
              <option>Instagram</option>
              <option>Google</option>
              <option>Friend</option>
              <option>Other</option>
            </select>

            <textarea placeholder="Leave us a Message"></textarea>

            <button type="submit">Send Message</button>

          </form>

        </div>

      </div>

    </section>
  );
}