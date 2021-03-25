const URL = "https://ducktrshessami-portfolio-api.herokuapp.com";

const API = {
    sendMessage: function (messageData) {
        return fetch(URL + "/message", {
            method: "post",
            body: JSON.stringify(messageData),
            headers: { "Content-Type": "application/json" }
        });
    }
};

export default API;
