import React, { useEffect, useState } from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import "./style.css";
import "./hero-2.css";

import profolio1 from "../../images/project/rimattire.jpg";
import profolio3 from "../../images/protfolio/pinfood.png";
import profolio2 from "../../images/protfolio/signite.png";
import profolio4 from "../../images/protfolio/stepago.png";

import rimattireBanner from "../../images/rimattire-banner.png";
import stepagoBanner from "../../images/stepago-banner.png";
import signiteBanner from "../../images/signite.png";
import pinfoodBanner from "../../images/pinfood-banner.png";

const PortfolioSub = (props) => {
  const [portfolios, setPortfolios] = useState([]);
  const history = useHistory();

  useEffect(() => {
    setPortfolios([
      {
        id: 1,
        thumbnail: profolio1,
        banner: rimattireBanner,
        name: "Rimattire",
        description:
          "Rimattire is a USA-based startup focused on providing used tire and rim services to people moving on highways. Rimattire offers a subscription to stores & junkyards. Buyers can search Rim/Tire/Sellers nearest to their nearest location and can order tires/rims from multiple vendors at one time. Once completed the payment the app will reveal the direction and exact location to the buyer. This project was developed using Flutter & Laravel with MySQL. I have worked on this project on the backend side with front (react).  ",
        tagline: "A market place where users can buy new/used tires and rims.",
        images: [],
      },
      {
        id: 2,
        thumbnail: profolio4,
        banner: stepagoBanner,
        name: "Stepago",
        tagline: "A digital sigature application.",
        description:
          "Stepago is a consumer-focused app that aims to help a consumer in keeping their body healthy. Users can measure their daily steps while walking individually or in a group. With powerful chat & video calling options, they can make groups of people from anywhere in the world. In return, they get some rewards points offered by retailers. Stepago offers proximity marketing options to retailers. During walking, users may receive nearest shops offers/discounts. This application was developed on Java & PHP with PostgreSQL. I contributed to this application as a backend developer working on its users & offers module. ",
        images: [],
      },
      {
        id: 3,
        thumbnail: profolio3,
        banner: pinfoodBanner,
        name: "Pinfood",
        tagline: "A market place where users order their food online.",
        description:
          "Pinfood is a food ordering solution, aims to provide food to users from their nearest restaurant. Pinfood was developed especially for german people keeping in mind their values and culture. Therefore it has tried to keep the user experience as native as possible. This project includes an admin portal, merchant, user & delivery person apps. These apps bring the complete experience required for any food ordering solution with multiple payment options and a pre-order facility. Pinfood was developed in Laravel, React Native, Java, and Core PHP with MySQL. I have worked as a backend developer in this application, mainly working on cart & order modules. This project is going to be live soon in Germany.  ",
        images: [],
      },
      {
        id: 4,
        thumbnail: profolio2,
        banner: signiteBanner,
        name: "Signite",
        tagline: "A digital signature application.",
        description:
          "During a pandemic when everything was going remote, I realized that still, people used to go to offices, colleges, or universities just to sign the papers. For my Final Year Project, I had developed a component of digital signature. So, I thought it was the right time for its launch. I worked with my friends on this component and made it to use as a separate product. We developed this project on ReactJS & Node with MongoDB.",
        images: [],
      },
    ]);
  }, []);

  const showProjectDetails = (id) => {
    history.push({
      pathname: "/project/details",
      state: {
        details: portfolios.find((portfolio) => portfolio.id === id),
      },
    });
  };

  return (
    <div
      className={`wpo-protfolio-area section-padding ${props.subclass}`}
      id="portfolio"
    >
      <div className="container">
        <div className="col-12">
          <div className="section-title">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="wpo-protfolio-item">
              <div className="row">
                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="wpo-protfolio-left">
                    {portfolios.map((portfolio, index) => {
                      const { thumbnail, name, tagline } = portfolio;
                      if (index < 2) {
                        return (
                          <div className="wpo-protfolio-single">
                            <div className="wpo-protfolio-img">
                              <img src={thumbnail} alt="" />
                            </div>
                            <div className="wpo-protfolio-text">
                              <h2>{name || ""}</h2>
                              <span>{tagline || ""}</span>
                              <Link
                                onClick={() => showProjectDetails(portfolio.id)}
                              >
                                View Work
                              </Link>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
                  <div className="wpo-protfolio-right">
                    {portfolios.map((portfolio, index) => {
                      const { thumbnail, name, tagline } = portfolio;
                      if (index >= 2 && index < 4) {
                        return (
                          <div className="wpo-protfolio-single">
                            <div className="wpo-protfolio-img">
                              <img src={thumbnail} alt="" />
                            </div>
                            <div className="wpo-protfolio-text">
                              <h2>{name || ""}</h2>
                              <span>{tagline || ""}</span>
                              <Link
                                onClick={() => showProjectDetails(portfolio.id)}
                              >
                                View Work
                              </Link>
                            </div>
                          </div>
                        );
                      }
                    })}
                  </div>
                </div>
              </div>
              <div className="protfolio-btn">
                <Link to="/">See More Work...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(PortfolioSub);
