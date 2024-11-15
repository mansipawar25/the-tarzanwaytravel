
import './Testimonial.css'

import girl from '../../assets/girl.webp'
import boy from '../../assets/boys.webp'
import family from '../../assets/family.webp'
import couple from '../../assets/couple.webp'

function Testimonial({ image,testimonial, author, tripDetails, itineraryLink }) {
  return (
    <div className="testimonial-card">
      <img src={image} alt="" className='testimonial-image' />
      <p className="testimonial-text">{testimonial}</p>
      <p className="author-name">{author}</p>
      <p className="trip-details">{tripDetails}</p>
      <a href={itineraryLink} className="see-itinerary">See Itinerary</a>
    </div>
  );
}

function Testimonials() {
  const testimonials = [
    {
      image: girl,
      testimonial: "The Tarzan Way team I can't thank you enough for helping me plan my trip. You guys are amazing. Janhavi & Devyani and the entire team kept checking on me. The entire team was so responsive & planned everything really well. I will definitely recommend TTW for any trip. Kudos to you guys. Lots of Love❤❤❤❤❤❤❤❤",
      author: "Nisarga Gauda",
      tripDetails: "5 Days-Kashmir",
      itineraryLink: "#",
    },
    {
      image: boy,
      testimonial: "Thank you The Tarzan Way...It was an experience to remember and very moderate experience cost..Love the way they handled things. Perfect hotels, rich experience and memories to collect. Thanks TTW.. will definitely look forward to the next trip..",
      author: "Prashant Sharma",
      tripDetails: "6 Days-Kashmir",
      itineraryLink: "#",
    },
    {
      image: family,
      testimonial: "Thank you for the trip plan TTW. We had a lot of fun. Please convey our gratitude for the cab driver. He was very humble, polite and helpful.",
      author: "Erica",
      tripDetails: "5 Days-Italy",
      itineraryLink: "#",
    },
    {
      image: couple,
      testimonial: "Devayani and her team have been amazing from their meticulous attention to detail, to answering all my queries and their unwavering support via chat and call throughout our journey. Our trip was memorable thanks to the team at The Tarzan Way. I cannot recommend them enough!.",
      author: "Erica",
      tripDetails: "8 Days-Switzerland",
      itineraryLink: "#",
    },

    // Add more testimonials here
  ];

  return (
    <section className="testimonials">
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </section>
  );
}

export default Testimonials