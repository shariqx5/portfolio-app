import React, { Component } from "react";
import EmailJS from "emailjs-com";

EmailJS.init("user_GTr3Bsyoil3kmE9FtsmEE");

class ContactForm extends Component {
  state = {
    isEmailSent: false,
    name: "",
    email: "",
    subject: "",
    lastname: "",
    events: "",
    notes: "",
    message: "",
    error: {},
  };

  changeHandler = (e) => {
    const error = this.state.error;
    error[e.target.name] = "";

    this.setState({
      [e.target.name]: e.target.value,
      error,
    });
  };

  subimtHandler = (e) => {
    console.log(`event is calling`);
    e.preventDefault();

    const { name, email, subject, lastname, message, error } = this.state;

    if (name === "") {
      error.name = "Please enter your name";
    }
    if (email === "") {
      error.email = "Please enter your email";
    }
    if (subject === "") {
      error.subject = "Please enter your subject";
    }
    if (lastname === "") {
      error.lastname = "Please enter your Lastname";
    }
    if (message === "") {
      error.message = "Please enter your message";
    }

    if (error) {
      this.setState({
        error,
      });
    }
    if (
      error.name === "" &&
      error.email === "" &&
      error.message === "" &&
      error.lastname === "" &&
      error.subject === ""
    ) {
      // submit your from here
      this.sendEmail();
    }
  };

  sendEmail = () => {
    const { name, email, message, subject } = this.state;

    const serviceID = process.env.REACT_APP_SERVICE_ID;
    const templateID = process.env.REACT_APP_TEMPLATE_ID;

    const template = {
      name,
      email,
      message,
      subject,
      to_name: "Mohammad Shariq",
    };

    EmailJS.send(serviceID, templateID, template)
      .then((response) => {
        if (response.status) {
          this.setState({
            isEmailSent: true,
            name: "",
            lastname: "",
            email: "",
            subject: "",
            events: "",
            notes: "",
            message: "",
            error: {},
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { name, email, subject, lastname, error, message, isEmailSent } =
      this.state;

    return (
      <form onSubmit={this.subimtHandler} className="form">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <div className="form-field">
              <input
                value={name}
                onChange={this.changeHandler}
                type="text"
                name="name"
                placeholder="Name"
              />
              <p>{error.name ? error.name : ""}</p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="form-field">
              <input
                value={lastname}
                onChange={this.changeHandler}
                type="text"
                name="lastname"
                placeholder="Lastname"
              />
              <p>{error.lastname ? error.lastname : ""}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-field">
              <input
                onChange={this.changeHandler}
                value={email}
                type="email"
                name="email"
                placeholder="Email"
              />
              <p>{error.email ? error.email : ""}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-field">
              <input
                onChange={this.changeHandler}
                value={subject}
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <p>{error.subject ? error.subject : ""}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-field">
              <textarea
                name="message"
                placeholder="Message"
                value={message}
                onChange={this.changeHandler}
              ></textarea>
              <p>{error.message ? error.message : ""}</p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-submit">
              <button
                type="submit"
                className={`${
                  isEmailSent ? "theme-btn" : "theme-btn disabled"
                }`}
                disabled={isEmailSent}
              >
                Send Message
              </button>
              {isEmailSent && <p>Email Sent.</p>}
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default ContactForm;
