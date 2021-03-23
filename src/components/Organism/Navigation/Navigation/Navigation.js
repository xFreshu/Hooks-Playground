import React from "react";
import { Wrapper, LogoContainer, Logo, LogoElement, StyledLink, NavElement } from "./Navigation.styled";
import NavigationRoutes from "../NavigationRoutes/NavigationRoutes";

const Navigation = () => {

  return (
    <>
      <Wrapper>
        <li>
          <LogoContainer to="/">
            <Logo>
              <LogoElement>HOOKS</LogoElement>
              <LogoElement>Playground</LogoElement>
            </Logo>
          </LogoContainer>
        </li>
        <NavElement>
          <StyledLink to="/UseState">UseState</StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to="/UseContext">UseContext</StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to="/UseEffect">UseEffect</StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to="/UseCallback">UseCallback</StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to="/UseDebugValue">UseDebugValue</StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to="/UseImperativeHandle">UseImperativeHandle</StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to="/UseLayoutEffect">UseLayoutEffect</StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to="/UseMemo">UseMemo</StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to="/UseReducer">UseReducer</StyledLink>
        </NavElement>
        <NavElement>
          <StyledLink to="/UseRef">UseRef</StyledLink>
        </NavElement>
      </Wrapper>
      <NavigationRoutes />
    </>
  );
};

export default Navigation;