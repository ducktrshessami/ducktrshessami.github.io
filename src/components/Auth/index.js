export default function Auth({ onSubmit }) {
    function submitWrapper(event) {
        event.preventDefault();
        let password = document.getElementById("password").value.trim();
        if (password) {
            onSubmit(password);
        }
    }

    return (
        <div className="card blue-grey darken-4 white-text">
            <div className="card-content">
                <form id="contact-form" onSubmit={submitWrapper}>
                    <div className="input-field">
                        <input type="text" id="password" name="password" className="validate white-text" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <button type="submit" form="contact-form" className="btn waves-effect waves-dark black-text submit-button">Authorize</button>
                </form>
            </div>
        </div>
    );
};
