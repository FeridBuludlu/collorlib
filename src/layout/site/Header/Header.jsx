import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="main_div">
      <div className="first_header">
        <div className="first_header_left">
          <Link to="#" className="Link1">
            +12312-3-1209
          </Link>
          <Link to="#" className="Link1">
            {" "}
            SUPPORT@COLORLIB.COM
          </Link>
        </div>
        <div className="first_header_right">
          <button>LOGIN</button>
        </div>
      </div>
      <div className="second_header">
        <div className="second_header_left">
          <img
            src="https://preview.colorlib.com/theme/shop/img/logo.png.webp"
            alt=""
          />
        </div>
        <div className="second_header_right">
          <ul>
            <li><Link to='/'>HOME</Link></li>
            <li><Link to="Shop">SHOP</Link></li>
            <li><a href="#">MEN</a></li>
            <li><a href="#">WOMEN</a></li>
            <li><a href="#">LATEST</a></li>
            <li><a href="#">PAGES</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
