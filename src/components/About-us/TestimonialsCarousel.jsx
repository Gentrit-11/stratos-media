import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './TestimonialsCarousel.css';

const reviews = [
  {
    id: 1,
    image:'http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png',
    name: 'John Doe',
    location: 'Sydney, Australia',
    text: 'I was extremely pleased with the quality of the product. It exceeded my expectations and provided great value for the price.',
  },
  {
    id: 2,
    image:
      'http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png',
    name: 'Jane Smith',
    location: 'London, UK',
    text: 'The customer service was excellent. They were responsive and helpful throughout the entire process, making it a smooth experience for me.',
  },
  {
    id: 3,
    image:
      'http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png',
    name: 'Alex Johnson',
    location: 'New York, USA',
    text: 'The attention to detail in their work is impressive. Every aspect of the project was handled with precision and care. I highly recommend their services.',
  },
  {
    id: 4,
    image:
      'http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png',
    name: 'Emily Davis',
    location: 'San Francisco, USA',
    text: 'The team demonstrated a deep understanding of my requirements. They were able to capture the essence of my vision and deliver a product that exceeded my expectations.',
  },
  {
    id: 5,
    image:
      'http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png',
    name: 'David Miller',
    location: 'Berlin, Germany',
    text: "The product not only met but exceeded my expectations. It's clear that the team is dedicated to delivering high-quality work. I'm a satisfied customer.",
  },
];

const TestimonialsCarousel = () => {
  return (
    <section className="testimonial-container">
      <div className="title">
        <h2>What Our Client Says</h2>
        <p>Our Clients send us a bunch of smiles with our services and we love them.</p>
      </div>

      <div className="slider-container">
        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id}>
              <div className="testimonial-card">
                <img className="review-img" src={review.image} alt={review.name} />
                <div className="content">
                  <p className="text">{review.text}</p>
                  <div className="info">
                    {/* <div className="rating">
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9733;</span>
                      <span className="star">&#9734;</span>
                    </div> */}
                    <p className="user">{review.name}</p>
                    <p className="location">{review.location}</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
