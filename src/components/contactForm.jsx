import emailjs from "emailjs-com";
import React, { useState } from "react";
import "../App.css";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactUs() {
  const [isRecaptchaCompleted, setIsRecaptchaCompleted] = useState(false);

  const onChange = () => {
    setIsRecaptchaCompleted(true);
  };

  function sendEmail(e) {
    e.preventDefault();

    if (!isRecaptchaCompleted) {
      return; 
    }

    emailjs
      .sendForm(
        "service_tcp98ic",
        "template_v2fu6m5",
        e.target,
        "pk2saeiYyaD3MppC_"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    setIsRecaptchaCompleted(false);
  }

  return (
    <div>
      <div className="contact-container">
        <form onSubmit={sendEmail} className="contact-form">
          <span className="contacttext">Contact Me!</span>
        <p>For any possible questions or feedback you can contact me. Feel free to ask.You must complete the reCAPTCHA to submit the form</p>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                className="form-control input-field"
                placeholder="Name"
                name="name"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="email"
                className="form-control input-field"
                placeholder="Email Address"
                name="email"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                className="form-control input-field"
                placeholder="Subject"
                name="subject"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <textarea
                className="form-control input-field"
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
              ></textarea>
            </div>
          </div>
          <ReCAPTCHA
            sitekey="6LdsOIknAAAAACHXt9R5eX8eQvxu8muopSDp7F6K"
            onChange={onChange}
          />
          <br />
          <div className="form-row">
            <div className="form-group">
              <button className="button-2" type="submit" disabled={!isRecaptchaCompleted}>
                Send Message
              </button>
              
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
