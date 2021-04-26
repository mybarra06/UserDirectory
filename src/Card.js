import React from "react";
const styles = {
  display: "flex",
  flexDirection: "row",
  float: "left",
  width: "33%",
  padding: "0 10px",
  border: "3px solid green",
  borderRadius: "10px",
  
};

function Card(props) {
  return (
    <div style={styles} className="card">
      <img
        style={{ width: "100px", height: "100px" }}
        src={props.image}
        className="card-img-top"
        alt={props.name}
      />
      <div>
        <div className="card-body">
          <h5 className="card-title">
            Name: {props.empName.first} {props.empName.last}{" "}
          </h5>
          <p className="card-text">
            A proud employee of Your Company
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Phone: {props.phoneNumber}</li>
          <li className="list-group-item">email: {props.email}</li>
          <li className="list-group-item">DOB: {props.dob}</li>
        </ul>
      </div>
    </div>
  );
}

export default Card;