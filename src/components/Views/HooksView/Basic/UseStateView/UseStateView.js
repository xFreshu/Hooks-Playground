import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../../../../../Assets/styles/Theme";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 10%;
  width: 90%;
`;
const Header = styled.span`
  font-size: 30px;
  margin: 40px 0;
  font-weight: 700;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  border: solid 5px ${theme.navigation.bgColor};
  padding: 30px;
  box-shadow: 0 5px 15px 5px rgba(0, 0, 0, 0.3);
`;
const Code = styled.div`
  background-color: ${theme.navigation.bgColor};
  border-radius: 20px;
  color: ${theme.navigation.fontColor};
  padding: 10px 15px;
  font-family: 'Open Sans', sans-serif;
  font-size: 20px;
  letter-spacing: 1px;
`;
const Span = styled.span`
  color: ${theme.navigation.bgColor};
  margin: 10px;
  font-size: 20px;
`;
const ButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
`;
const Button = styled.button`
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

const UseStateView = () => {
  const [count, setCount] = useState(0);
  return (
    <Wrapper>
      <Header>Use State</Header>
      <Card>
        <Span>Konstrukcja</Span>
        <Code>const [state, useState] = useState(0)</Code>
        <Span>Zwraca zmienną przechowującą lokalny stan i funkcję do jego aktualizacji.</Span>
        <Span>Podczas pierwszego renderowania zwrócona wartość stanu (state) jest taka sama, jak wartość przekazana jako
          pierwszy argument (initialState).</Span>
        <Span>state - bieżący stan</Span>
        <Span>useState - funkcja która zmienia stan</Span>
        <Span>useState(0) - ustawia stan na 0</Span>
        <Span>Licznik: {count}</Span>
        <ButtonsContainer>
          <Button onClick={() => setCount(newCount => newCount + 1)}>Add</Button>
          <Button onClick={() => setCount(newCount => newCount - 1)}>Remove</Button>
          <Button onClick={() => setCount(0)}>Reset state</Button>
        </ButtonsContainer>
      </Card>
    </Wrapper>
  );
};

export default UseStateView;