import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { theme } from "../../../../Assets/styles/Theme";

export const activeClassName = "nav-item-active";

export const Wrapper = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 10%;
  height: 100vh;
  background-color: ${theme.navigation.bgColor};
`;

export const Logo = styled.ul`
  display: flex;
  text-align: center;
  margin: 40px 0;
  flex-direction: column;
  font-weight: 700;
  font-size: 30px;
  color: ${theme.navigation.fontColor};
  text-decoration: none;
`;


export const LogoElement = styled.li`
  text-decoration: none;

  &:first-child {
    letter-spacing: 8px;
    text-decoration: none;
  }
`;

export const NavElement = styled.li`
  display: flex;
  justify-content: center;
  margin: 10px 0;

`;

export const StyledLink = styled(NavLink).attrs({ activeClassName })`
  position: relative;
  text-decoration: none;
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  transition: .7s;
color: ${theme.navigation.fontColor};

  &.${activeClassName} {
    padding-left: 50px;
    background-color: ${theme.navigation.hoverColor};

  }

  :hover {
    background-color: ${theme.navigation.hoverColor};
  }
`;
export const LogoContainer = styled(Link)`
  text-decoration: none;
`;
