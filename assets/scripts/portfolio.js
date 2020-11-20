(function() { // Enclose scope
    const initialProjects = 6; // Number of projects displayed initially
    const projectList = [ // Project data
        {
            title: "scdl-core",
            description: "A lightweight SoundCloud downloading module for Node.js",
            langs: ["js"],
            url: "https://github.com/ducktrshessami/scdl-core"
        },
        {
            title: "scdl",
            description: "A command line interface for scdl",
            langs: ["js"],
            url: "https://github.com/ducktrshessami/scdl"
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
        },
        {
            title: "Facebook Unsponsored",
            description: "A supplement for an adblocker on Facebook",
            langs: ["js"],
            url: "https://greasyfork.org/en/scripts/371822-facebook-unsponsored"
        }
    ];
    const langImgs = { // Language badge URLs
        js: "https://img.shields.io/badge/JavaScript-%23323330.svg?&style=flat-square&logo=javascript&logoColor=%23F7DF1E",
        html: "https://img.shields.io/badge/HTML5-%23E34F26.svg?&style=flat-square&logo=html5&logoColor=white",
        css: "https://img.shields.io/badge/CSS3-%231572B6.svg?&style=flat-square&logo=css3&logoColor=white"
    }

    const listEl = $("#portfolio-list");

    /*
    Initialize the page with portfolio items
    */
    function initPage() {
        for (let i = 0; i < Math.min(projectList.length, initialProjects); i++) {
            listEl.append(portfolioCard(projectList[i]));
        }
        if (projectList.length > initialProjects) { // If more than initial display
            listEl.after(`
                <div id="more-button-container" class="center">
                    <button id="more-button" class="btn-large black-text">Show More</button>
                </div>
            `);
            $("#more-button").click(showMore);
        }
        checkNewUser();
    }

    /*
    Display a "Click me!" if user hasn't been here before
    */
    function checkNewUser() {
        let check = localStorage.getItem("portfolioReturningUser");
        if (!check) {
            localStorage.setItem("portfolioReturningUser", true);
            M.toast({
                html: `
                    <h5 class="hide-on-small-only">Click on an item to be taken to its repository!</h5>
                    <h5 class="hide-on-med-and-up">Tap on an item to be taken to its repository!</h5>
                `,
                classes: "blue-grey darken-3 text-white"
            });
        }
    }

    /*
    Show the rest of the portfolio items and remove the button
    */
    function showMore() {
        $("#more-button-container").remove();
        for (let i = initialProjects; i < projectList.length; i++) {
            listEl.append(portfolioCard(projectList[i]));
        }
    }

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
                <a href="${data.url}" class="portfolio-card card blue-grey darken-4 white-text waves-effect waves-dark">
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

    initPage();
})();
