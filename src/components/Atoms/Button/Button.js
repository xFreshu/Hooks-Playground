import React from "react";
import { Button } from "./Button.styled";

const PrimaryButton = ({ onClick, ...props }) => {

  return (
    <Button onClick={onClick}>{props.children}</Button>
  );
};

export default PrimaryButton;