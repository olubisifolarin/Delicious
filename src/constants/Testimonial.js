import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';




const testimonialData = [
    {
        name: "Jerna kelins",
        text: 'Store Owner',
        id: "image 1",
        urlImg: require('../assets/testimonials1.jpg'),
        testImg: require('../assets/rating.png'),
        ptext: "Lorem ipsum dolor sit amet consectetur adipisicing elit  Optio officiis dolore rem ipsum dolorem tenetur aperiam iure vitae Ex earum quae in odit mollitia incidunt modi vitae nostrum voluptas eaque."
    },

    {
        name: "Matt Branson",
        text: 'Designer',
        id: "image 2",
        urlImg: require('../assets/testimonials2.jpg'),
        testImg: require('../assets/rating.png'),
        ptext: "Lorem ipsum dolor sit amet consectetur adipisicing elit  Optio officiis dolore rem ipsum dolorem tenetur aperiam iure vitae Ex earum quae in odit mollitia incidunt modi vitae nostrum voluptas eaque."
    },

    {
        name: "Saul Goodman",
        id: "image 3",
        text: 'Ceo & Founder',
        urlImg: require('../assets/testimonials3.jpg'),
        testImg: require('../assets/rating.png'),
        ptext: "Lorem ipsum dolor sit amet consectetur adipisicing elit  Optio officiis dolore rem ipsum dolorem tenetur aperiam iure vitae Ex earum quae in odit mollitia incidunt modi vitae nostrum voluptas eaque."
    },

    {
        name: "Sarah Wilson",
        id: "image 4",
        text: 'Freelancer',
        urlImg: require('../assets/testimonials4.jpg'),
        testImg: require('../assets/rating.png'),
        ptext: "Lorem ipsum dolor sit amet consectetur adipisicing elit  Optio officiis dolore rem ipsum dolorem tenetur aperiam iure vitae Ex earum quae in odit mollitia incidunt modi vitae nostrum voluptas eaque."
    }
        
]


export default function Testimonial() { 
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,   // Add this line to enable automatic sliding
        autoplaySpeed: 5000,   
      };

    return (
<>  
    <div className='slider'>
        <div className="testimonial-slide">
            <Slider {...settings} className="SliderDots" appendDots={(dots) => <ul>{dots}</ul>}>
                {testimonialData.map((testimonial) => (
                <div key={testimonial.id} className="testimonial">
                 <img src={testimonial.urlImg} className="testImg " alt={testimonial.id} />
                    <h3>{testimonial.name}</h3>
                    <p>{testimonial.text}</p>
                    <img src={testimonial.testImg} className="ratingImg" alt={testimonial.id} />
                    <div className="testimonialSlider">
                        <FaQuoteLeft className="quote"/>
                        <p className="pText">{testimonial.ptext}</p>
                        <FaQuoteRight className="quote right"/>
                    </div>   
                </div>
                ))}
            </Slider>
        </div>
    </div>  
</>  
);  
}  
  

