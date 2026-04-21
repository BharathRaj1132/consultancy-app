export default function GetInTouch() {
  return (
    <section id="getintouch" className="touchSection">
      <div className="touchContainer">
        <h2>Get in Touch</h2>

        <form className="touchForm">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="PhoneNo." />
          <input type="email" placeholder="Email" />

          <select>
            <option>How did you hear about us?</option>
            <option>Instagram</option>
            <option>Google</option>
            <option>Friend</option>
            <option>Other</option>
          </select>

          <textarea placeholder="Leave us a Message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}