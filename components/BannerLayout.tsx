import React, { Children } from "react";
import LefSiteBarComponent from "./LeftSiteBar/LeftSiteBar.Component";
import { Dflex } from "./styledComponents/global.styled";


type BannerLayoutProps = {
    children: any
}


const BannerLayout = ({children}:BannerLayoutProps) => {
  return (
    <Dflex>
      <LefSiteBarComponent />
      {children}
    </Dflex>
  );
};
export default BannerLayout;
