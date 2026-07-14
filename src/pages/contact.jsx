import { useState } from "react";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState("");

    const sendEmail = () => {
        const subject = `New Message from ${name}`;

        const body =
            `
        Name: ${name}
        Email: ${email}

        Message:
        ${message}
        `;

        const mailto = `mailto:Ganfoodbank@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        window.open(mailto, "_blank", "noopener noreferrer");
    }

    return (
        <div className="aboutDiv">
            <title>Contact Us</title>
            <div className="infoCard">
                <h1>Contact Us</h1>
                <div>
                    <h3>Name: <br/> <input className="emailInput" type="text" placeholder="Enter Name..." onChange={(e) => setName(e.target.value)} /></h3>
                    <h3>Email: <br/> <input type="email" className="emailInput" placeholder="Enter Email..." onChange={ (e) => setEmail(e.target.value)} /></h3>
                    <h3>Message: <br/> <textarea className="emailInput" placeholder="Enter Message..." onChange={ (e) => setMessage(e.target.value)} /></h3>
                    <button className="sendEmail" onClick={sendEmail}>Send Email</button>
                </div>
            </div>
        </div>
    );
}

export default Contact;