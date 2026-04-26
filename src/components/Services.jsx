import { useEffect, useRef, useState } from "react";
import "../styles/services.css";

export default function Services() {
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

  const services = [
    {
      title: "Doctor Consultation",
      desc: "General and specialist medical consultation for all age groups.",
      highlight: true,
    },
    {
      title: "Second Opinion",
      desc: "Get clarity and confidence on your medical diagnosis.",
    },
    {
      title: "Medical Report Review",
      desc: "Simple explanation of reports like blood tests and scans.",
    },
    {
      title: "Health Checkup Guidance",
      desc: "Personalized advice for preventive health checkups.",
    },
    {
      title: "Chronic Care Support",
      desc: "Guidance for long-term conditions like diabetes & BP.",
    },
    {
      title: "Emergency Guidance",
      desc: "Immediate steps and advice before hospital visit.",
    },
  ];

  return (
    <section id="services" className="servicesSection" ref={sectionRef}>

      <h2 className={visible ? "fadeUp active" : "fadeUp"}>Our Services</h2>

      <p className={visible ? "servicesIntro fadeUp active delay" : "servicesIntro fadeUp"}>
        Trusted medical consultancy services designed for clarity, care, and confidence.
      </p>

      {/* DESKTOP GRID / MOBILE SCROLL */}
      <div className="servicesWrapper">

        {services.map((item, index) => (
          <div
            key={index}
            className={`serviceCard ${item.highlight ? "highlight" : ""} ${
              visible ? "active" : ""
            }`}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}

      </div>

    </section>
  );
}