import React from "react";
import "./testimonial.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: AVTR1,
    name: "Isaac Bright",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, sed!",
  },
  {
    avatar: AVTR2,
    name: "Isah Hakeem",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, sed!",
  },
  {
    avatar: AVTR3,
    name: "King Zach",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, sed!",
  },
  {
    avatar: AVTR4,
    name: "Oche Ejeh",
    review:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam, sed!",
  },
];

const Testimonial = () => {
  return (
    <section id="testimonials">
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client_avatar">
                <img src={avatar} alt="client_image" />
              </div>
              <h5>{name}</h5>
              <small>{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonial;
