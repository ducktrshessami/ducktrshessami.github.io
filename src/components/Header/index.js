import { Component } from "react";
import {
    Route,
    Link
} from "react-router-dom";
import M from "materialize-css";

import "./Header.css";

export default class Header extends Component {
    render() {
        return (
            <header>
                <nav className="nav-wrapper">
                    <Link to="/" className="left hide-on-small-only">
                        <img src="/logo192.png" alt="Logo" className="logo circle middle" />
                        <span className="active">ducktrshessami</span>
                    </Link>
                    <ul className="left hide-on-small-only">
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                    <span className="brand-logo center hide-on-med-and-up">About Me</span>
                    <a role="button" data-target="sidenav" className="sidenav-trigger right hide-on-med-and-up"><i className="material-icons">menu</i></a>
                </nav>
                <ul id="sidenav" className="sidenav">
                    <li><Link className="disabled">About Me</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </header>
        );
    }
};
