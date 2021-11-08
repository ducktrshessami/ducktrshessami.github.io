import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/" element={<About />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
