import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";

/**
 * PUBLIC_INTERFACE
 * App container for mobile todo manager (modern, minimal, light theme).
 * Structures page for 414x896px mobile viewport.
 */
function App() {
  // Theme toggle retained for demonstration; real apps would persist this
  const [theme, setTheme] = useState("light");
  // Basic local todos state, placeholder only
  const [todos] = useState([
    // { text: "Buy milk", completed: false },
    // { text: "Call mom", completed: true }
  ]);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
  };

  // Placeholder handler for adding todos – to be replaced with real logic
  const addTodo = () => {};

  return (
    <div
      className="App"
      style={{
        minHeight: "100vh",
        background: "#fff",
        padding: 0,
        margin: 0,
        boxSizing: "border-box"
      }}
    >
      <div
        className="todo-frame"
        style={{
          width: 414,
          height: 896,
          background: "#fff",
          margin: "0 auto",
          border: "1px solid #eee",
          borderRadius: 16,
          overflow: "hidden",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          position: "relative"
        }}
      >
        {/* Theme toggle only for demo */}
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          style={{
            position: "absolute",
            top: 18,
            right: 18,
            background: "#1976d2",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            padding: "10px 20px",
            fontSize: 14,
            fontWeight: 600,
            cursor: "pointer",
            zIndex: 4
          }}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        <Header />
        <TodoInput onAdd={addTodo} />
        <TodoList todos={todos} />
        <Footer />
      </div>
    </div>
  );
}
export default App;
