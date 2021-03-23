import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const activeClassName = "nav-item-active";

export const Wrapper = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 10%;
  height: 100vh;
  background-color: #22223b;
`;

export const Logo = styled.ul`
  display: flex;
  text-align: center;
  margin: 40px 0;
  flex-direction: column;
  font-weight: 700;
  font-size: 30px;
  color: white;
  text-decoration: none;
`;


export const LogoElement = styled.li`
  text-decoration: none;
  color: #f2e9e4;

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
  color: #f2e9e4;

  &.${activeClassName} {
    padding-left: 50px;
    background-color: #4a4e69;
    color: #f2e9e4;
  }

  :hover {
    background-color: #4a4e69;
  }
`;
export const LogoContainer = styled(Link)`
  text-decoration: none;
`;