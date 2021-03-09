import https from "https";

const gistID = "4d17eadd865d741676be7db15d4a7847";
const gistEndpoint = "https://api.github.com/gists";

export default function getProjectList() {
    return new Promise((resolve, reject) => {
        https.get(gistEndpoint + "/" + gistID, res => {
            let output = "";
            res.on("data", chunk => output += chunk);
            res.on("end", () => resolve(output));
            res.on("error", reject);
        });
    })
        .then(JSON.parse)
        .then(res => res.files["portfolio.json"].content)
        .then(JSON.parse);
};
