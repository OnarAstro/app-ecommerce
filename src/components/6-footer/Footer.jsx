import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import "./Footer.css";
import { IoArrowUpOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" footer">
      <div className=" footer-top container">
        <div className=" footer-one">
          <div className=" footer-one-icon">
            <img src="logo2.png" alt="" />
            <h3>Colar</h3>
            <img src="logo2.png" alt="" />
          </div>
          <div className=" footer-one-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className=" footer-one-icons">
            <FaFacebookF className=" FaFacebookF" />
            <FaTwitter className=" FaTwitter" />
            <FaLinkedinIn className=" FaLinkedinIn" />
            <FaInstagram className=" FaInstagram" />
          </div>
        </div>
        <div className=" footer-two-container">
          <div className=" footer-two">
            <div className=" footer-two-title">
              <h3>Catalog</h3>
            </div>
            <div className=" footer-two-text">
              <p>Necklace</p>
              <p>Hoodies</p>
              <p>Jewelry Box</p>
              <p>T-Shirt</p>
              <p>Jacket</p>
            </div>
          </div>
          <div className=" footer-two">
            <div className=" footer-two-title">
              <h3>ABOUT US</h3>
            </div>
            <div className=" footer-two-text">
              <p>Our Producers</p>
              <p>Sitemap</p>
              <p>FAQ</p>
              <p>About Us</p>
              <p>Terms & Conditions</p>
            </div>
          </div>
          <div className=" footer-two">
            <div className=" footer-two-title">
              <h3>CUSTOMER SERVICES</h3>
            </div>
            <div className=" footer-two-text">
              <p>Contact Us</p>
              <p>Track Your Order</p>
              <p>Product Care & Repair</p>
              <p>Book an Appointment</p>
              <p>Shipping & Returns</p>
            </div>
          </div>
        </div>
      </div>
      <div className=" footer-bottom">
        <div className=" footer-bottom-box container">
          <div className=" footer-bottom-left">
            <p>© 2022 Coral , Astro.</p>
          </div>
          <div className=" footer-bottom-center">
            <img src="iconpay.png" alt="" />
          </div>
          <div className=" footer-bottom-right">
            <Link to="#">
              <p>
                Scroll To Top <IoArrowUpOutline className="IoArrowUpOutline" />
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
