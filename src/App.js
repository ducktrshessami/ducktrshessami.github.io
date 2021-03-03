import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Index from "./pages/index";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Index />
            </Route>
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
