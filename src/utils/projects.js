const endpoint = "https://ducktrshessami-portfolio-api.herokuapp.com/projects";
const API = {
    getAll,
    addOne,
    bulkAdd
};

function getAll() {
    return fetch(endpoint)
        .then(res => res.json());
}

function addOne(projectData) {
    return fetch(endpoint + `?key=${key}`, {
        method: "post",
        body: JSON.stringify(projectData),
        headers: { "Content-Type": "application/json" }
    });
}

function bulkAdd(projectDataList, key) {
    return fetch(endpoint + `/all?key=${key}`, {
        method: "post",
        body: JSON.stringify(projectDataList),
        headers: { "Content-Type": "application/json" }
    });
}

export default API;
