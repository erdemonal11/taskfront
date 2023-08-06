import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeQ = ({ lang = "jsx" }) => {
  const [copy, setCopy] = useState(false);
  const codeString = `// App.js
  import React, { useState } from 'react';
  import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
  import axios from 'axios';
  import Login from './components/Login';
  import Logout from './components/Logout';
  import Favorites from './components/Favorites';
  import Rating from './components/Rating';
  const App = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [favorites, setFavorites] = useState([]);
    const [movies, setMovies] = useState([]);
    // Function to fetch movie data from the API
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/movie/popular',
          {
            params: {
              api_key: 'YOUR_TMDB_API_KEY',
            },
          }
        );
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };
    // Function to fetch user's favorite movies from the API
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/account/favorite/movies',
          {
            params: {
              api_key: 'YOUR_TMDB_API_KEY',
              session_id: 'YOUR_SESSION_ID',
            },
          }
        );
        setFavorites(response.data.results);
      } catch (error) {
        console.error('Error fetching favorites:', error);
      }
    };
    // Function to handle user login
    const handleLogin = () => {
      // Your login logic here
      setLoggedIn(true);
    };
    // Function to handle user logout
    const handleLogout = () => {
      // Your logout logic here
      setLoggedIn(false);
      setFavorites([]);
    };
    // Function to handle rating change for a movie
    const handleRatingChange = (movieId, newRating) => {
      // Your rating logic here
      // Update the user's rating for the movie with 'movieId' to 'newRating'
    };
    // Fetch movies and favorites when the component mounts
    useEffect(() => {
      fetchMovies();
      if (loggedIn) {
        fetchFavorites();
      }
    }, [loggedIn]);
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            {!loggedIn ? (
              <Login handleLogin={handleLogin} />
            ) : (
              <Logout handleLogout={handleLogout} />
            )}
          </Route>
          <Route path="/favorites">
            {loggedIn && <Favorites favorites={favorites} />}
          </Route>
          <Route path="/movies/:id">
            {loggedIn && (
              <Rating
                movies={movies}
                handleRatingChange={handleRatingChange}
              />
            )}
          </Route>
        </Switch>
      </Router>
    );
  };
  export default App;  
  `;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "2rem",
      }}
    >
      <p style={{ marginBottom: "1rem" }}></p>
      <div
        style={{
          maxWidth: "25rem",
          minWidth: "25rem",
          backgroundColor: "#3a404d",
          borderRadius: "0.5rem",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0.5rem 1rem",
            color: "white",
            fontSize: "0.75rem",
            alignItems: "center",
          }}
        >
          <p style={{ margin: 0 }}>Example code</p>
          {!copy ? (
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.25rem 0.5rem",
                backgroundColor: "#4a5568",
                border: "none",
                cursor: "pointer",
              }}
              onClick={() => {
                navigator.clipboard.writeText(codeString);
                setCopy(true);
                setTimeout(() => {
                  setCopy(false);
                }, 1000);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 3.293a1 1 0 010 1.414L8.414 13H11a1 1 0 010 2H7a1 1 0 01-1-1V9a1 1 0 011-1h1a1 1 0 011 1v2.586l9.293-9.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span style={{ fontSize: "10px", marginTop: "0.25rem" }}>
                Copy
              </span>
            </button>
          ) : (
            <span style={{ fontSize: "10px", marginTop: "0.25rem" }}>
              Copied!
            </span>
          )}
        </div>
        <SyntaxHighlighter
          language={lang}
          style={atomOneDark}
          customStyle={{
            padding: "1.25rem",
            whiteSpace: "pre-wrap",
            wordBreak: "break-all",
          }}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeQ;
