import React from "react";
import styled from "styled-components";

export function Button({ children, callback, backgroundhexColor, textColor}) {

  const Button = styled.button`
    background-color: ${backgroundhexColor};
    color: ${textColor};
`;


  return (
    <Button
      onClick={callback}
    >
      {children}
    </Button>
  );
}
