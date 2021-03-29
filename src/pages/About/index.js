import Bio from "../../components/Bio";
import "./About.css";

export default function About() {
    let logoUrl = process.env.PUBLIC_URL + "/logo512.png";
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
                            <Bio />
                        </div>
                        <ul className="card-content">
                            <li><a href="https://github.com/ducktrshessami">GitHub</a></li>
                            <li><a href="https://greasyfork.org/en/users/3488-ducktrshessami">Greasy Fork</a></li>
                            <li><a href="https://www.linkedin.com/in/josh-wee-b90455106/">LinkedIn</a></li>
                            <li>Email: <a href="mailto:jwee761@gmail.com">jwee761@gmail.com</a></li>
                            <li>Discord: ducktrshessami#4884</li>
                        </ul>
                    </div>
                </div>
                <div className="card blue-grey darken-4 hide-on-med-and-up">
                    <img src={logoUrl} alt="Logo" className="card-image vertical-image" />
                    <div className="card-content">
                        <Bio />
                    </div>
                    <ul className="card-content">
                        <li><a href="https://github.com/ducktrshessami">GitHub</a></li>
                        <li><a href="https://greasyfork.org/en/users/3488-ducktrshessami">Greasy Fork</a></li>
                        <li><a href="https://www.linkedin.com/in/josh-wee-b90455106/">LinkedIn</a></li>
                        <li>Email: <a href="mailto:jwee761@gmail.com">jwee761@gmail.com</a></li>
                        <li>Discord: ducktrshessami#4884</li>
                    </ul>
                </div>
            </div>
        </article>
    );
};
