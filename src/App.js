import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Home from "./pages/Home";
import QRgen from "./pages/QRgenerator";
import QRscan from "./pages/QRscanner";
import ButtonAppBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <div className="App-header">
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/qr_generator">
                <QRgen />
              </Route>
              <Route path="/qr_scanner">
                <QRscan />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
