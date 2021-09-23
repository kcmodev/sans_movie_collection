import './App.css';
import LandingPage from "./components/LandingPage";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
  return (
      <Router>
          <div className="App">
              <Switch>
                  <Route exact path={'/'} component={LandingPage} />
                  <Route component={Routes} />
              </Switch>
          </div>
      </Router>
  );
}

export default App;
