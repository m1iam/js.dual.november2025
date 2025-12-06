import React from "react";
import MoodButton from "./MoodButton";

function App() {
  return (
    <div
      style={{
        background: "#f8f9fa",
        minHeight: "100vh",
        paddingTop: "40px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Мій настрій сьогодні 😎
      </h1>
      <MoodButton />
    </div>
  );
}

export default App;