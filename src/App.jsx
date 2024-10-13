import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/Navbar/NavbarBanner";
import Home from "./components/Home/Home";
import WebDevelopment from "./pages/web-development";
import Footer from "./components/Footer/Footer";
import Testimonial from "./components/Testimonial/Testimonial";
import ContactUsCard from "./components/Contactus/Contactus";
import Digitalpage from "./pages/Digitalmarketing/Digitalpage";
import Businessconsulting from "./pages/Business-consulting/Business-consulting";
import Aboutus from "./pages/About-us/About-us";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <NavbarBanner />
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/services/web-development" element={<WebDevelopment />} />
        <Route path="/services/digital-marketing" element={<Digitalpage/>} />
        <Route path="/services/business-consulting" element={<Businessconsulting/>} />
        <Route path="/about-us" element={<Aboutus/>}/>
      </Routes>
      <Testimonial/>
      <ContactUsCard/>
      <Footer />
    </main>
  );
};

export default App;
