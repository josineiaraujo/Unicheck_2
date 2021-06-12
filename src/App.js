import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import QRgen from "./pages/QRgenerator";
import QRscan from "./pages/QRscanner";
import ButtonAppBar from "./components/TopBar";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <div className="App-header">
        <Router>
          <div>
            <AnimatePresence exitBeforeEnter>
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
            </AnimatePresence>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
