import React from "react";

export const Footer = () => {
  let footerStyle = {
    // adding style
    position: "relative",
    top: "100vh",
    width: "100%",
  };
  return (
    <footer className="bg-dark text-light p-3" style={footerStyle}>
      <p className="text-center">copyright &copy; MyTodosList.com</p>
    </footer>
  );
};
