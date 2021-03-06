import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/portfolio">
            <Header route="/portfolio" />
          </Route>
          <Route path="/contact">
            <Header route="/contact" />
          </Route>
          <Route path="/">
            <Header route="/" />
          </Route>
        </Switch>
        <main>
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
