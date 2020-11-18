(function() { // Enclose scope
    const birthday = new Date("7/9/1998");

    // Auto birthday display
    $(".age-display").text((function() {
        let now = new Date();
        return now.getFullYear() - birthday.getFullYear() - (birthday.getMonth() < now.getMonth() || (birthday.getMonth() == now.getMonth() && birthday.getDate() <= now.getDate()) ? 0 : 1);
    })());
})();
