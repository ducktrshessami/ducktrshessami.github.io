import { useState } from "react";
import Auth from "../../components/Auth";
import MessageList from "../../components/MessageList";
import Loading from "../../components/Loading";
import ErrorCard from "../../components/ErrorCard";
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

    function handleState() {
        if (error) {
            return <ErrorCard message={error} />;
        }
        else if (messages.length) {
            return <MessageList messages={messages} />
        }
        else if (key) {
            return <Loading />;
        }
        else {
            return <Auth onSubmit={getMessages} />;
        }
    }

    return (
        <section className="row">
            <div className="col s12 m8 offset-m2 l6 offset-l3">
                {handleState()}
            </div>
        </section>
    );
};
