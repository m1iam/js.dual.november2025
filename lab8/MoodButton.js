import React, { useState } from "react";

function MoodButton() {
  const [mood, setMood] = useState("поки що нейтральний");

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "60px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Мій настрій сьогодні:</h2>
      <p style={{ fontSize: "24px" }}>{mood}</p>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          style={{
            background: "#28a745",
            border: "none",
            color: "white",
            padding: "8px 16px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => setMood("добрий:)")}
        >
          Добрий
        </button>

        <button
          style={{
            background: "#ffc107",
            border: "none",
            color: "white",
            padding: "8px 16px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => setMood("звичайний")}
        >
          Звичайний
        </button>

        <button
          style={{
            background: "#dc3545",
            border: "none",
            color: "white",
            padding: "8px 16px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
          onClick={() => setMood("поганий:(")}
        >
          Поганий
        </button>
      </div>
    </div>
  );
}

export default MoodButton;