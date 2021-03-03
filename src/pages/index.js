export default function Index() {
    return (
        <article className="row">
            <div className="col s12 m8 offset-m2 white-text">
                <div className="card blue-grey darken-4 horizontal hide-on-small-only">
                    <img src="./assets/images/logo.png" className="card-image horizontal-image" />
                    <div className="card-stacked">
                        <div className="card-content">
                            <h1 className="card-title">About Me</h1>
                            <hr />
                            <br />
                            <p>Josh Wee (He/Him)</p>
                            <p>Age: <span className="age-display"></span></p>
                            <br />
                            <p>I'm a self-taught computer programmer with a background in Javascript and C++. I mostly do back-end projects related to bots and automation, but occasionally I take requests for other projects. I am also on track to become a full-stack web developer.</p>
                            <br />
                            <p>Other than programming, I am also a pianist, fledgling writer, and image editor.</p>
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
                    <img src="./assets/images/logo.png" className="card-image vertical-image" />
                    <div className="card-content">
                        <p>Josh Wee (He/Him)</p>
                        <p>Age: <span className="age-display"></span></p>
                        <br />
                        <p>I'm a self-taught computer programmer with a background in Javascript and C++. I mostly do back-end projects related to bots and automation, but occasionally I take requests for other projects. I am also on track to become a full-stack web developer.</p>
                        <br />
                        <p>Other than programming, I am also a pianist, fledgling writer, and image editor.</p>
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
