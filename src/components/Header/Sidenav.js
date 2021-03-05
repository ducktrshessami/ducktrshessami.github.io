import {
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./Sidenav.css";

export default function Sidenav() {
    return (
        <ul id="sidenav" className="sidenav">
            <Switch>
                <Route path="/portfolio">
                    <li><Link to="/">About Me</Link></li>
                    <li><span className="disabled">Portfolio</span></li>
                    <li><Link to="/contact">Contact</Link></li>
                </Route>
                <Route path="/contact">
                    <li><Link to="/">About Me</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><span className="disabled">Contact</span></li>
                </Route>
                <Route path="/">
                    <li><span className="disabled">About Me</span></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </Route>
            </Switch>
        </ul>
    );
};
