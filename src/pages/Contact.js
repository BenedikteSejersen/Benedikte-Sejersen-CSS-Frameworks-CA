import React from 'react'
import ContactForm from '../components/form/ContactForm';
import ContactInfo from '../components/information/ContactInfo';
import Footer from '../components/footer/Footer';

export default function Contact() {
    return (
        <div>
            <div className="d-block d-md-flex flex-md-row-reverse">
                < ContactInfo/>
                < ContactForm/>
            </div>
            < Footer />
        </div>
    )
}
