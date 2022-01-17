import React from "react";
import MiniPalette from "./MiniPalette";
import { styled } from "@mui/material/styles";

const Page = styled("div")`
  background-color: darkblue;
  padding: 1rem;
`;

const Nav = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
`;

const Main = styled("main")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export default function PaletteList({ palettes }) {
  return (
    <Page>
      <header>
        <Nav>
          <h1>React colors</h1>
          <p>text</p>
        </Nav>
      </header>
      <Main>
        {palettes.map((palette) => (
          <MiniPalette key={palette.id} {...palette} />
        ))}
      </Main>
    </Page>
  );
}
