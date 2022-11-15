
import React from "react";
import "./SecondComponent.scss";
import Card from "./Card";

export default () => {


  return (
      <div className="container-section">

        <div className="container-content">
          <h2>Solutions we Crafter to make human lives easier.</h2>
        </div>
        <div className="container-content-cards">
          <Card />
          <Card class_hidden="hiddent-card"/>
          <Card class_hidden="hiddent-card"/>
          <Card class_hidden="hiddent-card"/>
        </div>

      </div>
  );
};


