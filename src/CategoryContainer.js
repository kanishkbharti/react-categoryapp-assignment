import React from "react";
import LaunchIcon from "@material-ui/icons/Launch";

const CategoryContainer = ({ title, categories }) => {
  return (
    <div className="main-container">
      <div className="icons">
        <h1>{title}</h1>

        <h3 style={{ color: "darkgreen" }}>
          <LaunchIcon />
        </h3>
      </div>

      <div className="container">
        {categories.listItem.map((category, i) => {
          return (
            <div key={i} className="grid-container">
              <div
                className="grid"
                style={{
                  background: `rgb(223, 240, 227) url(${category.image}) no-repeat center center`,
                  backgroundSize: `contain`
                }}
              >
                <h4>{category.name}</h4>
              </div>
            </div>
          );
        })}
      </div>
      <div className="banner--fadeBottom "></div>
    </div>
  );
};

export default CategoryContainer;
