import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { icon, title, description } = service;

  return (
    <div>
      <i>{icon}</i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Service;
