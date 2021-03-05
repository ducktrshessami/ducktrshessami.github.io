import { Component } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";
import Sidenav from "./Sidenav";

import "./Header.css";

export default class Header extends Component {
    componentDidMount() {
        M.Sidenav.init(document.getElementById("sidenav"), { edge: "right" });
    }

    render() {
        return (
            <header>
                <nav className="nav-wrapper">
                    <Link to="/" className="left hide-on-small-only">
                        <img src="/logo192.png" alt="Logo" className="logo circle middle" />
                        <span {...(this.props.route === "/" ? { className: "active"} : undefined)}>ducktrshessami</span>
                    </Link>
                    <ul className="left hide-on-small-only">
                        <li><Link {...(this.props.route === "/portfolio" ? { className: "active"} : undefined)} to="/portfolio">Portfolio</Link></li>
                        <li><Link {...(this.props.route === "/contact" ? { className: "active"} : undefined)} to="/contact">Contact</Link></li>
                    </ul>
                    <span className="brand-logo center hide-on-med-and-up">About Me</span>
                    <div role="button" data-target="sidenav" className="sidenav-trigger right hide-on-med-and-up"><i className="material-icons">menu</i></div>
                </nav>
                <Sidenav />
            </header>
        );
    }
};
