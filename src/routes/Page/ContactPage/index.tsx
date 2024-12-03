import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import './styles.css'
import { PUBLIC_ID, SERVICE_ID, TEMPLATE_ID } from '../../../utils/system';
import Location from '../../../components/Location';
import CardEmailSuccess from '../../../components/CardEmailSuccess';
import instagramIcon from '../../../assets/instagram-icon.svg';
import facebookIcon from '../../../assets/facebook-icon.svg';
import whatsappIcon from '../../../assets/whatsapp-icon.svg';


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


                {
                    emailSent &&
                    <CardEmailSuccess name={nameAuthorMessage} closeCardSuccess={closeCardSuccess} />
                }

                <div className="contact-content container">

                    <div className="contact-details">

                        <div className="contact-details-phones">
                            <h3>Telefones</h3>
                            <p>Tel: (027) 3317-3754</p>
                            <p>Cel: (027) 99872-6089 </p>
                        </div>
                        <div className="contact-details-emails">
                            <h3>Emails: </h3>
                            <p>aquiles@rossowengenharia.com.br</p>
                            <p>contato@rossowengenharia.com.br</p>
                        </div>



                        <div className="contact-details-
address">
                            <h3>Endereço</h3>
                            <p>
                                Rua Aleixo Neto, 322 Sala 307
                                Santa Lúcia, Vitória ES
                            </p>
                        </div>


                        <div className="contact-details-social-network">
                            <h3>Redes Sociais</h3>
                            <div className="contact-details-social-network-icons">
                                <a href="https://www.instagram.com/rossoweng/">
                                    <img src={instagramIcon} alt="" />
                                </a>
                                <a href="https://www.facebook.com/aquiles.elerrossow">
                                    <img src={facebookIcon} alt="" />
                                </a>

                                <a href="https://api.whatsapp.com/send?phone=552799872-6089&text=Olá,%20tudo%20bem?%20vim%20do%20site%20e%20gostaria%20de%20saber%20mais%20a%20respeito%20da%20Rossow%20Engenharia.">
                                    <img src={whatsappIcon} alt="" />
                                </a>

                            </div>


                        </div>
                    </div>


                    <div className="contact-form">
                        <h3>Fale Conosco</h3>
                        <form onSubmit={sendEmail}>
                            <div className="contact-form-inputs">
                                <div className="contact-form-credentials">
                                    <input type="text" name="name" value={name} onChange={(event) => setName(event.target.value)} placeholder='Nome' required />
                                    <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Email' required />
                                    <input type="text" name="subject" value={subject} onChange={(event) => setSubject(event.target.value)} placeholder='Assunto' />
                                </div>
                                <div className="contact-form-message">
                                    <textarea name="message" value={message} onChange={(event) => setMessage(event.target.value)} placeholder='Mensagem' required></textarea>
                                </div>
                            </div>
                            <div className="contact-form-submit-button">
                                <input type="submit" value="Enviar" />
                            </div>

                        </form>
                    </div>

                </div>
                <div className="contact-page-location container">
                    <Location />
                </div>
            </section>
        </main>
    )
}
