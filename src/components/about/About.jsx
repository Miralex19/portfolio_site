import React from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { FaAward } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { MdWork } from "react-icons/md";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="My Photo" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>3+ Years Working </small>
            </article>

            <article className="about_card">
              <IoIosPeople className="about_icon" />
              <h5>Clients</h5>
              <small>100+ Worldwide</small>
            </article>

            <article className="about_card">
              <MdWork className="about_icon" />
              <h5>Projects</h5>
              <small>30+ Completed </small>
            </article>
          </div>
          <p>
            I’m Miracle Ohuka. I’m a designer who codes. I’ve worked
            internationally, in-house, and remotely on projects for brands,
            agencies, startups, and charities. I care deeply about creating
            world-class, useful, and beautiful products that help people and
            make a difference. I can be as involved in your project as you need
            me to be; from the seed of the idea, to sketches, creative
            direction, design, copywriting, system design, and even the
            front-end and WordPress build.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
