import React from "react";
import {
  NavLink,
  Link
} from "react-router-dom";
import styled from "styled-components";
import NavigationRoutes from "../NavigationRoutes/NavigationRoutes";

const Wrapper = styled.ul`
  position: absolute;
  top: 0;
  left: 0;
  width: 10%;
  height: 100vh;
  background-color: wheat;
`;

const Logo = styled.ul`
  display: flex;
  text-align: center;
  margin: 40px 0;
  flex-direction: column;
  font-weight: 700;
  font-size: 30px;

`;


const LogoElement = styled.li`
  text-decoration: none;

  &:first-child {
    letter-spacing: 8px;
  }
`;

const Navigation = () => {

  return (
    <>
      <Wrapper>
        <li>
          <Link to="/">
            <Logo>
              <LogoElement>HOOKS</LogoElement>
              <LogoElement>Playground</LogoElement>
            </Logo>
          </Link>
        </li>
        <li>
          <NavLink to="/UseState">State</NavLink>
        </li>
        <li>
          <NavLink to="/UseContext">Context</NavLink>
        </li>
        <li>
          <NavLink to="/UseEffect">Effect</NavLink>
        </li>
      </Wrapper>
      <NavigationRoutes />
    </>
  );
};

export default Navigation;