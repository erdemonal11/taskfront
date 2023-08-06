import React from "react";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import CodeS from "./codeS.jsx";

const quiz3 = () => {
  const images = [
    {
      original: "todo1.png",
      thumbnail: "todo1.png",
    },
    {
      original: "todo2.png",
      thumbnail: "todo2.png",
    },
    {
      original: "todo3.png",
      thumbnail: "todo3.png",
    },
    {
      original: "todo4.png",
      thumbnail: "todo4.png",
    },
  ];
  return (
    <>
      <div className="video-container">
        <video className="video-background" autoPlay loop muted>
          <source src="/v1.mp4" type="video/mp4" />
        </video>
        <div className="header">Task III</div>{" "}
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
      <br />{" "}
      <p className="font">
        {" "}
        <CodeS /> <br /> <p>This JSX code represents the main component of the Todo app.
        It includes an input field and a list to display todos.The
        handleInputChange function is called whenever the input field value
        changes, updating the newTodo state accordingly.The handleFormSubmit
        function is triggered when the form is submitted, adding the new todo to
        the todos array if it's not empty.</p> <p>After submitting, the input field is
        cleared by resetting the newTodo state. The handleTodoDelete function is
        responsible for removing a todo from the todos array when the "Delete"
        button is clicked.It filters the todos array and creates a new array
        excluding the todo at the specified index. The JSX markup defines the
        Todo App UI structure. It consists of a form with an input field and a
        submit button. The value of the input field is controlled by the newTodo
        state.</p> <p> When the form is submitted, the handleFormSubmit function is
        called. Below the form, the todos are rendered as list items using the
        map function on the todos array. Each todo is displayed as text within
        an li element, and a "Delete" button is associated with each todo. When
        the "Delete" button is clicked, the handleTodoDelete function is called
        with the corresponding index of the todo. Remember to use this TodoApp
        component within your React application's main component or any other
        component where you want to include the Todo App. You can further
        customize the styles, add more functionality, or integrate this
        component into your existing React application to create a complete Todo
        app.</p>   
      </p>
      <br />
      <div className="quizbutto">
        <a href="https://www.youtube.com/watch?v=-l0FEONO-cM" target="_blank">
          <button className="button-2">
            <img src="youtube.png" alt="youtube" className="buttoimage" />
          </button>
        </a>
        <a
          href="https://github.com/erdemonal11/todo-list-with-localStorage"
          target="_blank"
        >
          <button className="button-2">
            <img src="github.png" alt="github" className="buttoimage" />
          </button>
        </a>
      </div>
      <br />
      <br />
      <br />
      <button className="button-2">
        <Link to={"/"}>Go Back</Link>
      </button>
    </>
  );
};

export default quiz3;
