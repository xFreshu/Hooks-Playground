import React, { useState } from "react";
import { Card, CardName } from "../../../../Templates/Card.styled";
import { Wrapper, Header,  Code, Text, Button, ButtonsContainer, SpecialText } from "./UseStateView.styled";

const UseStateView = () => {
  const [count, setCount] = useState(0);
  // const [names, setNames] = useState([]);
  return (
    <Wrapper>
      <Header>Use State</Header>
      <Card>
        <CardName>Konstrukcja</CardName>
        <Text>Zwraca zmienną przechowującą lokalny stan i funkcję do jego aktualizacji.</Text>
        <Code>const [<SpecialText>state</SpecialText>, <SpecialText>useState</SpecialText>]
          = <SpecialText>useState(0)</SpecialText></Code>
        <Text>Podczas pierwszego renderowania zwrócona wartość stanu (state) jest taka sama, jak wartość przekazana jako
          pierwszy argument (initialState).</Text>
        <Text><SpecialText>state</SpecialText> - bieżący stan</Text>
        <Text><SpecialText>useState</SpecialText> - funkcja która zmienia stan</Text>
        <Text><SpecialText>useState(0)</SpecialText> - ustawia stan na 0</Text>
      </Card>
      <Card>
        <CardName>Przykład | Licznik</CardName>
        <Text>Licznik: {count}</Text>
        <ButtonsContainer>
          <Button onClick={() => setCount(newCount => newCount + 1)}>Add</Button>
          <Button onClick={() => setCount(newCount => newCount - 1)}>Remove</Button>
          <Button onClick={() => setCount(0)}>Reset state</Button>
        </ButtonsContainer>
      </Card>
      <Card>
        <CardName>Przykład | zmiana stanu przez przycisk</CardName>
      </Card>
    </Wrapper>
  );
};

export default UseStateView;