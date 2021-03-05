import Lang from "./Lang";
import "./Project.css";

function parseDescription(description) {
    let elems = [], lines = description.trim().split("\n");
    for (let i = 0; i < lines.length; i++) {
        elems.push(<p key={i}>{lines[i]}</p>);
        elems.push(<br key={`${i}-br`} />)
    }
    return elems;
}

export default function Project({ title, description, langs, url }) {
    return (
        <li className="portfolio-item">
            <a href={url} className="project-card card blue-grey darken-4 white-text waves-effect waves-dark">
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <hr />
                    <br />
                    {parseDescription(description)}
                    <hr />
                    <ul className="project-langs">
                        {langs.map(lang => <Lang key={lang.trim()} lang={lang.trim()} />)}
                    </ul>
                </div>
            </a>
        </li>
    );
};
