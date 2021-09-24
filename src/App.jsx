import Home from "./pages/Home";
import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TopBar />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
