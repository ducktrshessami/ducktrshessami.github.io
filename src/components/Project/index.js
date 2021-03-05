import Lang from "./Lang";

export default function Project({ title, description, langs, url }) {
    let parsedDesc = description.trim().split('\n').map(line => `<p>${line.trim()}</p>`).join("\n<br>\n");
    return (
        <li class="portfolio-item">
            <a href={url} class="portfolio-card card blue-grey darken-4 white-text waves-effect waves-dark">
                <div class="card-content">
                    <h3 class="card-title">{title}</h3>
                    <hr />
                    <br />
                    {parsedDesc}
                    <br />
                    <hr />
                    <ul class="project-langs">
                        {langs.map(lang => <Lang lang={lang.trim()} />)}
                    </ul>
                </div>
            </a>
        </li>
    );
};
