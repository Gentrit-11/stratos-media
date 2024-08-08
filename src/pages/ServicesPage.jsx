import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Data1 } from '../components/Services/data';
import Footer from '../components/Footer/Footer';
import Price from '../components/Price/Price';
import useIntersectionObserver from "../components/useIntersectionObserver";
import { BsArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import '../components/Services/services.css'
import Scroll from '../components/Scroll/Scroll'

const Section = ({ children, className }) => {
  const sectionRef = useRef(null);
  const [setObserverEntry, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
  });

  useEffect(() => {
    if (sectionRef.current) {
      setObserverEntry({ target: sectionRef.current });
    }
  }, [setObserverEntry]);

  useEffect(() => {
    console.log(`Section is intersecting: ${isIntersecting}`); // Debugging
  }, [isIntersecting]);

  return (
    <div
      ref={sectionRef}
      className={`${className} section ${
        isIntersecting ? "visible" : "hidden"
      }`}
    >
      {children}
    </div>
  );
};

const ServicesPage = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  const text = "Elevate Your Brand with Cutting-Edge Digital Marketing";

  useEffect(() => {
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(text.substring(0, index - 1));
        setIndex(index - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setDisplayText(text.substring(0, index + 1));
        setIndex(index + 1);
      }, 100);
    }

    if (!isDeleting && index === text.length) {
      setTimeout(() => setIsDeleting(true), 1000);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }

    return () => clearTimeout(timer);
  }, [index, isDeleting, text]);

  return (
    <div className="main-services" id="services">
      <Navbar/>  {/* Pass the prop to hide links */}

      <div className='servicesB'>
        <div className='bg'></div>
        <div className="title-container">
          <div className="title-glow">{displayText}</div> {/* Animated title */}
        </div>
      </div>

      <Section className="what-we-offer-component">
        <div className="col col1">
          <h1 className="h1-do">What we do</h1>
          <p className="p">
            We deliver cutting-edge digital marketing solutions designed to
            transform your business, boost your online presence, and drive
            sustained growth. Our expert
          </p>
          <div className="features">Services</div>
        </div>

        {Data1.map((props, index) => {
          console.log(`Rendering service item: ${props.title}`);
          return (
            <Section key={index} className="col col2">
              <div className="inner-col">
                <div className="icon-s">{props.icon}</div>
                <h6>{props.title}</h6>
                <p>{props.text}</p>
                <div className="link">
                  <Link to={props.to}>
                    <BsArrowUpRight />
                  </Link>
                </div>
              </div>
            </Section>
          );
        })}
      </Section>
      <Price />
      <Footer />
      <Scroll/>
    </div>
  );
};

export default ServicesPage;
