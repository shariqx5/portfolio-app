import React from "react";

const SocialBr = () => {
  return (
    <div className="social-tab">
      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
          <div className="wpo-social-wrap">
            <div className="wpo-social-icon-5">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </div>
            <div className="wpo-social-text">
              <h2>Linkedin</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12  col-12">
          <div className="wpo-social-wrap">
            <div className="wpo-social-icon-2">
              <i className="fa fa-stack-overflow" aria-hidden="true"></i>
            </div>
            <div className="wpo-social-text">
              <h2>Stack</h2>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12d col-12">
          <div className="wpo-social-wrap">
            <div className="wpo-social-icon-7">
              <i className="fa fa-github"></i>
            </div>
            <div className="wpo-social-text">
              <h2>Github</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialBr;
