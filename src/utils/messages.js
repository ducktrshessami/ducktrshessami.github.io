const endpoint = "https://ducktrshessami-portfolio-api.herokuapp.com/messages";
const API = {
    getAll,
    postNew,
    deleteById,
    deleteAll
};

function getAll(key) {
    return fetch(endpoint + `?key=${key}`)
        .then(res => res.json());
}

function postNew(messageData) {
    return fetch(endpoint, {
        method: "post",
        body: JSON.stringify(messageData),
        headers: { "Content-Type": "application/json" }
    });
}

function deleteById(id, key) {
    return fetch(endpoint + `/${id}?key=${key}`, { method: "delete" });
}

function deleteAll(key) {
    return fetch(endpoint + `/all?key=${key}`, { method: "delete" });
}

export default API;
