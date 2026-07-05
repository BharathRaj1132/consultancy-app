import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "../styles/contact.css";

export default function GetInTouch() {
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs.sendForm(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  form.current,
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
)
      .then(() => {
        setLoading(false);
        setStatus("success");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setStatus("error");
      });
  };

  return (
    <section id="getintouch" className="contactSection">
      <div className="contactContainer">

        {/* LEFT SIDE */}

        <div className="contactInfo fadeUp">
          <h2>Get in Touch</h2>

          <p>
            We'd love to hear from you. Reach out for inquiries,
            collaborations, or support. We usually respond within
            24 hours.
          </p>

          <div className="infoCard">
            <h4>📍 Address</h4>

            <span>
              DOC LAUNCH OVERSEAS PRIVATE LIMITED
              <br />
              S.No.214F/1, Appu Towers,
              Tiruchengode Road,
              Namakkal,
              <br />
              Namakkal - 637001,
              Tamil Nadu
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

          <form
            ref={form}
            onSubmit={sendEmail}
            className="contactForm"
          >

            <input
              type="text"
              name="name"
              placeholder="Name"
              required
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone No."
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              required
            />

            <select
              name="reference"
              defaultValue=""
              required
            >
              <option value="" disabled>
                How did you hear about us?
              </option>

              <option>Instagram</option>
              <option>Google</option>
              <option>Friend</option>
              <option>Other</option>
            </select>

            <textarea
              name="message"
              placeholder="Leave us a Message"
              rows="6"
              required
            />

            <input
              type="hidden"
              name="time"
              value={new Date().toLocaleString()}
            />

            <button
              type="submit"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="successMsg">
                ✅ Message sent successfully.
                We'll contact you shortly.
              </p>
            )}

            {status === "error" && (
              <p className="errorMsg">
                ❌ Something went wrong.
                Please try again.
              </p>
            )}

          </form>

        </div>

      </div>
    </section>
  );
}