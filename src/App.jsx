import React from "react";
import "./App.css";
import ContactUs from "./components/contactForm";
import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <div className="font">
        <div className="video-container">
          <video className="video-background" autoPlay loop muted>
            <source src="/v1.mp4" type="video/mp4" />
          </video>
          <div className="header">-task-for-Front-</div>
        </div>
        <br />
        <span className="contacttext">Hello!</span> This website has been created to provide sample project templates, content and guidance to assist those new to Front-End development. The purpose of the site is to provide support to people who have a basic knowledge of Front-End development but need guidance to practice and create projects.{" "}
        <br /> <br />
        <a
          href="https://learn.microsoft.com/en-us/windows/dev-environment/javascript/react-on-windows"
          target="_blank"
        >
          [React Installation]
        </a>
        <br />
        <br />
        <div className="grid-container">
          <button className="button-2 item1">
            <Link to={"/quiz-1"}>
              <h3>
                Task I <br />
                Design CV
              </h3>
              <p>
                <img src="1.png" alt="html" className="icons" />{" "}
                <img src="2.png" alt="css" className="icons" />
              </p>
            </Link>
          </button>
          <button className="button-2 item2">
            <Link to={"/quiz-2"}>
              <h3>
                Task II <br />
                Design Counter
              </h3>
              <img src="3.png" alt="react" className="icons" />
            </Link>
          </button>
          <button className="button-2 item3">
            <Link to={"/quiz-3"}>
              <h3>
                Task III <br />
                Design ToDo App
              </h3>
              <img src="1.png" alt="html" className="icons" />{" "}
              <img src="2.png" alt="css" className="icons" />{" "}
              <img src="3.png" alt="react" className="icons" />
            </Link>
          </button>
          <button className="button-2 item4">
            <Link to={"/quiz-4"}>
              <h3>
                Task IV <br />
                Design Movie Page
              </h3>
              <img src="1.png" alt="html" className="icons" />{" "}
              <img src="2.png" alt="css" className="icons" />{" "}
              <img src="3.png" alt="react" className="icons" />
            </Link>
          </button>
          <button className="button-2 item5">
            <Link to={"/quiz-5"}>
              <h3>
                Task V <br />
                Login-Logout
              </h3>
              <img src="3.png" alt="react" className="icons" />{" "}
              <img src="2.png" alt="css" className="icons" />
            </Link>
          </button>
          <button className="button-2 item6">
            <Link to={"/quiz-6"}>
              <h3>
                Task VI <br />
                Movie App Advanced
              </h3>
              <img src="3.png" alt="react" className="icons" />{" "}
              <img src="2.png" alt="css" className="icons" />
            </Link>
          </button>
        </div>{" "}
        <br />
        <br />
        <br />
        <br />
        <br />
        <p className="contacttext"></p>
        <ContactUs />
        <p></p>
      </div>
      <br />
    </>
  );
}

export default App;
