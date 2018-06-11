import React from "react";
import "./FoodCard.css";

const FoodCard = props => (
  <div className="card">
    <div onClick={() => props.checkedTwice(props.id)}  className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
    </div>
  
  </div>
);



export default FoodCard;
