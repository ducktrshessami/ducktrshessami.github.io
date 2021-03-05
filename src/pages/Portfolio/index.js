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

    }

    buttons() {
        if (this.state.shown < this.state.projects.length) {
            return (
                <div id="more-button-container" className="center">
                    <button id="more-button" className="btn-large black-text" onClick={this.showMore}>Show More</button>
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
