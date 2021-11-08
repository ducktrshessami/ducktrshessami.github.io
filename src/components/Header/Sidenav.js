import React, { Component } from "react";
import {
    Routes,
    Route,
    Link
} from "react-router-dom";
import M from "materialize-css";
import "./Sidenav.css";

export default class Sidenav extends Component {
    state = { instance: null }

    componentDidMount() {
        this.setState({
            instance: M.Sidenav.init(document.getElementById("sidenav"), { edge: "right" })
        });
    }

    clicked() {
        this.state.instance.close();
    }

    render() {
        return (
            <ul id="sidenav" className="sidenav">
                <Routes>
                    <Route path="/portfolio" element={<React.Fragment>
                        <li><Link to="/" onClick={() => this.clicked()}>About Me</Link></li>
                        <li><span className="disabled">Portfolio</span></li>
                    </React.Fragment>} />
                    <Route path="/" element={<React.Fragment>
                        <li><span className="disabled">About Me</span></li>
                        <li><Link to="/portfolio" onClick={() => this.clicked()}>Portfolio</Link></li>
                    </React.Fragment>} />
                </Routes>
            </ul>
        );
    }
};
