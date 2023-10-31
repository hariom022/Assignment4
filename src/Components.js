import React from "react";
import DrawerComponent from "./Dwawer/DrawerComponent";
import Header from "./Header/Header";
import SocialPost from "./SocialPost/SocialPost";
import Artist from "./Artists/Artist";
import Slider1 from "./Slider/Slider";

const Components = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <DrawerComponent />
        <SocialPost />
        <Artist />
      </div>
      <div>
        <Slider1 />
      </div>
    </div>
  );
};

export default Components;
