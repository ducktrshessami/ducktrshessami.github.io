import { Component } from "react";
import Bio from "../../components/Bio";
import Socials from "../../components/Socials";
import bioFile from "../../bio";
import "./About.css";

export default class About extends Component {
    state = {
        logoUrl: process.env.PUBLIC_URL + "/logo512.png",
        bioText: "",
        errorText: ""
    }

    componentDidMount() {
        fetch(bioFile)
            .then(res => {
                if (res.ok) {
                    return res.text()
                }
            })
            .then((bio = "") => this.setState({
                ...this.state,
                bioText: bio
            }))
            .catch(err => {
                console.error(err);
                this.setState({
                    ...this.state,
                    errorText: "Could not fetch bio"
                });
            });
    }

    render() {
        return (
            <article className="row">
                <div className="col s12 m8 offset-m2 white-text">
                    <div className="card blue-grey darken-4 horizontal hide-on-small-only">
                        <img src={this.state.logoUrl} alt="Logo" className="card-image horizontal-image" />
                        <div className="card-stacked">
                            <div className="card-content">
                                <h1 className="card-title">About Me</h1>
                                <hr />
                                <br />
                                <Bio text={this.state.errorText || this.state.bioText} />
                            </div>
                            <Socials />
                        </div>
                    </div>
                    <div className="card blue-grey darken-4 hide-on-med-and-up">
                        <img src={this.state.logoUrl} alt="Logo" className="card-image vertical-image" />
                        <div className="card-content">
                            <Bio text={this.state.errorText || this.state.bioText} />
                        </div>
                        <Socials />
                    </div>
                </div>
            </article>
        );
    }
}
