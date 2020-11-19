(function() { // Enclose scope
    const listEl = $("#portfolio-list");
    const list = [
        {
            title: "scdl-core",
            description: "A lightweight SoundCloud downloading module for Node.js",
            langs: ["js"],
            url: "https://github.com/ducktrshessami/scdl-core"
        },
        {
            title: "Up Next",
            description: "A web application to locate local shows",
            langs: ["js", "html", "css"],
            url: "https://github.com/ducktrshessami/up-next"
        },
        {
            title: "Weather Dashboard",
            description: `
                A centralized dashboard to keep track of multiple locations' weather conditions
                Weather condition data and icons by OpenWeather
            `,
            langs: ["js", "html", "css"],
            url: "https://github.com/ducktrshessami/weather-dashboard"
        },
        {
            title: "Work Day Scheduler",
            description: `
                A day planner for a single day's business hours.
                Time blocks are color-coded relative to the current time.
                Notes can be saved and stored locally.
            `,
            langs: ["js", "html", "css"],
            url: "https://github.com/ducktrshessami/work-day-scheduler"
        }
    ];
    const langImgs = {
        js: "https://img.shields.io/badge/javascript-%23323330.svg?&style=flat-square&logo=javascript&logoColor=%23F7DF1E",
        html: "https://img.shields.io/badge/html5-%23E34F26.svg?&style=flat-square&logo=html5&logoColor=white",
        css: "https://img.shields.io/badge/css3-%231572B6.svg?&style=flat-square&logo=css3&logoColor=white"
    }

    list.forEach(project => listEl.append(portfolioCard(project)));

    /*
    Create a card given a portfolio item's information

    @param data: an object containing {
        title: string,
        image: a string containing an image URL,
        description: string,
        langs: an Array<string> containing a list of programming languages used
        url: string
    }

    @return a jQuery object containing the created element
    */
    function portfolioCard(data) {
        let parsedDesc = data.description.trim().split('\n').map(line => `<p>${line.trim()}</p>`).join("\n<br>\n");
        let parsedLangs = data.langs.map(lang => `<li class="lang"><img src="${langImgs[lang.trim()]}" alt="${lang.trim()}"></li>`).join('\n');
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
