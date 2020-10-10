import React, { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";
import CategoryContainer from "./components/CategoryContainer";
import uuid from "react-uuid";
import { banners } from "./banners";
import BannerComponent from "./components/BannerComponent";
import Nav from "./components/Nav";

export default function App() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonware.com/json/688410e8f4013fbe56009d8e1621f2a4.json ")
      .then((response) => {
        const { MyData } = { ...response.data };

        const outputArr = MyData.map((category) => {
          return (
            <CategoryContainer
              key={uuid()}
              title={category.headerTitle}
              categories={category}
            />
          );
        });
        console.log(outputArr.length);
        if (outputArr.length <= 2) {
          banners.forEach((bannerUrl) => {
            outputArr.push(
              <BannerComponent key={uuid()} bannerUrl={bannerUrl} />
            );
          });
        } else {
          let len = outputArr.length;
          let bannerLen = banners.length;
          let bannerIndex = 0;

          let index = 2;
          while (len - index >= 0) {
            let element = (
              <BannerComponent
                key={uuid()}
                bannerUrl={banners[bannerIndex % bannerLen]}
              />
            );
            outputArr.splice(index, 0, element);
            len = outputArr.length;
            bannerIndex++;
            index += 3;
          }
          if (index > outputArr.length) {
            index = outputArr.length;
            let element = (
              <BannerComponent
                key={uuid()}
                bannerUrl={banners[bannerIndex % bannerLen]}
              />
            );
            outputArr.splice(index, 0, element);
          }
        }

        console.log(outputArr);
        setCategories(outputArr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="App">
        <Nav />
        <div style={{ background: "rgba(50, 199, 90, 0.7)", marginBottom: 0 }}>
          <h1 style={{ marginBottom: 0, padding: 8, marginTop: 0 }}>
            {" "}
            Shop By Category{" "}
          </h1>
        </div>
        {categories}
      </div>
    </>
  );
}
