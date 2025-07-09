import React, { useState } from "react";

// PUBLIC_INTERFACE
function TodoInput({ onAdd }) {
  /**
   * Renders the 'Add todo' input section.
   * @param {function} onAdd - Function to call when user adds a todo.
   */
  const [value, setValue] = useState("");

  const handleInput = (e) => setValue(e.target.value);

  const handleAdd = () => {
    if (!value.trim()) return;
    if (onAdd) onAdd(value.trim());
    setValue("");
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px 16px 16px 16px",
        background: "#fff",
        borderBottom: "1px solid #eef0f1",
        gap: 12
      }}
      className="todo-input-section"
    >
      <input
        type="text"
        placeholder="Add a new todo"
        value={value}
        onChange={handleInput}
        onKeyDown={onKeyDown}
        style={{
          flex: 1,
          fontSize: 18,
          padding: "12px 14px",
          border: "1.5px solid #DFDFDF",
          borderRadius: 8,
          background: "#f9f9f9",
          outline: "none"
        }}
        id="todo-input"
        autoComplete="off"
        aria-label="Add a new todo"
        disabled={!onAdd}
      />
      <button
        style={{
          padding: "12px 18px",
          fontSize: 16,
          borderRadius: 8,
          border: "none",
          background: "#1976d2",
          color: "#fff",
          fontWeight: 600,
          cursor: "pointer",
          transition: "background 0.2s"
        }}
        id="add-todo-btn"
        onClick={handleAdd}
        aria-label="Add todo"
        disabled={!onAdd || !value.trim()}
      >
        Add
      </button>
    </section>
  );
}

export default TodoInput;
