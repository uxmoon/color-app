import React from "react";
import { styled } from "@mui/material/styles";

const Div = styled("div")`
  background-color: red;
  p {
    color: white;
  }
`;

export default function MiniPalette() {
  return (
    <Div>
      <p>Mini palette</p>
    </Div>
  );
}
