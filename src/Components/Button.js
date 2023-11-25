import React from "react";
import Button from "react-bootstrap/Button";
export default function SelectionButton(props) {
  return (
    <Button
      onClick={props.function}
      className={props.className}
      variant={props.type}
      key={props.index}
    >
      {props.name}
    </Button>
  );
}
