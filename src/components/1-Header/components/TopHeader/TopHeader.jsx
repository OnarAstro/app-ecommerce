import { IoSearch } from "react-icons/io5";
import { FaUserLarge } from "react-icons/fa6";
import { FaShoppingBag } from "react-icons/fa";

import "./TopHeader.css";
import Theme from "../../../../Page/theme/Theme";
import { Link } from "react-router-dom";
const TopHeader = () => {
  return (
    <div className="d-flex top-header container">
      <div className="search">
        <IoSearch className="CgSearch" />
      </div>
      <div>
        <Theme />
      </div>
      <a href="/" className=" box-logo">
        <img src="logo2.png" alt="" />
        <h3>Colar</h3>
        <img src="logo2.png" alt="" />
      </a>
      <div className=" d-flex box-icons">
        <div className=" box-Account">
          <FaUserLarge className="FaUserLarge" />
          <span>Account</span>
        </div>
        <Link to="/cart" className=" box-Shopping">
            <FaShoppingBag className="FaShoppingBag" />
            <span>Shopping</span>
        </Link>
      </div>
    </div>
  );
};

export default TopHeader;
