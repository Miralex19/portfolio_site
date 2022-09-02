import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillGoogleCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer_logo">
        MIRALEX
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonial</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer_socials">
        <a href="http://facebook.com">
          <FaFacebookF />
        </a>
        <a href="http://twitter.com">
          <AiOutlineTwitter />
        </a>
        <a href="http://Google.com">
          <AiFillGoogleCircle />
        </a>
      </div>

      <div className="footer_copyright">
        <small>&copy; MIRALEX. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;