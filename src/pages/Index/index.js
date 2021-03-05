import "./Index.css";

const birthday = new Date("7/9/1998");

export default function Index() {
    let now = new Date();
    let age = now.getFullYear() - birthday.getFullYear() - (birthday.getMonth() < now.getMonth() || (birthday.getMonth() === now.getMonth() && birthday.getDate() <= now.getDate()) ? 0 : 1);

    return (
        <article className="row">
            <div className="col s12 m8 offset-m2 white-text">
                <div className="card blue-grey darken-4 horizontal hide-on-small-only">
                    <img src="/logo512.png" alt="Logo" className="card-image horizontal-image" />
                    <div className="card-stacked">
                        <div className="card-content">
                            <h1 className="card-title">About Me</h1>
                            <hr />
                            <br />
                            <p>Josh Wee (He/Him)</p>
                            <p>Age: {age}</p>
                            <br />
                            <p>I'm a self-taught computer programmer with a background in Javascript and C++. I mostly do back-end projects related to bots and automation, but occasionally I take requests for other projects.</p>
                            <br />
                            <p>I am also a full-stack web developer who has worked with React, MySql, and MongoDB.</p>
                            <br />
                            <p>Other than a programmer, I am a pianist, fledgling writer, and image editor.</p>
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
                    <img src="/logo512.png" alt="Logo" className="card-image vertical-image" />
                    <div className="card-content">
                        <p>Josh Wee (He/Him)</p>
                        <p>Age: {age}</p>
                        <br />
                        <p>I'm a self-taught computer programmer with a background in Javascript and C++. I mostly do back-end projects related to bots and automation, but occasionally I take requests for other projects.</p>
                        <br />
                        <p>I am also a full-stack web developer who has worked with React, MySql, and MongoDB.</p>
                        <br />
                        <p>Other than a programmer, I am a pianist, fledgling writer, and image editor.</p>
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
