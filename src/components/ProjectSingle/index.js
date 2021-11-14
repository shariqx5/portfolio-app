import React from "react";
import "./style.css";

const ProjectSingle = (props) => {
  const { banner, description, images = [] } = props;

  return (
    <div className="wpo-project-details-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="wpo-minimal-wrap">
              <div className="wpo-minimal-img">
                <img src={banner} alt="" />
              </div>
            </div>
            {/* <div className="wpo-project-details-list">
                            <div className="row">
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text">
                                        <span>Client Name</span>
                                        <h2>Robert William</h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text-3">
                                        <span>Project Value</span>
                                        <h2>$500</h2>
                                    </div>
                                </div>
                                <div className="co-l-lg-4 col-md-4 col-sm-6 col-12">
                                    <div className="wpo-project-details-text">
                                        <span>Date</span>
                                        <h2>25 Dec 2020</h2>
                                    </div>
                                </div>
                            </div>
                        </div> */}
            <div className="wpo-p-details-section">
              <p>{description || ""}</p>
              {/* <div className="row">
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="wpo-p-details-img">
                    <img src={proj2} alt="" />
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 col-12">
                  <div className="wpo-p-details-img">
                    <img src={proj3} alt="" />
                  </div>
                </div>
              </div> */}
            </div>
            {/* <div className="wpo-p-details-quote">
              <p>
                Sure there isn't anything embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to
                repeat predefined chunks as necessary net Essential book for
                you.{" "}
              </p>
              <span>Robert Luee Happy</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingle;
