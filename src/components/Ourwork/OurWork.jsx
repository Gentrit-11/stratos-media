import React, { useState, useEffect, useRef } from "react";
import useIntersectionObserver from "../useIntersectionObserver";
import "./OurWork.css";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Modal from "./Modal"; // Import the Modal component
import { BsArrowUpRight } from "react-icons/bs";
import brochure1 from "./images/brochure1.jpg";
import brochure1a from "./images/brochure1.1.jpg";
import brochure2 from "./images/brochure2.jpg";
import brochure2a from "./images/brochure2,1.jpg";
import brochure3 from "./images/brochure3.jpg";
import brochure3a from "./images/brochure3.1.jpg";
import brochure4 from "./images/brochure4.jpg";
import brochure4a from "./images/brochure4.1.jpg";
import mobilje1 from "./images/mobilje1.jpg";
import mobilje2 from "./images/mobilje2.jpg";
import mobilje3 from "./images/mobilje3.jpg";
import mobilje4 from "./images/mobilje4.jpg";
import mobilje5 from "./images/mobilje5.jpg";
import mobilje6 from "./images/mobilje6.jpg";
import mobilje7 from "./images/mobilje7.jpg";
import Menu from "./images/Menu.jpg";
import Menu2 from "./images/Menu2.jpg";

const brochures = [
  {
    title: "We proudly present our new Summer Camp brochure, designed to spark children's imagination and provide parents with essential information.",
    category: "Marketing",
    img: [brochure1a, brochure1],
    to: "https://www.facebook.com/share/p/qTdypcqJgs6UyQC5/",
  },
  {
    title: "We proudly present the new Summer Camp brochure for children, created for Young Engineers Prishtina. Designed to spark children's imagination and provide parents with essential information, this brochure brings the spirit of adventure and learning to life",
    category: "Marketing",
    img: [brochure2, brochure2a],
    to: "https://www.facebook.com/share/p/Aq6yiPqVHZxoV6qB/",
  },
  {
    title: "We proudly present the new Summer Camp brochure for children, created for Instituti galaxy. Designed to spark children's imagination and provide parents with essential information, this brochure brings the spirit of adventure and learning to life",
    category: "Marketing",
    img: [brochure3, brochure3a],
    to: "/",
  },
  {
    title: "We proudly present the new Summer Course brochure, created for Instituti Galaxy. Designed to ignite children's passion for technology and provide parents with essential information, this brochure captures the essence of adventure and learning",
    category: "Marketing",
    img: [brochure4, brochure4a],
    to: "",
  },
];

const furnitures = [
  {
    title: "These designs are created for Modern Home Furniture If you want your furniture to captivate and attract people, contact us for designs that combine elegance and functionality, making every room a standout masterpiece.",
    category: "Furniture",
    date: "2022-03-01",
    to: "/furniture1",
    img: [mobilje1, mobilje2],
  },
  {
    title: "These designs are created for Modern Home Furniture If you want your furniture to captivate and attract people, contact us for designs that combine elegance and functionality, making every room a standout masterpiece.",
    category: "Furniture",
    to: "/furniture2",
    img: [mobilje3, mobilje4],
  },
  {
    title: "These designs are created for Modern Home Furniture If you want your furniture to captivate and attract people, contact us for designs that combine elegance and functionality, making every room a standout masterpiece.",
    category: "Furniture",
    to: "/furniture2",
    img: [mobilje4, mobilje5],
  },
];

const menus = [
  {
    title: "If you want your menu to stand out and look appealing, here's an attractive design example",
    category: "Menu",
    to: "https://www.facebook.com/share/p/aTXDoTcmNN1Qtefp/",
    img: [Menu, Menu2],
  },
];

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

  return (
    <div
      ref={sectionRef}
      className={`${className} section ${isIntersecting ? "visible" : "hidden"}`}
    >
      {children}
    </div>
  );
};

const OurWork = () => {
  const [activeTab, setActiveTab] = useState("Brochures");
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
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

  useEffect(() => {
    if (showModal) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showModal]);

  const getDataForActiveTab = () => {
    switch (activeTab) {
      case "Brochures":
        return brochures;
      case "Furnitures":
        return furnitures;
      case "Menus":
        return menus;
      default:
        return [];
    }
  };

  const isExternalLink = (url) => url.startsWith("http");

  const openModal = (images, category) => {
    setSelectedImage(images);
    setSelectedCategory(category);
    setShowModal(true);
  };

  const renderCarousel = (data) => (
    <Carousel>
      {data.map((props, index) => (
        <Section className="slider-item" key={index}>
          <div className="img-container-Blog">
            {props.img.map((img, imgIndex) => (
              <div
                key={imgIndex}
                className="img-work"
                style={{ backgroundImage: `url(${img})` }}
                onClick={() => openModal(props.img, activeTab)}
              ></div>
            ))}
          </div>
          <div className="category-blog">{props.category}</div>
          <div className="text-blog">
            <div className="date-blog">{props.date}</div>
            {isExternalLink(props.to) ? (
              <div className="work-d">
              <a
                href={props.to}
                className="inline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <h6 className="h6-blog">{props.title}</h6>
                <div className="circle-blog">
                  <BsArrowUpRight />
                </div>
              </a>
              </div>
            ) : (
              <div className="work-d">
              <Link to={props.to} className="inline ">
                <h6 className="h6-blog">{props.title}</h6>
                <div className="circle-blog">
                  <BsArrowUpRight />
                </div>
              </Link>
              </div>
            )}
          </div>
        </Section>
      ))}
    </Carousel>
  );

  return (
    <div className="main-services" id="ourwork">
      <div className='servicesB'>
        <div className='bg'></div>
        <div className="title-container">
          <div className="title-glow">{displayText}</div> {/* Animated title */}
        </div>
      </div>

      <div className="tabs">
        <div
          className={`tab ${activeTab === "Brochures" ? "active" : ""}`}
          onClick={() => setActiveTab("Brochures")}
        >
          Brochures
        </div>
        <div
          className={`tab ${activeTab === "Furnitures" ? "active" : ""}`}
          onClick={() => setActiveTab("Furnitures")}
        >
          Furnitures
        </div>
        <div
          className={`tab ${activeTab === "Menus" ? "active" : ""}`}
          onClick={() => setActiveTab("Menus")}
        >
          Menus
        </div>
      </div>
      <div className="carouselsslides">
      {activeTab === "Brochures" && renderCarousel(brochures)}
      {activeTab === "Furnitures" && renderCarousel(furnitures)}
      {activeTab === "Menus" && renderCarousel(menus)}
      </div>

      {showModal && (
        <Modal
          images={selectedImage}
          onClose={() => setShowModal(false)}
          category={selectedCategory}
        />
      )}
    </div>
  );
};

export default OurWork;
