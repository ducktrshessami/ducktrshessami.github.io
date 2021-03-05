import "./Lang.css";

const langImgs = {
    js: "https://img.shields.io/badge/JavaScript-%23323330.svg?&style=flat-square&logo=javascript&logoColor=%23F7DF1E",
    html: "https://img.shields.io/badge/HTML5-%23E34F26.svg?&style=flat-square&logo=html5&logoColor=white",
    css: "https://img.shields.io/badge/CSS3-%231572B6.svg?&style=flat-square&logo=css3&logoColor=white",
    mysql: "https://img.shields.io/badge/MySQL-%23003B57.svg?&style=flat-square&logo=mysql&logoColor=white",
    mongodb: "https://img.shields.io/badge/MongoDB-%2347A248.svg?&style=flat-square&logo=mongodb&logoColor=white",
    cpp: "https://img.shields.io/badge/C%2FC%2B%2B-%2300599C.svg?&style=flat-square&logo=C%2B%2B&logoColor=white",
    react: "https://img.shields.io/badge/React-%2320232a.svg?&style=flat-square&logo=react&logoColor=%2361DAFB"
};

export default function Lang({ lang }) {
    return (
        <li className="lang">
            <img src={langImgs[lang]} alt={lang} />
        </li>
    );
}
