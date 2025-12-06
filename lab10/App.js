import React from "react";
import ProfileCard from "./ProfileCard";

function App() {
  return (
    <div
      style={{
        background: "#f5f5f5",
        minHeight: "100vh",
        paddingTop: "40px",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Профіль користувача
      </h1>
      <ProfileCard />
    </div>
  );
}

export default App;