const URL = "https://ducktrshessami-portfolio-api.herokuapp.com";

const API = {
    sendMessage: function (messageData) {
        return fetch(URL + "/message", {
            method: "post",
            body: JSON.stringify(messageData),
            headers: { "Content-Type": "application/json" }
        });
    },
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
