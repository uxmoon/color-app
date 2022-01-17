import React from "react";
import MiniPalette from "./MiniPalette";
import { styled } from "@mui/material/styles";

const Page = styled("div")`
  background-color: #eee;
  padding: 1rem;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;

const Container = styled("div")`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Nav = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Main = styled("main")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;

export default function PaletteList({ palettes }) {
  return (
    <Page>
      <Container>
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
      </Container>
    </Page>
  );
}
