import Lang from "./Lang";
import "./Project.css";

export default function Project({ title, description, langs, url }) {
    let parsedDesc = description.trim().split('\n').map(line => `<p>${line.trim()}</p>`).join("\n<br>\n");
    return (
        <li className="portfolio-item">
            <a href={url} className="portfolio-card card blue-grey darken-4 white-text waves-effect waves-dark">
                <div className="card-content">
                    <h3 className="card-title">{title}</h3>
                    <hr />
                    <br />
                    {parsedDesc}
                    <br />
                    <hr />
                    <ul className="project-langs">
                        {langs.map(lang => <Lang key={lang.trim()} lang={lang.trim()} />)}
                    </ul>
                </div>
            </a>
        </li>
    );
};
