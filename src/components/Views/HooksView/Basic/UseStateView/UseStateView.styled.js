import styled from "styled-components";
import { theme } from "../../../../../Assets/styles/Theme";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 10%;
  width: 90%;
`;
export const Header = styled.span`
  font-size: 30px;
  margin: 40px 0;
  font-weight: 700;
`;

export const Code = styled.div`
  background-color: ${theme.navigation.bgColor};
  border-radius: 20px;
  color: ${theme.navigation.fontColor};
  padding: 10px 15px;
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  letter-spacing: 1px;
  margin: 10px 0;
`;
export const Text = styled.span`
  color: ${theme.colors.primaryFont};
  margin-bottom: 10px;
  font-size: 20px;
`;
export const SpecialText = styled.span`
  color: ${theme.colors.specialFont};
  font-weight: 700;
`

export const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
export const Button = styled.button`
  background-color: transparent;
  border: solid 2px ${theme.navigation.bgColor};
  padding: 7px 12px;
  font-weight: 700;
  color: ${theme.navigation.bgColor};
  transition: .5s;
  outline: none;

  :hover {
    background-color: ${theme.navigation.bgColor};
    color: ${theme.navigation.fontColor};
  }
`;