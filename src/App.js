import "./App.css";
import NetflixApp from "./components/NetflixApp";
import NetflixLogin from "./components/NetflixLogin";
import PrivateRoute from "./components/PrivateRoute";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <PrivateRoute component={NetflixApp} path="/main" />
          
          <Route path="/">
            <NetflixLogin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
