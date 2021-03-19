import { useState } from "react";
import Auth from "../../components/Auth";
import MessageList from "../../components/MessageList";
import API from "../../utils/API";

export default function Messages() {
    const [key, setKey] = useState("");
    const [error, setError] = useState("");
    const [messages, setMessages] = useState([]);

    function getMessages(key) {
        setKey(key);
        API.messages.getAll(key)
            .then(setMessages)
            .catch(err => {
                console.error(err);
                setError("Failed to fetch messages");
            });
    }

    return (
        <section className="row">
            <div className="col s12 m8 offset-m2 l6 offset-l3">
                {key ? undefined : <Auth onSubmit={getMessages} />}
            </div>
        </section>
    );
};
