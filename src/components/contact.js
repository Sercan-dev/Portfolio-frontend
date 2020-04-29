import React from 'react';
import emailjs from 'emailjs-com';





export default function FormPage() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_GntjsYzE', e.target, 'user_zQMNMx8247QyBzMah7QG7')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <div className="contact-form">
            <h1>Message me</h1>
            <form  onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="from_name" />
                <label>Email</label>
                <input type="email" name="user_email" />
                <label>Message</label>
                <textarea name="message_html" />
                <button type="submit" value="Send"> SEND</button>
            </form>
        </div>
    );
}