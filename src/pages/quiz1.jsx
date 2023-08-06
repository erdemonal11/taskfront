import React from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import "../App.css";
import CodeM from"./codeM.jsx"

const quiz1 = () => {
  const images = [
    {
      original: "cv1.png",
      thumbnail: "cv1.png",
    },
    {
      original: "cv2.png",
      thumbnail: "cv2.png",
    },
    {
      original: "cv3.png",
      thumbnail: "cv3.png",
    },
    {
      original: "cv4.png",
      thumbnail: "cv4.png",
    },
  ];
  return (
    <>
      <div className="video-container">
        <video className="video-background" autoPlay loop muted>
          <source src="/v1.mp4" type="video/mp4" />
        </video>
        <div className="header">Task I</div>{" "}
      </div>
      <div>
        <br />{" "}
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
      <div>
      <p>Create a new folder on your computer and name it "resume".Inside the "resume" folder, create a new file named "index.html".Open "index.html" with a text editor and add the provided HTML code.</p>
      
      <p>Save the file and create another file inside the "resume" folder named "styles.css".Open "styles.css" with a text editor and add the provided CSS code.Save the "styles.css" file.Open the "index.html" file in a web browser to see your resume webpage.</p>

    </div>
        <CodeM lang="html"/>
      </p>
      <br />
      <div className="quizbutto">
        <a href="https://www.youtube.com/watch?v=hnjHCmaUVPg" target="_blank">
          <button className="button-2">
            <img src="youtube.png" alt="youtube" className="buttoimage" />
          </button>
        </a>
        <a href="https://github.com/erdemonal11/cv" target="_blank">
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

export default quiz1;
