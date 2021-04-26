import React from "react";

const styles = {
  background: "yellow",
  margin: "auto",
  border: "4px solid blue",
  borderRadius: "10px",
  padding: "10px",
  textAlign: "center",
};

function Navbar(props) {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <form style={styles} className="d-flex">
          <input
            onChange={(event) => {
              console.log(event.target.value);
              props.handleInputChange(event);
            }}
            value={props.search}
            name="text"
            className="form-control me-2"
            type="text"
            placeholder="Search Name Here"
            aria-label="Search"
          />
           <button className="btn btn-outline-success" type="submit">
            Clear Search
          </button>
          <button 
            onClick={(event) => {
            console.log(event.target.value);
            props.handleSort(event);
          }}
          className="btn btn-outline-success" type="submit">
            Sort by Age
          </button>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;