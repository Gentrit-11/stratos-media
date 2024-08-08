import React, { useRef, useEffect } from "react";
import useIntersectionObserver from "../useIntersectionObserver";
import "./services.css";
// import { Data1 } from "./data";
import { BsArrowUpRight } from "react-icons/bs";
import { GoArrowUpRight } from "react-icons/go";
import { MdDesignServices } from "react-icons/md";
import { BsFront } from "react-icons/bs";
import { Link } from "react-router-dom";




export const DataS = [
  {
    icon: <MdDesignServices />,
    title: "Our Design Services",
    text: "We offer a range of design services including business cards, clothing designs, stickers, and floor decals to enhance your brand's identity and message",
    to: "/services",
  },
  {
    icon: <BsFront />,
    title: "Explore More",
    text: "Visit our services page to see a detailed list of all the services we offer and find the perfect solution for your needs.",
    to: "/services",
  },
  {
    icon: <BsFront />,
    title: "Discover Our Full Range",
    text: "Visit our services page for a detailed list of our offerings, including stickers and floor decals. Find the perfect design solution tailored to your business.",
    to: "/services",
  },
]

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

const Services = () => {
  return (
    <div className="main-services" id="services">
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

        {DataS.map((props, index) => {
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
      <Link to="/services" className="viewmore-link">
  <li className="view-li">
    View More <GoArrowUpRight className="viewmore-icon" />
  </li>
</Link>



    </div>
  );
};

export default Services;
