import React from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CodeQ from "./codeQ.jsx";

const quiz6 = () => {
  const images = [
    {
      original: "adv1.png",
      thumbnail: "adv1.png",
    },
    {
      original: "adv2.png",
      thumbnail: "adv2.png",
    },
    {
      original: "adv3.png",
      thumbnail: "adv3.png",
    },
    {
      original: "adv4.png",
      thumbnail: "adv4.png",
    },
    {
      original: "adv5.png",
      thumbnail: "adv5.png",
    },
  ];
  return (
    <>
      <div className="video-container">
        <video className="video-background" autoPlay loop muted>
          <source src="/v1.mp4" type="video/mp4" />
        </video>
        <div className="header">Task VI</div>{" "}
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
      <br />
      <p className="font">
        {" "}
        <p>
          {" "}
          use the useState hook to manage the state of loggedIn, favorites, and
          movies. The fetchMovies function fetches movie data from the TMDb API
          using Axios and updates the movies state. The fetchFavorites function
          fetches the user's favorite movies from the TMDb API using Axios and
          updates the favorites state. The session_id parameter should be
          replaced with the user's session ID obtained after login (not shown in
          the example). The handleLogin function sets the loggedIn state to
          true, simulating a successful login. You should implement your actual
          login logic here. The handleLogout function sets the loggedIn state to
          false and clears the favorites state when the user logs out. The
          handleRatingChange function is a placeholder for your rating logic. It
          should be implemented to update the user's rating for a movie when the
          user rates a movie. The useEffect hook is used to fetch movies and
          favorites when the component mounts, and whenever loggedIn changes.
          The Router, Route, and Switch components are from the react-router-dom
          package to handle routing and rendering components based on the URL
          path. The App component renders different components based on the
          user's login status and the URL path. 
        </p>{" "}
        <p>
          {" "}
          Please note that this example
          demonstrates the structure and flow of a React film website with the
          mentioned features. For a fully functional website, you need to
          implement the actual login/logout logic, handle user favorites, and
          integrate the rating system with your backend to store user ratings
          and session IDs securely.
        </p>{" "}
      </p>
      <br />
      <CodeQ />
      <br />
      <div className="quizbutto">
        <a href="https://www.youtube.com/watch?v=IJYrrQW775g" target="_blank">
          <button className="button-2">
            <img src="youtube.png" alt="youtube" className="buttoimage" />
          </button>
        </a>
        <a href="https://github.com/erdemonal11/" target="_blank">
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

export default quiz6;
