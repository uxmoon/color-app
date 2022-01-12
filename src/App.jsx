import Palette from "./components/Palette";
import seedColors from "./seedColors";

function App() {
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
