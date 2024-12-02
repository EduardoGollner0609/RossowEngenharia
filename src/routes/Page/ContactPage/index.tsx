import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles.css'
import { PUBLIC_ID, SERVICE_ID, TEMPLATE_ID } from '../../../utils/system';
import Location from '../../../components/Location';
import CardEmailSuccess from '../../../components/CardEmailSuccess';


export default function ContactPage() {

    const [name, setName] = useState<string>("");
    const [nameAuthorMessage, setNameAuthorMessage] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [message, setMessage] = useState<string>("");
    const [emailSent, setEmailSent] = useState(false);

    function clearForm() {
        setName("");
        setEmail("");
        setSubject("");
        setMessage("");
    }

    function closeCardSuccess() {
        setEmailSent(false);
        setNameAuthorMessage("");
    }

    const sendEmail = (event: FormEvent) => {

        event.preventDefault();

        setNameAuthorMessage(name);

        const templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message,

        }

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_ID)
            .then(() => {
                setEmailSent(true);
            });

        clearForm();
    }

    return (
        <main>
            <section id="section-contact-page">
                <h2>Contato</h2>
                <form id="contact-form" onSubmit={sendEmail}>
                    <label>Name</label>
                    <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} placeholder='Nome' required />
                    <label>Email</label>
                    <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Email' required />
                    <label>Assunto</label>
                    <input type="text" name="subject" value={subject} onChange={(event) => setSubject(event.target.value)} placeholder='Assunto' />
                    <label>Message</label>
                    <textarea name="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder='Mensagem' required></textarea>
                    <input type="submit" value="Send" />
                </form>
                {
                    emailSent &&
                    <CardEmailSuccess name={nameAuthorMessage} closeCardSuccess={closeCardSuccess} />
                }

                <div className="contact-content">
                    <h3>Telefones</h3>
                    <p>Tel: 027-3317-3754</p>
                    <p>Cel: 027-99872-6089 </p>
                    <h3>Emails: </h3>
                    <p>aquiles@rossowengenharia.com.br</p>
                    <p>contato@rossowengenharia.com.br</p>
                </div>
                <div className="contact-page-location container">
                    <Location />
                </div>
            </section>
        </main>
    )
}
