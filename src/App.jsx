import Palette from "./components/Palette";
import { Route, Switch } from "react-router-dom";
import { generatePalette } from "./helpers/colors";
import seedColors from "./seedColors";

function App() {
  // return <Palette palette={generatePalette(seedColors[2])} />;
  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route exact path="/palette/:id" render={() => <h1>Palette</h1>} />
    </Switch>
  );
}

export default App;
