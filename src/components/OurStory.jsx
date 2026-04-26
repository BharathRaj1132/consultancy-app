import { useEffect, useRef, useState } from "react";
import "../styles/ourstory.css";

export default function OurStory() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section id="story" className="storySection" ref={sectionRef}>

      <h2 className={`fadeUp ${visible ? "active" : ""}`}>Our Story</h2>

      <p className={`storyIntro fadeUp ${visible ? "active delay" : ""}`}>
        Built with passion, trust, and a simple vision to deliver quality work
        with honesty and consistency.
      </p>

      <div className="storyContainer">

        <div className={`storyCard ${visible ? "active delay2" : ""}`}>
          <span className="roleBadge">Founder</span>
          <img src="/images/person1.png" className="storyImg" />
          <h3>Person One</h3>
          <p className="quote">“Simplicity always wins in the long run.”</p>
          <ul>
            <li>10+ years experience</li>
            <li>Strategy & leadership expert</li>
            <li>Focus on trust & quality</li>
          </ul>
        </div>

        <div className={`storyCard ${visible ? "active delay2" : ""}`}>
          <span className="roleBadge">Creative Head</span>
          <img src="/images/person2.png" className="storyImg" />
          <h3>Person Two</h3>
          <p className="quote">“Design is how it works, not how it looks.”</p>
          <ul>
            <li>Creative direction lead</li>
            <li>Strong UI/UX background</li>
            <li>Detail-focused execution</li>
          </ul>
        </div>

      </div>
    </section>
  );
}