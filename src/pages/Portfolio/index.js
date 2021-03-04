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

    button() {
        if (this.state.shown.length !== this.state.all.length) {
            return (
                <div id="more-button-container" class="center">
                    <button id="more-button" class="btn-large black-text">Show More</button>
                </div>
            )
        }
    }

    render() {
        return (
            <section class="row">
                <div class="col s12 m8 offset-m2">
                    <ul id="portfolio-list">{this.state.shown.map(Project)}</ul>
                    {this.button()}
                </div>
            </section>
        );
    }
}
