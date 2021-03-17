import M from "materialize-css";
import API from "../../utils/API";
import "./Contact.css";

const postToastDuration = 3;

function getValues({ name, email, message }) {
    return {
        name: name.value,
        email: email.value,
        message: message.value
    };
}

function validate({ name, email, message }) {
    return name && /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email) && message;
}

function submit(event) {
    let form = document.getElementById("contact-form");
    let values = getValues(form);
    event.preventDefault();
    if (validate(values)) {
        API.messages.postNew(values)
            .then(() => {
                form.reset();
                M.toast({
                    html: "<h5 class='hide-on-small-only'>Message posted!</h5>",
                    classes: "blue-grey darken-2 text-white",
                    displayLength: postToastDuration * 1000
                });
            })
            .catch(console.error);
    }
}

export default function Contact() {
    return (
        <section className="row">
            <div className="col s12 m8 offset-m2 l6 offset-l3">
                <div className="card blue-grey darken-4 white-text">
                    <div className="card-content">
                        <div className="hide-on-small-only">
                            <h1 className="card-title">Contact</h1>
                            <hr />
                            <br />
                        </div>
                        <form id="contact-form">
                            <div className="input-field">
                                <input type="text" id="name" name="name" className="validate white-text" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="input-field">
                                <input type="email" name="email" id="email" className="validate white-text" />
                                <label htmlFor="email">E-Mail</label>
                            </div>
                            <div className="input-field">
                                <textarea name="message" id="message" className="materialize-textarea validate white-text"></textarea>
                                <label htmlFor="message">Message</label>
                            </div>
                            <button type="submit" form="contact-form" id="submit" className="btn waves-effect waves-dark black-text" onClick={submit}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
