import React from "react";
import LefSiteBarComponent from "../LeftSiteBar/LeftSiteBar.Component";
import { Dflex } from "../styledComponents/global.styled";
import BannerComponent from "./Banner.Component";

const Banner = () => {
  return (
    <>
      <Dflex>
        <LefSiteBarComponent />
        <BannerComponent />
      </Dflex>
    </>
  );
};
export default Banner;
