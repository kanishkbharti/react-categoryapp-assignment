import React from "react";

const BannerComponent = ({ bannerUrl }) => {
  return (
    <div
      className="banner-container"
      style={{
        background: `rgba(95, 217, 128) url(${bannerUrl}) no-repeat center center`,
        backgroundSize: "cover"
      }}
    ></div>
  );
};

export default BannerComponent;
