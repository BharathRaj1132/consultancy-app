import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import WhyOurCompany from "./components/WhyOurCompany";
import OurStory from "./components/OurStory";
import GetInTouch from "./components/GetInTouch";
import Services from "./components/Services";
import SEO from "./components/SEO";

export default function App() {
  return (
    <>
     <SEO
        title="Doc Launch Overseas | MBBS Abroad Admission Consultancy"
        description="Study MBBS Abroad with Doc Launch Overseas. We provide admissions to top medical universities in Russia, Georgia, Kyrgyzstan, Armenia, Moldova and Mauritius."
        keywords="MBBS Abroad, Study MBBS, Russia MBBS, Georgia MBBS, Medical Admission Consultancy, Doc Launch Overseas"
        url="https://doclaunchoverseas.com"
        image="https://doclaunchoverseas.com/logo.png" />
      <Navbar />
      <Home />
      <Services />
      <WhyOurCompany />
      <OurStory />
      <GetInTouch />
      <Footer />
    </>
  );
}