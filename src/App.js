import {
  HashRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import projectList from "./projectList.json";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Switch>
            <Route path="/portfolio">
              <Portfolio projects={projectList} />
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
