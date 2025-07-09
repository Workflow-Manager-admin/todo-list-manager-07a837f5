import React from "react";

// PUBLIC_INTERFACE
function TodoList({ todos }) {
  /**
   * Renders todo items in a styled list.
   * @param {Array<{text: string, completed: boolean}>} todos - Array of todo objects.
   */
  return (
    <ul
      className="todo-list"
      style={{
        listStyle: "none",
        margin: 0,
        padding: "24px 16px",
        overflowY: "auto",
        flex: "1 1 auto",
        background: "#fafcff",
        minHeight: 200,
        maxHeight: "calc(100vh - 340px)"
      }}
      id="todo-list"
      aria-live="polite"
    >
      {todos.length === 0 && (
        <li
          style={{
            background: "#fff",
            padding: "16px 12px",
            borderRadius: 8,
            color: "#888",
            textAlign: "center"
          }}
        >
          No todos yet.
        </li>
      )}
      {todos.map((todo, idx) => (
        <li
          key={idx}
          className={todo.completed ? "completed" : ""}
          style={{
            background: todo.completed ? "#eee" : "#fff",
            color: todo.completed ? "#aaa" : "#121212",
            marginBottom: 12,
            padding: "16px 12px",
            borderRadius: 8,
            fontSize: 18,
            display: "flex",
            alignItems: "center",
            gap: 10,
            justifyContent: "space-between",
            textDecoration: todo.completed ? "line-through" : "none",
            boxShadow: "0 1px 4px rgba(40,36,89,0.03)"
          }}
        >
          <span>{todo.text}</span>
          <span>
            {/* Action placeholders - for future extension */}
            <button
              style={{
                background: "#ff9800",
                color: "white",
                border: "none",
                borderRadius: 6,
                padding: "5px 10px",
                fontSize: 14,
                cursor: "pointer",
                marginRight: 4,
                opacity: 0.7
              }}
              disabled
              aria-label="Complete (not implemented)"
            >
              Complete
            </button>
            <button
              style={{
                background: "#ff6363",
                color: "white",
                border: "none",
                borderRadius: 6,
                padding: "5px 10px",
                fontSize: 14,
                cursor: "pointer",
                opacity: 0.7
              }}
              disabled
              aria-label="Delete (not implemented)"
            >
              Delete
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
