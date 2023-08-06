import React from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../App.css";
import CodeX from"./codeX.jsx"

const quiz2 = () => {
  const images = [
    {
      original: "count1.png",
      thumbnail: "count1.png",
    },
    {
      original: "count2.png",
      thumbnail: "count2.png",
    },
    {
      original: "count3.png",
      thumbnail: "count3.png",
    },
  ];
  return (
    <>
      <div className="video-container">
        <video className="video-background" autoPlay loop muted>
          <source src="/v1.mp4" type="video/mp4" />
        </video>
        <div className="header">Task II</div>{" "}
      </div>
      <br />
      <div>
        {" "}
        <ImageGallery
          items={images}
          showPlayButton={true}
          showFullscreenButton={true}
          slideInterval={1000}
          slideOnThumbnailOver={true}
          showIndex={true}
        />
      </div>{" "}
      <br />{" "}
      <p className="font">
     <p> Step 1: Set up a new React project using Create React App following the
        instructions mentioned earlier.Step 2: Open the project in your code
        editor and navigate to the src folder.Step 3: Replace the content of
        App.js with the following code:</p> <p></p>  <p></p> <CodeX/> <br /> <p>This code sets up a functional component
        App that manages the state of a counter using the useState hook. The
        count variable holds the current count value, and setCount is used to
        update it. The increment function increases the count by 1 when the
        "Increment" button is clicked, and the decrement function decreases the
        count by 1 when the "Decrement" button is clicked. The count value is
        displayed using the p element, and the buttons trigger the respective
        functions when clicked. Save the file, and when you run your React
        application with npm start, you should see the counter app rendered on
        the page with the initial count value of 0. Clicking the buttons will
        increment or decrement the count accordingly. Feel free to style the app
        or modify it further to suit your needs. Good luck with your counter
        app!</p>  
      </p>
      <br />
      <div className="quizbutto">
        <a
          href="https://www.youtube.com/watch?v=Jh1Wo6ZhZm8&t=157s"
          target="_blank"
        >
          <button className="button-2">
            <img src="youtube.png" alt="youtube" className="buttoimage" />
          </button>
        </a>
        <a
          href="https://github.com/erdemonal11/Counter-App-with-Desired-Input"
          target="_blank"
        >
          <button className="button-2">
            <img src="github.png" alt="github" className="buttoimage" />
          </button>
        </a>
      </div>
      <br />
      <br />
      <button className="button-2">
        <Link to={"/"}>Go Back</Link>
      </button>
    </>
  );
};

export default quiz2;
