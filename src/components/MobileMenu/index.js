import React, { Component } from "react";
import { Collapse, CardBody, Card } from "reactstrap";
import { Link } from "react-scroll";
import { Link as BrowserLink } from "react-router-dom";
import "./style.css";

const menus = [
  {
    id: 0,
    title: "Home",
    link: "home",
  },
  {
    id: 2,
    title: "About",
    link: "about",
  },
  {
    id: 3,
    title: "Portfolio",
    link: "portfolio",
  },
  {
    id: 4,
    title: "Contact",
    link: "contact",
  },
];

export default class MobileMenu extends Component {
  state = {
    isMenuShow: false,
    isOpen: 0,
  };

  menuHandler = () => {
    this.setState({
      isMenuShow: !this.state.isMenuShow,
    });
  };

  setIsOpen = (id) => () => {
    this.setState({
      isOpen: id === this.state.isOpen ? 0 : id,
    });
  };

  componentDidMount() {
    const { showMenu } = this.props;

    if (showMenu === false) {
      this.setState({
        isMenuShow: false,
      });
    }
  }

  render() {
    const { isMenuShow, isOpen } = this.state;
    const { showMenu } = this.props;

    return (
      <div>
        <div className={`mobileMenu ${isMenuShow ? "show" : ""}`}>
          {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}
          {showMenu && (
            <ul className="responsivemenu">
              {menus.map((item) => {
                return (
                  <li key={item.id}>
                    {item.submenu ? (
                      <p onClick={this.setIsOpen(item.id)}>
                        {item.title}
                        {item.submenu ? (
                          <i
                            className="fa fa-angle-right"
                            aria-hidden="true"
                          ></i>
                        ) : (
                          ""
                        )}
                      </p>
                    ) : (
                      <Link to={item.link} spy smooth>
                        {item.title}
                      </Link>
                    )}
                    {item.submenu ? (
                      <Collapse isOpen={item.id === isOpen}>
                        <Card>
                          <CardBody>
                            <ul>
                              {item.submenu.map((submenu) => (
                                <li key={submenu.id}>
                                  <Link
                                    activeClass="active"
                                    to={submenu.link}
                                    spy
                                    smooth
                                  >
                                    {submenu.title}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </CardBody>
                        </Card>
                      </Collapse>
                    ) : (
                      ""
                    )}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {showMenu && (
          <div className="showmenu" onClick={this.menuHandler}>
            <i className="fa fa-bars" aria-hidden="true"></i>
          </div>
        )}
      </div>
    );
  }
}
