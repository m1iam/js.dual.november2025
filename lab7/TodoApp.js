import React, { useState, useEffect } from "react";

function TodoApp() {
  // === 1. Читання з localStorage при старті ===
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [text, setText] = useState("");

  // === 2. Запис у localStorage при зміні tasks ===
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // === 3. Додавання нового завдання ===
  const addTask = () => {
    if (text.trim() === "") return;
    setTasks([...tasks, { text, done: false }]);
    setText("");
  };

  // === 4. Перемикання виконаного завдання ===
  const toggleTask = (index) => {
    const updated = tasks.map((task, i) =>
      i === index ? { ...task, done: !task.done } : task
    );
    setTasks(updated);
  };

  // === 5. Видалення завдання ===
  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  // === 6. Верстка компонента ===
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        background: "#fff",
        borderRadius: "12px",
        padding: "30px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Мої завдання ✅
      </h2>

      {/* Поле вводу + кнопка */}
      <div style={{ display: "flex", gap: "8px" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Нове завдання..."
          style={{
            flex: 1,
            padding: "8px 12px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={addTask}
          style={{
            padding: "8px 16px",
            background: "#007bff",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Додати
        </button>
      </div>

      {/* Список завдань */}
      <ul style={{ marginTop: "20px", listStyle: "none", padding: 0 }}>
        {tasks.length === 0 && (
          <p style={{ color: "#777", textAlign: "center" }}>
            Поки немає завдань 🙃
          </p>
        )}
        {tasks.map((task, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "8px",
              background: task.done ? "#d4edda" : "#f8f9fa",
              padding: "8px 12px",
              borderRadius: "8px",
              textDecoration: task.done ? "line-through" : "none",
            }}
          >
            <span
              style={{ cursor: "pointer" }}
              onClick={() => toggleTask(index)}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              style={{
                background: "#dc3545",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                padding: "4px 8px",
                cursor: "pointer",
              }}
            >
              🗑
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;