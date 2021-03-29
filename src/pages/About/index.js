import { useState } from "react";
import Bio from "../../components/Bio";
import Socials from "../../components/Socials";
import API from "../../utils/API";
import "./About.css";

export default function About() {
    const [bioText, setBioText] = useState("");
    let logoUrl = process.env.PUBLIC_URL + "/logo512.png";

    API.getBio()
        .then(setBioText)
        .catch(console.error);

    return (
        <article className="row">
            <div className="col s12 m8 offset-m2 white-text">
                <div className="card blue-grey darken-4 horizontal hide-on-small-only">
                    <img src={logoUrl} alt="Logo" className="card-image horizontal-image" />
                    <div className="card-stacked">
                        <div className="card-content">
                            <h1 className="card-title">About Me</h1>
                            <hr />
                            <br />
                            <Bio text={bioText} />
                        </div>
                        <Socials />
                    </div>
                </div>
                <div className="card blue-grey darken-4 hide-on-med-and-up">
                    <img src={logoUrl} alt="Logo" className="card-image vertical-image" />
                    <div className="card-content">
                        <Bio text={bioText} />
                    </div>
                    <Socials />
                </div>
            </div>
        </article>
    );
};
