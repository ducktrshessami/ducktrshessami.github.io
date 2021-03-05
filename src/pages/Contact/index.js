import "./Contact.css";

export default function Contact() {
    return (
        <section class="row">
            <div class="card blue-grey darken-4 white-text col s12 m8 offset-m2 l6 offset-l3">
                <div class="card-content">
                    <div class="hide-on-small-only">
                        <h1 class="card-title">Contact</h1>
                        <hr />
                        <br />
                    </div>
                    <form id="contact-form">
                        <div class="input-field">
                            <input type="text" id="name" name="name" class="validate white-text" />
                            <label for="name">Name</label>
                        </div>
                        <div class="input-field">
                            <input type="text" name="email" id="email" class="validate white-text" />
                            <label for="email">E-Mail</label>
                        </div>
                        <div class="input-field">
                            <textarea name="message" id="message" class="materialize-textarea validate white-text"></textarea>
                            <label for="message">Message</label>
                        </div>
                        <button type="submit" form="contact-form" id="submit" class="btn waves-effect waves-dark black-text">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};
