const endpoint = "https://ducktrshessami-portfolio-api.herokuapp.com/projects";
const API = {
    getAll
};

function getAll() {
    return fetch(endpoint)
        .then(res => res.json());
}

export default API;
