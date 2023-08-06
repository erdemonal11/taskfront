import React from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CodeT from "./codeT.jsx";

const quiz4 = () => {
  const images = [
    {
      original: "movie1.png",
      thumbnail: "movie1.png",
    },
    {
      original: "movie4.png",
      thumbnail: "movie4.png",
    },
    {
      original: "movie3.png",
      thumbnail: "movie3.png",
    },
  ];
  return (
    <>
      <div className="video-container">
        <video className="video-background" autoPlay loop muted>
          <source src="/v1.mp4" type="video/mp4" />
        </video>
        <div className="header">Task IV</div>{" "}
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
          Project Structure: The project follows a typical React project
          structure created using Create React App. The main components of the
          project are the App component and the MoviePage component.{" "}
          <p>
            API Integration: The MoviePage component fetches movie information
            from an API. The API endpoint URL is provided in the fetch function
            inside the fetchMovie function. The component uses the fetch API to
            make a GET request to the API endpoint and retrieves the movie data.
            The movie data is stored in the component's state using the useState
            hook and updated with the retrieved data using setMovie. If there's
            an error during the API call, it is caught in the catch block, and
            an error message is logged.
          </p>{" "}
          <p>
            Rendering Movie Information: The MoviePage component renders the
            movie information once it is available. Initially, while the data is
            being fetched, a loading message is displayed. Once the movie data
            is available, the component renders the movie title, poster image,
            description, and release date. Component Composition: The App
            component serves as the entry point for the application and renders
            the MoviePage component. The MoviePage component is responsible for
            fetching and displaying the movie information.
          </p>{" "}
          <p>
            Development Server: The project includes a development server that
            can be started using npm start. The development server runs on
            http://localhost:3000 by default, and the movie page can be accessed
            from this URL.
          </p>
        </p>
        <CodeT /> <br />{" "}
        <p>
          In this sample code, the MovieApp component manages the movie data and
          search query using React's useState hook. It fetches movie data from
          The Movie Database API using the fetch function and updates the state
          with the fetched movies. The input field and button allow users to
          search for movies. When the form is submitted, the fetchMovies
          function is called to make an API call and retrieve the relevant movie
          data based on the search query. The fetched movie data is displayed as
          a list of movie titles using the map function on the movies array.
          Remember to replace YOUR_API_KEY in the API URL with your actual API
          key obtained from The Movie Database. This sample code provides a
          basic structure to create a movie app with API integration in React.
          You can customize and expand upon it by adding additional features,
          styling, and integrating more endpoints from the movie API.
        </p>
      </p>
      <br />
      <div className="quizbutto">
        <a
          href="https://www.youtube.com/watch?v=jc9_Bqzy2YQ&t=17s"
          target="_blank"
        >
          <button className="button-2">
            <img src="youtube.png" alt="youtube" className="buttoimage" />
          </button>
        </a>
        <a href="https://github.com/erdemonal11/movieapp" target="_blank">
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

export default quiz4;
