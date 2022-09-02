import React from "react";
import "./contact.css";
import { AiOutlineMail, AiOutlineWhatsApp } from "react-icons/ai";
import { BsMessenger } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_kryrr2f",
      "template_2asusnm",
      form.current,
      "_wTx5H3dZ_skVU8x4"
    );
    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Guess You Came To Talk?</h5>
      <h2>Meet Me</h2>

      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact_option">
            <AiOutlineMail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>miracleohuka12@gmail.com</h5>
            <a href="http://mailto:miracleohuka12@gmail.com" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsMessenger className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>Miracle Chigoziri II</h5>
            <a href="http://m.me/100074949767398" target="_blank">
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <AiOutlineWhatsApp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>09010925110</h5>
            <a
              href="https://api.whatsapp.com/send?phone+2349010925110"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/*END OF CONTACT*/}

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="7"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
