import React from "react";
import './protfolio.css';

const WorksItems = ({ item }) => {
  return (
    <div className="card">
      <div className="card-content">
        <img src={item.image} alt={item.title} className="work__img" />
        <h3 className="work__title"> {item.title}</h3>
        {item.category === "Flutter" ? (
        <div className="button-sty">
          {item.Android && <a href={item.Android} target="blank" className="button">View on Play Store</a>}
          {item.AppStore && <a href={item.AppStore} target="blank" className="button">View on App Store</a>}
        </div>
      ) : item.category === "Android" ? (
        <div className="button-style">
          {item.Android && <a href={item.Android} target="blank" className="button">View on Play Store</a>}
        </div>
      ) : null}
      </div>
      </div>
  );
};

export default WorksItems;
