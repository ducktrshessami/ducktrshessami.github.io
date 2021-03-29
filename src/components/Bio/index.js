const birthday = new Date("7/9/1998");

function parseText(text) {
    let elems = [];
    let lines = text.trim().split("\n");
    lines.forEach((line, i) => {
        elems.push(<br key={`${i}-br`} />);
        elems.push(<p key={i}>{line.trim()}</p>);
    });
    return elems;
}

export default function Bio({ text = "" }) {
    let now = new Date();
    let age = now.getFullYear() - birthday.getFullYear() - (birthday.getMonth() < now.getMonth() || (birthday.getMonth() === now.getMonth() && birthday.getDate() <= now.getDate()) ? 0 : 1);
    return (
        <article>
            <p>Josh Wee (He/Him)</p>
            <p>Age: {age}</p>
            {parseText(text)}
        </article>
    );
};
