import { useEffect, useRef, useState } from "react";
import ReactCountryFlag from "react-country-flag";
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
      title: "University Admission Assistance:",
      desc: "We guide students in selecting the right university and take complete responsibility for the admission process after the selection is finalized.",
      highlight: true,
    },
    {
      title: "Visa Process Support:",
      desc: "After admission, we assist students throughout the student visa application process and ensure smooth documentation and approval guidance.",
    },
    {
      title: "Currency Conversion & Fee Payment Assistance:",
      desc: "For the convenience of parents, we also assist with tuition fee payments and currency conversion, helping avoid the hassle of carrying cash.",
    },
    {
      title: "Emergency Support:",
      desc: "We provide guidance and support during emergency situations, as we maintain direct communication with the universities we recommend.",
    },
    {
      title: "Academic Monitoring & Guidance:",
      desc: "Students’ semester performance and internal marks are regularly monitored, and updates are shared with parents to ensure proper academic progress.",
    },
  ];

 const countries = [
  { code: "RU", name: "Russia" },
  { code: "MU", name: "Mauritius" },
  { code: "KG", name: "Kyrgyzstan" },
  { code: "GE", name: "Georgia" },
  { code: "AM", name: "Armenia" },
  { code: "MD", name: "Moldova" },
  { code: "UA", name: "Ukraine" },
];
  return (
    <section id="services" className="servicesSection" ref={sectionRef}>
      <h2 className={visible ? "fadeUp active" : "fadeUp"}>Our Services</h2>

      <p
        className={
          visible
            ? "servicesIntro fadeUp active delay"
            : "servicesIntro fadeUp"
        }
      >
        Trusted medical consultancy services designed for clarity, care, and
        confidence.
      </p>

      <div className="servicesLayout">
        {/* LEFT SIDE */}
        <div
          className={`countriesSection ${
            visible ? "fadeLeft active" : "fadeLeft"
          }`}
        >
          <span className="countryBadge">MBBS Abroad</span>

          <p>
            We are supporting students in securing MBBS admissions at recognized medical universities in the following countries
          </p>

          <div className="countryGrid">
  {countries.map((country, index) => (
    <div
      key={index}
      className="countryCard"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <ReactCountryFlag
        countryCode={country.code}
        svg
        className="countryFlag"
      />

      <span>&nbsp;{country.name}</span>
    </div>
  ))}
</div>
        </div>

        {/* RIGHT SIDE */}
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
      </div>
    </section>
  );
}