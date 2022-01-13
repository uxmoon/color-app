import Palette from "./components/Palette";
import { generatePalette } from "./helpers/colors";
import seedColors from "./seedColors";

function App() {
  return <Palette palette={generatePalette(seedColors[2])} />;
}

export default App;
