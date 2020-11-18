// Only allow submitting when ready
$(document).ready(function() {
    const nameEl = $("#name");
    const emailEl = $("#email");
    const messageEl = $("#message");

    // Only submit when the button is clicked
    $("#submit").click(function(event) {
        event.preventDefault(); // No PHP here

        if (validateForm()) {
            //post message
        }
    });

    /*
    Check whether all inputs are filled

    @return Boolean
    */
    function validateForm() {
        return nameEl.val().trim() && emailEl.val().trim() && messageEl.val().trim();
    }
});
