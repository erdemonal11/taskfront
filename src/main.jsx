import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home.jsx';
import Quiz1 from './pages/quiz1.jsx';
import Quiz2 from './pages/quiz2.jsx';
import Quiz3 from './pages/quiz3.jsx';
import Quiz4 from './pages/quiz4.jsx';
import Quiz5 from './pages/quiz5.jsx';
import Quiz6 from './pages/quiz6.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "quiz-1",
    element: <Quiz1 />
  },
  {
    path: "quiz-2",
    element: <Quiz2 />
  },
  {
    path: "quiz-3",
    element: <Quiz3 />
  },
  {
    path: "quiz-4",
    element: <Quiz4 />
  },
  {
    path: "quiz-5",
    element: <Quiz5 />
  },
  {path: "quiz-6",
  element: <Quiz6 />
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
