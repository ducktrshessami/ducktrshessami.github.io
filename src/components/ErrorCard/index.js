function parseMessage(description) {
    let elems = [], lines = description.trim().split("\n");
    for (let i = 0; i < lines.length; i++) {
        elems.push(<p key={i}>{lines[i]}</p>);
        elems.push(<br key={`${i}-br`} />)
    }
    return elems;
}

export default function ErrorCard({ message }) {
    return (
        <a href={url} className="card blue-grey darken-4 white-text waves-effect waves-dark">
            <div className="card-content">
                <h3 className="card-title">Error</h3>
                <hr />
                <br />
                {parseMessage(description)}
            </div>
        </a>
    );
};
