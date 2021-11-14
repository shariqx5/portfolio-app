import React from "react";
import { Link } from "react-scroll";
import { Link as BrowserLink } from "react-router-dom";
import MobileMenu from "../../components/MobileMenu";

import "./style.css";

const Header = (props) => {
  const { showMenu = true, showGoBackButton = false } = props;
  return (
    <div className="header-style-1">
      <div className="container">
        <div className="header-content">
          <nav className="d-lg-block d-none header-b">
            {showMenu && (
              <ul>
                <li>
                  <Link activeClass="active" to="home" title="" spy smooth>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="about" title="" spy smooth>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="portfolio" spy smooth>
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="contact" spy smooth>
                    Contact
                  </Link>
                </li>
              </ul>
            )}
          </nav>
          {showGoBackButton === false && (
            <div className="contact">
              <div className="cart-search-contact">
                <Link to="contact" spy smooth className="theme-btn">
                  Lets Talk
                </Link>
              </div>
            </div>
          )}
          {showGoBackButton && (
            <div className="contact">
              <div className="cart-search-contact">
                <BrowserLink to="/home" className="theme-btn">
                  Go Back
                </BrowserLink>
              </div>
            </div>
          )}
          <div className="clearfix"></div>
        </div>
        <MobileMenu showMenu={showMenu} showGoBackButton={showGoBackButton} />
      </div>
    </div>
  );
};

export default Header;
