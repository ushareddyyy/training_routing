import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <img 
        src="https://th.bing.com/th?id=OIP.WuNIxKOOYYuHc6CyO2Z1TAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" 
        alt="Sunset" 
        className="card-img" 
      />
      <div className="card-content">
        <h2>Write title Here</h2>
        <p>You can Add Description Here...</p>
        <button className="card-btn">Read More...</button>
      </div>
    </div>
  );
};

export default Card;
