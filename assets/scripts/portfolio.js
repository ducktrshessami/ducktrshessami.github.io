(function() { // Enclose scope
    const listEl = $("#portfolio-list");
    const list = [
        {
            title: "scdl",
            description: "A lightweight SoundCloud downloading module for Node.js",
            langs: ["js"],
            url: "https://github.com/ducktrshessami/scdl"
        },
        {
            title: "Up Next",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium placeat voluptas odit asperiores dolorem aspernatur illum hic totam debitis voluptatum rerum quibusdam quas reiciendis excepturi optio veniam, blanditiis, labore consequatur!\nLorem ipsum dolor sit amet consectetur adipisicing elit. Natus, incidunt ratione! Blanditiis repudiandae corrupti vero accusantium nisi, saepe, ipsum illo pariatur iure dolorum nemo eveniet. Eius vero iste voluptatibus illum.",
            langs: ["js", "html", "css"],
            url: "https://github.com/ducktrshessami/up-next"
        }
    ];
    const langImgs = {
        js: "https://img.shields.io/badge/javascript-%23323330.svg?&style=flat-square&logo=javascript&logoColor=%23F7DF1E",
        html: "https://img.shields.io/badge/html5-%23E34F26.svg?&style=flat-square&logo=html5&logoColor=white",
        css: "https://img.shields.io/badge/css3-%231572B6.svg?&style=flat-square&logo=css3&logoColor=white"
    }

    list.forEach(project => listEl.append(portfolioCard(project)));

    /*
    */
    function portfolioCard(data) {
        let parsedDesc = data.description.trim().split('\n').map(line => `<p>${line}</p>`).join("\n<br>\n");
        let parsedLangs = data.langs.map(lang => `<li class="lang"><img src="${langImgs[lang]}" alt="${lang}"></li>`).join('\n');
        return $(`
            <li class="portfolio-item">
                <a href="${data.url}" class="portfolio-card card blue-grey darken-4 white-text waves-effect waves-light">
                    <div class="card-content">
                        <h3 class="card-title">${data.title}</h3>
                        <hr>
                        <br>
                        ${parsedDesc}
                        <br>
                        <hr>
                        <ul class="project-langs">
                            ${parsedLangs}
                        </ul>
                    </div>
                </a>
            </li>
        `);
    }
})();
