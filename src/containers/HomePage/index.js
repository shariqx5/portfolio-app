import React, { Fragment } from "react";
import Navbar from "../../components/Navbar";
import Hero1 from "../../components/Hero1";
import Exprience from "../../components/exprience";
import PortfolioSub from "../../components/porfolioSub";
import ContactArea from "../../components/ContactArea";
import Footer from "../../components/Footer";
import Logo from "../../images/logo.png";
import AboutWrap from "../../components/about";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero1 />
      <Exprience />
      <AboutWrap />
      <PortfolioSub />
      {/* <TestSlider/> */}
      <ContactArea />
      {/* <LatestBlog/> */}
      <Footer ftLogo={Logo} />
    </Fragment>
  );
};
export default HomePage;
