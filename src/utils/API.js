const URL = "https://ducktrshessami-portfolio-api.herokuapp.com";

const API = {
    getLangs: function () {
        return fetch(URL + "/langs")
            .then(res => res.json());
    },
    getProjects: function () {
        return fetch(URL + "/projects")
            .then(res => res.json());
    }
};

export default API;
