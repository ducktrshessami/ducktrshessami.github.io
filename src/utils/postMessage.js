export default function postMessage(data) {
    return fetch("https://ducktrshessami-portfolio-api.herokuapp.com/messages", {
        method: "post",
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' }
    });
};
