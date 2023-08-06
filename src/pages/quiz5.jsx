import React from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CodeZ from "./codeZ.jsx";

const quiz5 = () => {
  const images = [
    {
      original: "login1.png",
      thumbnail: "login1.png",
    },
    {
      original: "login2.png",
      thumbnail: "login2.png",
    },
    {
      original: "login3.png",
      thumbnail: "login3.png",
    },
  ];
  return (
    <>
      <div className="video-container">
        <video className="video-background" autoPlay loop muted>
          <source src="/v1.mp4" type="video/mp4" />
        </video>
        <div className="header">Task V</div>{" "}
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
          The LoginApp component is a functional component created using the
          useState hook from React. It manages the login/logout state, API key,
          and error message. The isLoggedIn state variable keeps track of the
          user's login status. If isLoggedIn is true, the user is considered
          logged in, and the welcome message and logout button are displayed. If
          isLoggedIn is false, the login form is displayed. The apiKey state
          variable holds the value entered by the user in the API key input
          field. The errorMessage state variable stores any error message
          related to invalid API keys. The handleApiKeyChange function is called
          whenever the user enters a value in the API key input field. It
          updates the apiKey state with the new value. The handleLogin function
          is triggered when the user clicks the "Login" button.
        </p>{" "}
        <p>
          {" "}
          In this sample code, it compares the entered API key (apiKey) with a
          hardcoded value ('YOUR_API_KEY') for simplicity. In a real-world
          scenario, you would make an API call to validate the API key against
          your authentication endpoint. If the API key is valid, the user is
          considered logged in (isLoggedIn is set to true), and the error
          message is cleared. If the API key is invalid, the user is considered
          logged out (isLoggedIn is set to false), and the error message is set
          to "Invalid API key". The handleLogout function is triggered when the
          user clicks the "Logout" button. It sets the isLoggedIn state to
          false, clears the apiKey, and resets the errorMessage.
        </p>{" "}
        <p>
          The JSX markup within the return statement determines the UI to be
          rendered based on the login/logout state. If the user is logged in
          (isLoggedIn is true), a welcome message and logout button are
          displayed. Otherwise, a login form is displayed with an input field
          for the API key, a login button, and an error message if applicable.
          You would need to replace 'YOUR_API_KEY' with your actual API key
          obtained from your authentication endpoint. Additionally, you need to
          implement the actual authentication logic in the handleLogin function
          by making the appropriate API call to validate the API key.
        </p>
      </p>
      <br />
      <CodeZ />
      <p className="font">
        In this sample code, the LoginApp component manages the login/logout
        state and the API key using React's useState hook. The user enters their
        API key in an input field. On login, the app checks if the API key is
        valid by making an API call to the authentication endpoint. In this
        sample code, the check is done locally with a hardcoded API key for
        simplicity. You would need to replace 'YOUR_API_KEY' with your actual
        API key and implement the actual authentication logic in the handleLogin
        function, making the appropriate API call to validate the key. If the
        API key is valid, the user is considered logged in (isLoggedIn is set to
        true) and a logout button is displayed. If the key is invalid, an error
        message is shown. On logout, the user is considered logged out
        (isLoggedIn is set to false), and the API key and error message are
        cleared. This sample code provides a basic structure for a login/logout
        app with API-based authentication. You would need to implement the
        authentication logic with your API endpoint and modify the code to fit
        your specific authentication requirements.
      </p>
      <br />
      <div className="quizbutto">
        <a
          href="https://www.youtube.com/watch?v=sRzbFa8gYFI&t=240s"
          target="_blank"
        >
          <button className="button-2">
            <img src="youtube.png" alt="youtube" className="buttoimage" />
          </button>
        </a>
        <a href="https://github.com/erdemonal11/login" target="_blank">
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

export default quiz5;
