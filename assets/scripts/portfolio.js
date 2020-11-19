(function() { // Enclose scope
    const listEl = $("#portfolio-list");
    const list = [
        {
            title: "scdl",
            description: "A lightweight SoundCloud downloading module for Node.js",
            url: "https://github.com/ducktrshessami/scdl"
        }
    ];
    
    list.forEach(project => listEl.append(portfolioCard(project)));
    
    /*
    */
    function portfolioCard(data) {
        let parsedDesc = data.description.trim().split('\n').map(line => `<p>${line}</p>`).join('\n');
        return $(`
            <li>
                <a href="${data.url}" class="card blue-grey darken-4 white-text col s12 m6 l4">
                    <div class="card-content">
                        <h3 class="card-title">${data.title}</h3>
                        <hr>
                        <br>
                        ${parsedDesc}
                    </div
                </a>
            </li>
        `);
    }
})();
