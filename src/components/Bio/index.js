const birthday = new Date("7/9/1998");

export default function Bio() {
    let now = new Date();
    let age = now.getFullYear() - birthday.getFullYear() - (birthday.getMonth() < now.getMonth() || (birthday.getMonth() === now.getMonth() && birthday.getDate() <= now.getDate()) ? 0 : 1);
    return (
        <article>
            <p>Josh Wee (He/Him)</p>
            <p>Age: {age}</p>
            <br />
            <p>I'm a self-taught computer programmer with a background in Javascript and C++. I mostly do back-end projects related to bots and automation, but occasionally I take requests for other projects.</p>
            <br />
            <p>I am also a full-stack web developer who has worked with React, MySql, and MongoDB.</p>
            <br />
            <p>Other than a programmer, I am a pianist, fledgling writer, and image editor.</p>
        </article>
    );
};
