import React from "react";
import { Link } from "react-router-dom";
import heroimg from "../../images/slider/profile.png";

import "./style.css";

const Hero1 = () => {
  return (
    <section className="wpo-hero-style-2" id="home">
      <div className="wpo-slide-wrap">
        <div className="container">
          <div className="row">
            <div className="col col-md-8 slide-caption">
              <h2 className="wow fadeInLeftSlow" data-wow-delay="1.0s">
                I’m <span>M. </span> Shariq
              </h2>
              <p className="wow fadeInUp" data-wow-delay="1.5s">
                Backend Developer
              </p>
              <div className="bg-social wow fadeInUp" data-wow-delay="2.0s">
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/muhammad-shariq-16897012b/"
                      target="_blank"
                    >
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://stackoverflow.com/users/11874142/muhammad-shariq"
                      target="_blank"
                    >
                      <i className="fa fa-stack-overflow"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/shariqx5" target="_blank">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="wpo-slide-right-img">
          <div
            className="slide-img wow fadeInRightSlow"
            data-wow-duration="2000ms"
          >
            <img src={heroimg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero1;
