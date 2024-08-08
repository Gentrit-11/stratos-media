import React from "react";
import AboutUs from "../components/About-us/AboutUs";
import Navbar from "../components/Navbar/Navbar";
import TestimonialsCarousel from "../components/About-us/TestimonialsCarousel";
import '../components/About-us/TestimonialsCarousel.css'
import Footer from '../components/Footer/Footer';
import Price from '../components/Price/Price';
import Scroll from '../components/Scroll/Scroll'

const AboutUsPage = () => {
  return (
    <div className="aboutpage">
      <Navbar />
<div className="aboutusp">
      <AboutUs />
      </div>
      <div className="testimonial-section">
          <TestimonialsCarousel />
        </div>
        <Price />
        <Footer />
        <Scroll/>
    </div>
  );
};

export default AboutUsPage;
