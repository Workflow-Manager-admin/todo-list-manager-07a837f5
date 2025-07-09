import React from "react";

// PUBLIC_INTERFACE
function Footer() {
  /**
   * Minimal footer for the TODO app.
   * Placeholder for future features/extensions.
   */
  return (
    <footer
      style={{
        width: "100%",
        padding: "20px 0",
        textAlign: "center",
        color: "#babebe",
        background: "#fff",
        borderTop: "1px solid #eef0f1",
        fontSize: 15,
        letterSpacing: "0.4px",
        fontWeight: "400"
      }}
      role="contentinfo"
    >
      <span>Made with <span style={{color: "#1976d2"}}>React</span> · Placeholder Footer</span>
    </footer>
  );
}

export default Footer;
