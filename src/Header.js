import React from "react";

const styles = {
  background: "blue",
  textAlign: "center",
  margin: "auto",
  border: "3px solid blue",
  borderRadius: "20px",
  padding: "20px",
};

function Header() {
  return (
    <div style={styles}>
      <h1>Employee Directory</h1>
    </div>
  );
}

export default Header;