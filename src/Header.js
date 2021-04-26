import React from "react";

const styles = {
  background: "blue",
  textAlign: "center",
  margin: "auto",
  borderRadius: "10px",
  padding: "10px",
};

function Header() {
  return (
    <div style={styles}>
      <h1>Employee Directory</h1>
    </div>
  );
}

export default Header;