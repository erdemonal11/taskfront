import React, { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const CodeS = () => {
  const [copy, setCopy] = useState(false);
  const codeString = `import React, { useState } from 'react';
  function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
  
    const handleInputChange = (event) => {
      setNewTodo(event.target.value);
    };
    const handleFormSubmit = (event) => {
      event.preventDefault();
      if (newTodo.trim() !== '') {
        setTodos([...todos, newTodo.trim()]);
        setNewTodo('');
      }
    };
    const handleTodoDelete = (index) => {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
    };
    return (
      <div>
        <h1>Todo App</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            placeholder="Enter a new todo"
          />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo}
              <button onClick={() => handleTodoDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default TodoApp;`;

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
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M16.707 3.293a1 1 0 010 1.414L8.414 13H11a1 1 0 010 2H7a1 1 0 01-1-1V9a1 1 0 011-1h1a1 1 0 011 1v2.586l9.293-9.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span style={{ fontSize: "10px", marginTop: "0.25rem" }}>Copy</span>
            </button>
          ) : (
            <span style={{ fontSize: "10px", marginTop: "0.25rem" }}>Copied!</span>
          )}
        </div>
        <SyntaxHighlighter
          language="javascript"
          style={atomOneDark}
          customStyle={{ padding: "1.25rem", whiteSpace: "pre-wrap", wordBreak: "break-all" }}
          wrapLongLines={true}
        >
          {codeString}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeS;
