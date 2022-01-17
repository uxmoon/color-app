import React from "react";
import { styled } from "@mui/material/styles";

const Card = styled("div")`
  border: 1px solid #000;
  padding: 0.5rem;
  background-color: #fff;
  border-radius: 0.25rem;
`;

const CardFooter = styled("h2")`
  font-size: 0.875rem;
  font-weight: 400;
  display: flex;
  justify-content: space-between;

  span {
    margin-left: 0.25rem;
  }
`;

export default function MiniPalette({ colors, emoji, id, paletteName }) {
  return (
    <Card>
      <CardFooter>
        {paletteName} <span>{emoji}</span>
      </CardFooter>
    </Card>
  );
}
