import React from "react";

// PUBLIC_INTERFACE
function Header() {
  /**
   * Renders the top header with the application title.
   * Modern, minimal, accessible.
   */
  return (
    <header
      style={{
        padding: "32px 0 16px 0",
        fontSize: 32,
        fontWeight: "bold",
        letterSpacing: "0.5px",
        color: "#1a1a1a",
        background: "#fff",
        borderBottom: "1px solid #eef0f1",
        textAlign: "center"
      }}
      role="banner"
    >
      TODO Manager
    </header>
  );
}

export default Header;
