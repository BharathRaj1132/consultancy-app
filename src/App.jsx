import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import WhyOurCompany from "./components/WhyOurCompany";
import OurStory from "./components/OurStory";
import GetInTouch from "./components/GetInTouch";
import Services from "./components/Services";

export default function App() {
  return (
    <>
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