import React, { useState } from "react";
import { CardName, Card } from "../../../../Templates/Card.styled";
import { Wrapper, Header, Text, ButtonsContainer, SpecialText } from "./UseStateView.styled";
import { BlockCode } from "../../../../Templates/BlockCode.styled";
import PrimaryButton from "../../../../Atoms/Button/Button";

const UseStateView = () => {
  const [count, setCount] = useState(0);
  const [persons, setPersons] = useState({
    persons: [
      { name: "Adam", age: "30" },
      { name: "Alex", age: "23" },
      { name: "Edward", age: "65" }
    ]
  });
  const personHandler = () => {
    setPersons({
      persons: [
        { name: "Witek", age: "12" },
        { name: "Max", age: 9 },
        { name: "Arnold", age: "22" }
      ]
    });
  };
  const previousState = () => {
    setPersons({
      persons: [
        { name: "Adam", age: "30" },
        { name: "Alex", age: "23" },
        { name: "Edward", age: "65" }
      ]
    });
  };
  return (
    <Wrapper>
      <Header>Use State</Header>
      <Card>
        <CardName>Konstrukcja</CardName>
        <Text>Zwraca zmienną przechowującą lokalny stan i funkcję do jego aktualizacji.</Text>
        <BlockCode>const [<SpecialText>state</SpecialText>, <SpecialText>useState</SpecialText>]
          = <SpecialText>useState(0)</SpecialText></BlockCode>
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
          <PrimaryButton onClick={() => setCount(newCount => newCount + 1)}>Add</PrimaryButton>
          <PrimaryButton onClick={() => setCount(newCount => newCount - 1)}>Remove</PrimaryButton>
          <PrimaryButton onClick={() => setCount(0)}>Reset state</PrimaryButton>
        </ButtonsContainer>
      </Card>
      <Card>
        <CardName>Przykład | zmiana stanu przez przycisk</CardName>
        <Text>Imię: {persons.persons[0].name}, wiek: {persons.persons[0].age}</Text>
        <Text>Imię: {persons.persons[1].name}, wiek: {persons.persons[1].age}</Text>
        <Text>Imię: {persons.persons[2].name}, wiek: {persons.persons[2].age}</Text>
        <ButtonsContainer>
          <PrimaryButton onClick={personHandler}>Change state of persons</PrimaryButton>
          <PrimaryButton onClick={previousState}>Change to previous state</PrimaryButton>
        </ButtonsContainer>
      </Card>
    </Wrapper>
  );
};

export default UseStateView;