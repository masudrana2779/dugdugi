import styled from "styled-components";
import { Color } from "./Variable.styled";

type DflexProps = {
  alignItems?: string;
  justifyContent?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  width?: string;
  height?: string;
  appearance?: string;
  borderTop?: string;
  borderBottom?: string;
  borderRight?: string;
  borderLeft?: string;
  borderRadius?: string;
  boxShow?: string;
  outLine?: string;
  cursor?: string;
};

export const Dflex = styled.div<DflexProps>`
  display: flex;
  align-items: ${(props) => props.alignItems || "flex-start"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  margin-top: ${(props) => props.marginTop || "0"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  margin-left: ${(props) => props.marginLeft || "0"};
  margin-right: ${(props) => props.marginRight || "0"};
  padding-top: ${(props) => props.paddingTop || "0"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
  padding-left: ${(props) => props.paddingLeft || "0"};
  padding-right: ${(props) => props.paddingRight || "0"};
  width: ${(props) => props.width || "auto"};
  height: ${(props) => props.height || "auto"};
  appearance: ${(props) => props.appearance || "auto"};
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
  border-right: ${(props) => props.borderRight};
  border-left: ${(props) => props.borderLeft};
  border-radius: ${(props) => props.borderRadius || "3px"};
  box-shadow: ${(props) => props.boxShow || "none"};
  outline: ${(props) => props.outLine || "none"};
  cursor: ${(props) => props.cursor};
`;

type ULProps = {
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  listStyle?: string;
};

export const UL = styled.ul<ULProps>`
  display: ${(props) => props.display || "block"};
  align-items: ${(props) => props.alignItems || "flex-start"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  margin-top: ${(props) => props.marginTop || "0"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  margin-left: ${(props) => props.marginLeft || "0"};
  margin-right: ${(props) => props.marginRight || "0"};
  padding-top: ${(props) => props.paddingTop || "0"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
  padding-left: ${(props) => props.paddingLeft || "0"};
  padding-right: ${(props) => props.paddingRight || "0"};
  list-style: ${(props) => props.listStyle || "initial"};
`;

type LiProps = {
  fontColor?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  cursor?: string;
  listStyle?: string;
  listStyleColor?: string;
  borderTop?: string;
  borderBottom?: string;
  borderRight?: string;
  borderLeft?: string;
  borderRadius?: string;
  boxShow?: string;
  outLine?: string;
};

export const LI = styled.li<LiProps>`
  color: ${(props) => props.fontColor || "#161616"};
  font-size: ${(props) => props.fontSize || "1rem"};
  line-height: ${(props) => props.lineHeight || "20px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  margin-top: ${(props) => props.marginTop || "0"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  margin-left: ${(props) => props.marginLeft || "0"};
  margin-right: ${(props) => props.marginRight || "0"};
  padding-top: ${(props) => props.paddingTop || "0"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
  padding-left: ${(props) => props.paddingLeft || "0"};
  padding-right: ${(props) => props.paddingRight || "0"};
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
  border-right: ${(props) => props.borderRight};
  border-left: ${(props) => props.borderLeft};
  border-radius: ${(props) => props.borderRadius};
  box-shadow: ${(props) => props.boxShow || "none"};
  outline: ${(props) => props.outLine || "none"};
  cursor: ${(props) => props.cursor || "default"};
  position: relative;

  &::marker {
    color: ${(props) => props.listStyleColor || Color.Brand_Color};
  }

  a {
    display: block;
    text-decoration: none;
  }
`;

export const DashBoardBody = styled.div`
  padding: 30px 0;
`;

type DashBoardCardProps = {
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  backgroundColor?: string;
  borderTop?: string;
  borderBottom?: string;
  borderRight?: string;
  borderLeft?: string;
  backgroundImage?: string;
};
export const DashBoardCard = styled.div<DashBoardCardProps>`
  background-color: ${(props) => props.backgroundColor || "#fff"};
  background-image: url(${(props) => props.backgroundImage});
  background-position: right center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  overflow: hidden;
  margin-top: ${(props) => props.marginTop || "0"};
  margin-bottom: ${(props) => props.marginBottom || "25px"};
  margin-left: ${(props) => props.marginLeft || "0"};
  margin-right: ${(props) => props.marginRight || "0"};
  padding-top: ${(props) => props.paddingTop || "0"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
  padding-left: ${(props) => props.paddingLeft || "0"};
  padding-right: ${(props) => props.paddingRight || "0"};
  border-top: ${(props) => props.borderTop};
  border-bottom: ${(props) => props.borderBottom};
  border-right: ${(props) => props.borderRight};
  border-left: ${(props) => props.borderLeft};
`;

export const Main = styled.main`
  display: flex;
  padding: 30px;
`;

export const MainBody = styled.div`
  width: 100%;
`;

type shapeProps = {
  position?: string;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  mbShow?: string;
};

export const Shape = styled.div<shapeProps>`
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  right: ${(props) => props.right};
  display: ${(props) => props.mbShow};
`;

type SliderArrowsProps = {
  left?: string;
  right?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
};

export const SliderArrows = styled.button<SliderArrowsProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: none;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  font-size: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s;
  left: ${(props) => props.left || "auto"};
  right: ${(props) => props.right || "auto"};
  margin-top: ${(props) => props.marginTop || "0"};
  margin-bottom: ${(props) => props.marginBottom || "0"};
  margin-left: ${(props) => props.marginLeft || "0"};
  margin-right: ${(props) => props.marginRight || "0"};
  padding-top: ${(props) => props.paddingTop || "0"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
  padding-left: ${(props) => props.paddingLeft || "0"};
  padding-right: ${(props) => props.paddingRight || "0"};

  &:hover {
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.15);
    background: ${Color.Brand_Color};
    color: ${Color.White_color};
    opacity: 1;
  }
`;

export const Logo = styled.div`
  text-align: center;
`;
