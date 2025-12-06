import React from "react";
import TodoApp from "./TodoApp";

function App() {
  return (
    <div
      style={{
        background: "#f6f6f6",
        minHeight: "100vh",
        fontFamily: "Arial, sans-serif",
        paddingTop: "40px",
      }}
    >
      <TodoApp />
    </div>
  );
}

export default App;