import React, { Fragment, useEffect, useState } from "react";
import { withRouter, useLocation, useHistory } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Breadcrumbs from "../../components/Breadcrumbs";
import Footer from "../../components/Footer";
import ProjectSingle from "../../components/ProjectSingle";
import Logo from "../../images/logo.png";

const ProjectDetails = (props) => {
  const [details, setDetails] = useState({});
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const { state = {} } = location;
    const { details = {} } = state;

    if (Object.entries(details).length === 0) {
      history.goBack();
    }

    setDetails(details);
  }, [history, location, props]);

  return (
    <Fragment>
      <Navbar showMenu={false} showGoBackButton />
      <Breadcrumbs pageTitle={details.name || ""} pageSub={"Project Details"} />
      <ProjectSingle {...details} />
      <Footer ftLogo={Logo} showMainFooter={false} />
    </Fragment>
  );
};
export default withRouter(ProjectDetails);
