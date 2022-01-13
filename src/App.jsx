import Palette from "./components/Palette";
import { generatePalette } from "./helpers/colors";
import seedColors from "./seedColors";

function App() {
  console.log(generatePalette(seedColors[2]));
  return (
    <div>
      <header>
        <h1>Color App</h1>
        <Palette {...seedColors[2]} />
      </header>
    </div>
  );
}

export default App;
