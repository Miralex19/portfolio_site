import React from "react";
import "./services.css";
import { AiOutlineCheck } from "react-icons/ai";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service_list">
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Creating user flows, wireframes, prototypes and mockups.</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>
                Designing UI elements such as input controls, navigational
                components and informational components.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>
                Identifying and troubleshooting UX problems (e.g.
                responsiveness).
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>
                Collaborating effectively with product, engineering, and
                management teams.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Creating original graphic designs.</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Creating user-centered designs.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Create and test applications for websites.</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Collaborate.</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Present design specs.</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Work with graphics and other designers.</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Maintain and update websites.</p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Stay up-to-date on technology.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEV */}
        <article className="service">
          <div className="service_head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service_list">
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>
                Collaborating with internal departments to establish campaign
                objectives, complete tasks, and identify and solve problems.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>
                Conducting research and interviews to learn more about current
                trends, developments, and perceptions about the subject matter,
                and then contextualizing your findings..
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>
                Develop and create content for web presence using HTML and CSS
                code.
              </p>
            </li>
            <li>
              <AiOutlineCheck className="service_list-icon" />
              <p>Manage social media.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
