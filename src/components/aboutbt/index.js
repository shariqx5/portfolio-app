import React from "react";
import { Link } from "react-router-dom";
import cv from "../../files/cv.pdf";
import "./style.css";

import abimg from "../../images/about/about.c07f3d2b.png";

const Abmain = () => {
  const downloadCv = () => {
    const link = document.createElement("a");
    link.href = cv;
    document.body.append(link);

    link.download = "resume";

    link.click();

    document.body.removeChild(link);
  };

  return (
    <div className="wpo-about-item">
      <div className="row">
        <div className="col-lg-6">
          <div className="wpo-about-img">
            <img src={abimg} alt="" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="wpo-about-text">
            <h2>I create products not just art</h2>
            <p>
              Self-taught full stack web developer with proficiency in node.js,
              react & PHP. I have experience in designing scalable software,
              implementing best practices, and writing clean code. In the last
              1.5 years, I have worked on diverse projects that include
              Management & Government Systems, Food Ordering & eCommerce
              Solutions. Thousands of people from Pakistan, Australia, and the
              USA have used these solutions that ultimately have increased my
              passion for developing more software.
            </p>
            <Link onClick={downloadCv} className="theme-btn" download>
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Abmain;
