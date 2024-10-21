import { FaInstagram } from "react-icons/fa6";

import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact container">
        <div className="contact-title">
          <h1>Foolow Products And Discounts On Instagram</h1>
        </div>
        <div className="contact-box-img">
          <div className=" contact-img">
            <img src="./insta1.png" alt="" />
            <FaInstagram className="FaInstagram" />
          </div>
          <div className=" contact-img">
            <img src="./insta2.png" alt="" />
            <FaInstagram className="FaInstagram" />
          </div>
          <div className=" contact-img">
            <img src="./insta3.png" alt="" />
            <FaInstagram className="FaInstagram" />
          </div>
          <div className=" contact-img">
            <img src="./insta4.png" alt="" />
            <FaInstagram className="FaInstagram" />
          </div>
          <div className=" contact-img">
            <img src="./insta5.png" alt="" />
            <FaInstagram className="FaInstagram" />
          </div>
          <div className=" contact-img">
            <img src="./insta6.png" alt="" />
            <FaInstagram className="FaInstagram" />
          </div>
        </div>
        <div className="contact-form">
          <h1>Or Subscribe to the Newsletter</h1>
          <form action="">
            <input type="email" placeholder="Email Address..." />
            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
