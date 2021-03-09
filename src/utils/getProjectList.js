import phin from "phin";

const gistID = "4d17eadd865d741676be7db15d4a7847";
const gistEndpoint = "https://api.github.com/gists";

export default function getProjectList() {
    return phin({
        url: gistEndpoint + "/" + gistID,
        parse: "json"
    })
        .then(res => res.body);
};
