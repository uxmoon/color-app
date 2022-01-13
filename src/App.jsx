import Palette from "./components/Palette";
import { generatePalette } from "./helpers/colors";
import seedColors from "./seedColors";

function App() {
  return (
    <div>
      <header>
        <h1>Color App</h1>
        <Palette palette={generatePalette(seedColors[2])} />
      </header>
    </div>
  );
}

export default App;
