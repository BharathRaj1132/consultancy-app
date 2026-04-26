import { useEffect, useState, useRef } from "react";

const images = [
  "/images/bg1.jpg",
  "/images/bg2.jpg",
  "/images/bg3.jpg",
  "/images/bg4.jpg",
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const startX = useRef(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // MOBILE SWIPE
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startX.current - endX;

    if (diff > 50) {
      setCurrent((prev) => (prev + 1) % images.length);
    } else if (diff < -50) {
      setCurrent((prev) =>
        prev === 0 ? images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section
      id="home"
      className="section hero"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* SLIDER */}
      <div className="slider">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === current ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="overlay">
        <div className="heroContent">
          <h1 className="fadeUp">Simple and Honest, Like It Used To Be.</h1>

          <p className="heroSub fadeUp delay">
            Delivering quality and trust through simple, reliable solutions.
          </p>

          <button
            className="primaryBtn fadeUp delay2"
            onClick={() =>
              document
                .getElementById("getintouch")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* DOTS */}
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === current ? "dot active" : "dot"}
            onClick={() => setCurrent(index)}
          ></span>
        ))}
      </div>
    </section>
  );
}