import M from "materialize-css";
import { useState } from "react";
import Loading from "../../components/Loading";
import API from "../../utils/API";
import "./Contact.css";

const postToastDuration = 3;

function toastMessage(text) {
    return {
        html: `<h5 class='hide-on-small-only'>${text}</h5>`,
        classes: "blue-grey darken-2 text-white",
        displayLength: postToastDuration * 1000
    };
}

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

export default function Contact() {
    const [loading, setLoading] = useState(false);

    function submit(event) {
        let form = document.getElementById("contact-form");
        let values = getValues(form);
        event.preventDefault();
        if (validate(values)) {
            setLoading(true);
            API.sendMessage(values)
                .then(res => {
                    setLoading(false);
                    if (res.ok) {
                        form.reset();
                        M.toast(toastMessage("Message posted!"));
                    }
                    else {
                        M.toast(toastMessage("Could not post message"));
                    }
                })
                .catch(console.error);
        }
    }

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
                            <div className="row submit-wrapper">
                                <div className="row col s12 m6">
                                    <button type="submit" form="contact-form" id="submit" className="btn waves-effect waves-dark black-text submit-button col" onClick={submit}>Submit</button>
                                    {loading ? <Loading size="small" className="col" /> : undefined}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
