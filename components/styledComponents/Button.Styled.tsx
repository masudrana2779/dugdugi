import styled from "styled-components";

type ButtonProps = {
    fontColor?: string,
    fontSize?: string,
    lineHeight?: string,
    fontWeight?: string,
    borderRadius?: string,
    backgroundColor?: string,
    border?: string,
    padding?: string,
    boxShadow?: string,
    marginTop?: string,
    marginBottom?: string,
    marginLeft?: string,
    marginRight?: string,
    hoverBackground?: string,
    hoverBorderColor?: string,
    hoverColor?: string,
    hoverBoxShadow?: string,
    width?:string
}

export const Button = styled.button<ButtonProps>`
  color: ${props => props.fontColor || "#fff"};
  font-size: ${props => props.fontSize || "1rem"};
  line-height: ${props => props.lineHeight || "1.5"};
  font-weight: ${props => props.fontWeight || "400"};
  border-radius: ${props => props.borderRadius || "0.25rem"};
  background-color: ${props => props.backgroundColor || "#0076D4"};
  border: ${props => props.border || "1px solid #0076D4"};
  padding: ${props => props.padding || '0.375rem 0.75rem'};
  box-shadow: ${props => props.boxShadow || 'none'};
  margin-top: ${props => props.marginTop || "0"};
  margin-bottom: ${props => props.marginBottom || "0"};
  margin-left: ${props => props.marginLeft || "0"};
  margin-right: ${props => props.marginRight || "0"};
  outline: none;
  cursor: pointer;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  transition: all 0.3s;
  width: ${props => props.width || "auto"};
  &:hover {
    background-color: ${props => props.hoverBackground || "#065a9d"};
    border-color: ${props => props.hoverBorderColor || "#065a9d"};
    color: ${props => props.hoverColor || "#fff"};
    box-shadow: ${props => props.hoverBoxShadow || 'none'};
  }
`;