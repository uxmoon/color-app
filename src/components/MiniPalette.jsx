import React from "react";
import { styled } from "@mui/material/styles";

const Card = styled("div")`
  padding: 0.5rem;
  background-color: #fff;
  border-radius: 0.25rem;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
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

const CardMiniContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

const CardMini = styled("div")`
  width: 100%;
  height: 2.5rem;
`;

export default function MiniPalette({ colors, paletteName, emoji, goTo, id }) {
  const handleLink = () => {
    goTo(id);
  };
  const miniColorBoxes = colors.map((color) => (
    <CardMini key={color.name} style={{ backgroundColor: color.color }} />
  ));

  return (
    <Card onClick={handleLink}>
      <CardMiniContainer>{miniColorBoxes}</CardMiniContainer>
      <CardFooter>
        {paletteName} <span>{emoji}</span>
      </CardFooter>
    </Card>
  );
}
