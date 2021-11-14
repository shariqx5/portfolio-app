import React from "react";
import "./style.css";
import { Link } from "react-scroll";

const Footer = (props) => {
  const { showMainFooter = false } = props;
  return (
    <div className={`wpo-footer-area ${props.Ftclass}`}>
      <div className="container">
        {showMainFooter && (
          <div className="wpo-footer-top">
            <div className="row">
              <div className="col-lg-2 col-md-3 col-sm-3 col-12">
                <div className="footer-logo">
                  <img src={props.ftLogo} alt="" />
                </div>
              </div>
              <div className="col-lg-6 col-md-9 col-sm-9 col-12">
                <div className="wpo-footer-menu">
                  <ul>
                    <li>
                      <Link to="about" spy smooth>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="portfolio" spy smooth>
                        Portfolio
                      </Link>
                    </li>
                    <li>
                      <Link to="contact" spy smoot>
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                <div className="wpo-footer-social">
                  <ul>
                    <li>
                      <Link to="/">
                        <i className="fa fa-facebook"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </Link>
                    </li>
                    <li>
                      <Link to="/">
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className={`wpo-footer-bottom ${props.Fbclass}`}>
        <span>© 2020 Mohammad Shariq. All rights reserved</span>
      </div>
    </div>
  );
};

export default Footer;
