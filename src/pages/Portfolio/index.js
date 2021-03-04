import { Component } from "react";
import Project from "../../components/Project";
import "./Portfolio.css";

const initialProjects = 6; // Number of projects displayed initially
const clickMeSeconds = 5; // Number of seconds the intial help message is shown

export default class Portfolio extends Component {
    state = {
        shown: this.props.projects.slice(0, initialProjects),
        all: this.props.projects
    }

    componentDidMount() {

    }

    render() {
        return (
            <section class="row">
                <div class="col s12 m8 offset-m2">
                    <ul id="portfolio-list">{this.state.shown.map(Project)}</ul>
                </div>
            </section>
        );
    }
}
