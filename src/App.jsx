import { Route, Switch } from "react-router-dom";
import Palette from "./components/Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./helpers/colors";

function App() {
  const findPalette = (id) => seedColors.find((palette) => palette.id === id);

  return (
    <Switch>
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route
        exact
        path="/palette/:id"
        render={(routerProps) => (
          <Palette
            palette={generatePalette(findPalette(routerProps.match.params.id))}
          />
        )}
      />
    </Switch>
  );
}

export default App;
