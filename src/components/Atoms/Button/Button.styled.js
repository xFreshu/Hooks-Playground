import styled from "styled-components";
import { theme } from "../../../Assets/styles/Theme";

export const Button = styled.button`
  background-color: transparent;
  border: solid 2px ${theme.navigation.bgColor};
  padding: 7px 12px;
  font-weight: 700;
  color: ${theme.navigation.bgColor};
  transition: .5s;
  outline: none;
  margin: 20px 0;

  :hover {
    background-color: ${theme.navigation.bgColor};
    color: ${theme.navigation.fontColor};
  }
`;