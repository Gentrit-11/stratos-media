import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './TestimonialsCarousel.css';

const reviews = [
  {
    id: 1,
    image:'http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png',
    name: 'Amir Bajrami',
    location: 'Fushëkosovë',
    text: 'Kam qenë jashtëzakonisht i kënaqur me shërbimin e menaxhimit të rrjeteve sociale. Puna e bërë ka tejkaluar pritshmëritë e mia dhe ka ofruar një vlerë të shkëlqyer për çmimin e paguar. Profili ynë në rrjetet sociale ka marrë një pamje të re, duke qenë më tërheqës dhe më të angazhuar me ndjekësit..',
  },
  {
    id: 2,
    image:
      'http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png',
    name: 'Astrit Gashi',
    location: 'Prishtinë',
    text: 'Eksperienca ime me menaxhimin e rrjeteve sociale ka qenë fantastike. Profili ynë ka pësuar ndryshime të mëdha që kanë sjellë përmirësim në mënyrën se si komunikojmë me ndjekësit tanë Postimet kanë qenë të vazhdueshme dhe me përmbajtje shumë tërheqëse, gjë që ka ndikuar në rritjen e numrit të ndjekësve dhe ndërveprimeve. Jam shumë i impresionuar me mënyrën se si është menaxhuar çdo detaj dhe me profesionalizmin gjatë gjithë procesit.',
  },
  {
    id: 3,
    image:
      'http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png',
    name: 'Besart Gashi',
    location: 'Pejë',
    text: 'Jam shumë i impresionuar me profesionalizmin dhe përkushtimin që është treguar gjatë menaxhimit të rrjeteve sociale. Postimet kanë qenë të organizuara në mënyrë perfekte, duke ndjekur një strategji të qartë dhe të përshtatur me qëllimet e kompanisë sonë',

  },
  {
    id: 4,
    image:
      'http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png',
    name: 'Laura Aliu',
    location: 'Mitrovicë',
    text: 'Jam jashtëzakonisht i kënaqur me shërbimin që kam marrë për menaxhimin e rrjeteve tona sociale. Rezultatet kanë qenë të shkëlqyera dhe kemi parë rritje të vazhdueshme në angazhimin e ndjekësve. Përmbajtja ka qenë kreative dhe e qëlluar, duke krijuar një lidhje më të fortë me audiencën tonë Për më tepër, puna ka qenë e organizuar dhe shumë profesionale. Çdo ide e diskutuar është zbatuar në mënyrë efektive dhe e ka përmirësuar prezencën tonë online. Pa dyshim, ky ka qenë një investim i vlefshëm dhe rezultatet flasin vetë.',
  },
  {
    id: 5,
    image:
      'http://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png',
    name: 'Podujevë',
    location: 'Podujevë',
    text: "Pas menaxhimit të rrjeteve sociale nga ekipi juaj, kam parë ndryshime të mëdha në mënyrën se si audienca jonë ndërvepron me përmbajtjen tonë. Shërbimi ka qenë shumë i mirëstrukturuar dhe kreativ, duke sjellë më shumë ndjekës dhe ndërveprime të qëndrueshme në secilën platformë Komunikimi dhe përditësimet e rregullta kanë qenë të vlefshme dhe të përpikta. Pa dyshim, do të vazhdojmë të punojmë së bashku dhe do të rekomandoj këtë shërbim për këdo që dëshiron rezultate konkrete në prezencën e tyre online.",
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
