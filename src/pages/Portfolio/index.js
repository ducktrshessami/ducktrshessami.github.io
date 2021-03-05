import { Component } from "react";
import Project from "../../components/Project";
import "./Portfolio.css";

const initialProjects = 6; // Number of projects displayed initially
const projectIncrement = 6; // Project display increase per button press
const clickMeSeconds = 5; // Number of seconds the intial help message is shown

export default class Portfolio extends Component {
    state = {
        shown: initialProjects,
        projects: this.props.projects
    }

    showMore() {
        this.setState({
            shown: this.state.shown + projectIncrement,
            projects: this.state.projects
        });
    }
    
    showAll() {
        this.setState({
            shown: this.state.projects.length,
            projects: this.state.projects
        });
    }

    buttons() {
        if (this.state.shown < this.state.projects.length) {
            return (
                <div className="center">
                    <button id="more-button" className="portfolio-button btn-large black-text" onClick={() => this.showMore()}>Show More</button>
                    <button id="all-button" className="portfolio-button btn-large black-text" onClick={() => this.showAll()}>Show All</button>
                </div>
            )
        }
    }

    render() {
        return (
            <section className="row">
                <div className="col s12 m8 offset-m2">
                    <ul id="portfolio-list">
                        {this.state.projects
                            .slice(0, this.state.shown)
                            .map(project => <Project key={project.title} {...project} />)
                        }
                    </ul>
                    {this.buttons()}
                </div>
            </section>
        );
    }
}
