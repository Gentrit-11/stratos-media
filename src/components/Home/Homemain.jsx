import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ParticlesComponent from './ParticlesComponent';
import { Data1 } from '../Services/data';  // Adjust the import path as necessary
import './Homemain.css';
import Navbar from '../Navbar/Navbar'
const Homemain = () => {
  return (
    <div className='Home-container'>
      <Navbar hidePricingContact={true} />  {/* Pass the prop to hide links */}
      <ParticlesComponent />
      <div className="background" id="Home">
        <div className="text">
          <h1 className="text-h1">Execute your Marketing idea with Stratos Media</h1>
          <p className="p-h">
            We are a creative Digital Marketing company who loves helping clients grow. We create
            products that you can use to achieve your purposes.
          </p>
          <div className="links-h">
            <Link to="/services" className="button-h">
              <span>Work with us</span>
            </Link>
            <div className="bg-h"></div>
          </div>
        </div>
      </div>
      <div className='animation'>
        <div className="floating-words">
          {Data1.map((item, index) => (
            <div key={index} className="word" style={{ animationDelay: `${index * 2}s` }}>
              {item.icon} {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Homemain;
