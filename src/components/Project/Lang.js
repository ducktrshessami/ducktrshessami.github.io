import "./Lang.css";

export default function Lang({ lang, url }) {
    return (
        <li className="lang">
            <img src={url} alt={lang} />
        </li>
    );
}
