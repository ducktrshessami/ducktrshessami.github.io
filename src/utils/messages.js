const endpoint = "https://ducktrshessami-portfolio-api.herokuapp.com/messages";
const API = {
    postNew
};

function postNew(messageData) {
    return fetch(endpoint, {
        method: "post",
        body: JSON.stringify(messageData),
        headers: { "Content-Type": "application/json" }
    });
}

export default API;
