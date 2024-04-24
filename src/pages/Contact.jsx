import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faPhone, faHome, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './index.css';

const Contact = () => {
    const mailLink = () => {
        const email = 'info@kindercoachjufmonique.nl';
        const mailtoLink = `mailto:${email}`;
        window.open(mailtoLink, '_blank');
    };

    return (
        <main>
            <h1>Contact</h1>
            <div>
            <p>Indien u contact wil opnemen kan dat via de mail <a onClick={mailLink}>info@kindercoachjufmonique.nl </a>.<br />
            Of u kunt mij bellen op nummer 0624273311. </p>
            </div>
        </main>
    );
}

export default Contact;
