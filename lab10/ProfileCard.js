import React, { useState } from "react";

function ProfileCard() {
  const [isOnline, setIsOnline] = useState(false);

  const toggleStatus = () => setIsOnline(!isOnline);

  return (
    <div
      style={{
        background: "#ffffff",
        borderRadius: "12px",
        padding: "25px",
        textAlign: "center",
        width: "300px",
        margin: "60px auto",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        border: isOnline ? "2px solid #28a745" : "2px solid #dc3545",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Іконка користувача (SVG) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={isOnline ? "#28a745" : "#6c757d"}
        width="100px"
        height="100px"
        style={{
          marginBottom: "10px",
          background: "#f1f1f1",
          borderRadius: "50%",
          padding: "10px",
        }}
      >
        <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 
        2.239-5 5 2.239 5 5 5zm0 2c-3.33 0-10 
        1.667-10 5v3h20v-3c0-3.333-6.67-5-10-5z" />
      </svg>

      <h2 style={{ marginTop: "5px" }}>Олександр</h2>
      <p style={{ color: "#555" }}>Frontend Developer • React | JavaScript</p>

      <p
        style={{
          fontWeight: "bold",
          color: isOnline ? "#28a745" : "#dc3545",
          marginBottom: "15px",
        }}
      >
        Статус: {isOnline ? "Online" : "Offline"}
      </p>

      <button
        onClick={toggleStatus}
        style={{
          background: isOnline ? "#dc3545" : "#28a745",
          border: "none",
          padding: "10px 18px",
          color: "white",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        {isOnline ? "Вимкнути статус" : "Увімкнути статус"}
      </button>
    </div>
  );
}

export default ProfileCard;