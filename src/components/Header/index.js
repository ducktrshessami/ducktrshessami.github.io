import { Link, Routes, Route } from "react-router-dom";
import Sidenav from "./Sidenav";

import "./Header.css";

export default function Header({ route }) {
    return (
        <header>
            <nav className="nav-wrapper">
                <Link to="/" className="left hide-on-small-only">
                    <img src={process.env.PUBLIC_URL + "/logo192.png"} alt="Logo" className="logo circle middle" />
                    <span {...(route === "/" ? { className: "active" } : undefined)}>ducktrshessami</span>
                </Link>
                <ul className="left hide-on-small-only">
                    <li><Link {...(route === "/portfolio" ? { className: "active" } : undefined)} to="/portfolio">Portfolio</Link></li>
                </ul>
                <span className="brand-logo center hide-on-med-and-up">
                    <Routes>
                        <Route path="/portfolio">Portfolio</Route>
                        <Route path="/">About Me</Route>
                    </Routes>
                </span>
                <div role="button" data-target="sidenav" className="sidenav-trigger right hide-on-med-and-up"><i className="material-icons">menu</i></div>
            </nav>
            <Sidenav />
        </header>
    );
};
