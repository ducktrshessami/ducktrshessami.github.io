import {
  HashRouter as Router,
  Routes,
  Route
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
        <Routes>
          <Route path="/portfolio" element={<Header route="/portfolio" />} />
          <Route path="/contact" element={<Header route="/contact" />} />
          <Route path="/" element={<Header route="/" />} />
        </Routes>
        <main>
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
