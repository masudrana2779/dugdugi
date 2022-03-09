import styled from "styled-components";
import { Color } from "./Variable.styled";

type DivBlogProps = {
  fontColor?: string;
  fontSize?: string;
  lineHeight?: string;
  fontWeight?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  margin?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  textAlign?: string;
  width?: string;
  height?: string;
  appearance?: string;
  borderTop?: string;
  borderBottom?: string;
  borderRight?: string;
  borderLeft?: string;
  borderRadius?: string;
  border?: string;
  boxShow?: string;
  outLine?: string;
  overflow?: string;
  overflowX?: string;
  overflowY?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
};

export const DivBlock = styled.div<DivBlogProps>`
  color: ${(props: { fontColor: any }) => props.fontColor};
  font-size: ${(props: { fontSize: any }) => props.fontSize};
  line-height: ${(props: { lineHeight: any }) => props.lineHeight};
  font-weight: ${(props: { fontWeight: any }) => props.fontWeight};
  margin: ${(props: { margin: any }) => props.margin};
  margin-top: ${(props: { marginTop: any }) => props.marginTop};
  margin-bottom: ${(props: { marginBottom: any }) => props.marginBottom};
  margin-left: ${(props: { marginLeft: any }) => props.marginLeft};
  margin-right: ${(props: { marginRight: any }) => props.marginRight};
  padding: ${(props: { padding: any }) => props.padding};
  padding-top: ${(props: { paddingTop: any }) => props.paddingTop};
  padding-bottom: ${(props: { paddingBottom: any }) => props.paddingBottom};
  padding-left: ${(props: { paddingLeft: any }) => props.paddingLeft};
  padding-right: ${(props: { paddingRight: any }) => props.paddingRight};
  text-align: ${(props: { textAlign: any }) => props.textAlign};
  width: ${(props: { width: any }) => props.width || "auto"};
  height: ${(props: { height: any }) => props.height || "auto"};
  appearance: ${(props: { appearance: any }) => props.appearance || "auto"};
  border: ${(props: { border: any }) => props.border};
  border-top: ${(props: { borderTop: any }) => props.borderTop};
  border-bottom: ${(props: { borderBottom: any }) => props.borderBottom};
  border-right: ${(props: { borderRight: any }) => props.borderRight};
  border-left: ${(props: { borderLeft: any }) => props.borderLeft};
  border-radius: ${(props: { borderRadius: any }) => props.borderRadius};
  box-shadow: ${(props: { boxShow: any }) => props.boxShow || "none"};
  outline: ${(props: { outLine: any }) => props.outLine || "none"};
  overflow: ${(props: { overflow: any }) => props.overflow};
  overflow-x: ${(props: { overflowX: any }) => props.overflowX};
  overflow-y: ${(props: { overflowY: any }) => props.overflowY};
  display: ${(props: { display: any }) => props.display};
  align-items: ${(props: { alignItems: any }) => props.alignItems};
  justify-content: ${(props: { justifyContent: any }) => props.justifyContent};
`;

type TypographyProps = {
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
  textAlign?: string;
  display?: string;
  cursor?: string;
  alignItems?: string;
  justifyContent?: string;
};
export const Typography = styled.div<TypographyProps>`
  color: ${(props: { fontColor: any }) => props.fontColor || "#161616"};
  font-size: ${(props: { fontSize: any }) => props.fontSize || "2.5rem"};
  line-height: ${(props: { lineHeight: any }) => props.lineHeight || "20px"};
  font-weight: ${(props: { fontWeight: any }) => props.fontWeight || "400"};
  margin-top: ${(props: { marginTop: any }) => props.marginTop || "0"};
  margin-bottom: ${(props: { marginBottom: any }) => props.marginBottom || "0"};
  margin-left: ${(props: { marginLeft: any }) => props.marginLeft || "0"};
  margin-right: ${(props: { marginRight: any }) => props.marginRight || "0"};
  padding-top: ${(props: { paddingTop: any }) => props.paddingTop || "0"};
  padding-bottom: ${(props: { paddingBottom: any }) =>
    props.paddingBottom || "0"};
  padding-left: ${(props: { paddingLeft: any }) => props.paddingLeft || "0"};
  padding-right: ${(props: { paddingRight: any }) => props.paddingRight || "0"};
  text-align: ${(props: { textAlign: any }) => props.textAlign};
  display: ${(props: { display: any }) => props.display};
  align-items: ${(props: { alignItems: any }) => props.alignItems};
  justify-content: ${(props: { justifyContent: any }) => props.justifyContent};
  cursor: ${(props: { cursor: any }) => props.cursor};
`;

type SpanProps = {
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
  padding?: string;
  cursor?: string;
  display?: string;
  alignItems?: string;
  justifyContent?: string;
  textAlign?: string;
  borderRadius?: string;
  backgroundColor?: string;
};
export const Span = styled.span<SpanProps>`
  color: ${(props: { fontColor: any }) => props.fontColor};
  font-size: ${(props: { fontSize: any }) => props.fontSize};
  line-height: ${(props: { lineHeight: any }) => props.lineHeight || "initial"};
  font-weight: ${(props: { fontWeight: any }) => props.fontWeight};
  margin-top: ${(props: { marginTop: any }) => props.marginTop || "0"};
  margin-bottom: ${(props: { marginBottom: any }) => props.marginBottom || "0"};
  margin-left: ${(props: { marginLeft: any }) => props.marginLeft || "0"};
  margin-right: ${(props: { marginRight: any }) => props.marginRight || "0"};
  padding-top: ${(props: { paddingTop: any }) => props.paddingTop || "0"};
  padding-bottom: ${(props: { paddingBottom: any }) =>
    props.paddingBottom || "0"};
  padding-left: ${(props: { paddingLeft: any }) => props.paddingLeft || "0"};
  padding-right: ${(props: { paddingRight: any }) => props.paddingRight || "0"};
  padding: ${(props: { padding: any }) => props.padding};
  display: ${(props: { display: any }) => props.display || "inline-block"};
  align-items: ${(props: { alignItems: any }) => props.alignItems};
  justify-content: ${(props: { justifyContent: any }) => props.justifyContent};
  cursor: ${(props: { cursor: any }) => props.cursor};
  text-align: ${(props: { textAlign: any }) => props.textAlign};
  background-color: ${(props: { backgroundColor: any }) =>
    props.backgroundColor};
  border-radius: ${(props: { borderRadius: any }) => props.borderRadius};
`;

type PProps = {
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
  textAlign?: string;
  position?: string;
};

export const P = styled.p<PProps>`
  color: ${(props: { fontColor: any }) =>
    props.fontColor || Color.Heading_Color};
  font-size: ${(props: { fontSize: any }) => props.fontSize || "1rem"};
  line-height: ${(props: { lineHeight: any }) => props.lineHeight || "26px"};
  font-weight: ${(props: { fontWeight: any }) => props.fontWeight || "400"};
  margin-top: ${(props: { marginTop: any }) => props.marginTop || "0"};
  margin-bottom: ${(props: { marginBottom: any }) => props.marginBottom || "0"};
  margin-left: ${(props: { marginLeft: any }) => props.marginLeft || "0"};
  margin-right: ${(props: { marginRight: any }) => props.marginRight || "0"};
  padding-top: ${(props: { paddingTop: any }) => props.paddingTop || "0"};
  padding-bottom: ${(props: { paddingBottom: any }) =>
    props.paddingBottom || "0"};
  padding-left: ${(props: { paddingLeft: any }) => props.paddingLeft || "0"};
  padding-right: ${(props: { paddingRight: any }) => props.paddingRight || "0"};
  text-align: ${(props: { textAlign: any }) => props.textAlign};
  position: ${(props: { position: any }) => props.position};
`;

type titleProps = {
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
  textAlign?: string;
  position?: string;
  borderColor?: string;
};

export const Title = styled.p<titleProps>`
  color: ${(props: { fontColor: any }) =>
    props.fontColor || Color.Heading_Color};
  font-size: ${(props: { fontSize: any }) => props.fontSize || "1rem"};
  line-height: ${(props: { lineHeight: any }) => props.lineHeight || "26px"};
  font-weight: ${(props: { fontWeight: any }) => props.fontWeight || "400"};
  margin-top: ${(props: { marginTop: any }) => props.marginTop || "0"};
  margin-bottom: ${(props: { marginBottom: any }) => props.marginBottom || "0"};
  margin-left: ${(props: { marginLeft: any }) => props.marginLeft || "0"};
  margin-right: ${(props: { marginRight: any }) => props.marginRight || "0"};
  padding-top: ${(props: { paddingTop: any }) => props.paddingTop || "0"};
  padding-bottom: ${(props: { paddingBottom: any }) =>
    props.paddingBottom || "0"};
  padding-left: ${(props: { paddingLeft: any }) => props.paddingLeft || "0"};
  padding-right: ${(props: { paddingRight: any }) => props.paddingRight || "0"};
  text-align: ${(props: { textAlign: any }) => props.textAlign};
  position: relative;

  &::before {
    position: absolute;
    content: "";
    bottom: 0;
    left: 0;
    width: 25px;
    height: 2px;
    background-color: ${(props: { borderColor: any }) => props.borderColor};
  }
`;
