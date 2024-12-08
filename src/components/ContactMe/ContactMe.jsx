import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import Mail from '../../assets/mail.png'
import Github from '../../assets/git.png'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>

        <div className='contact-content'>
            <div style={{flex:1}}>
                <ContactInfoCard 
                iconUrl={Mail}
                text="saket8102@gmail.com"
                />
                <ContactInfoCard 
                iconUrl={Github}
                text="https://github.com/s8102k"
                />
            </div>
            <div style={{flex:1}}>
                <ContactForm/>
            </div>
        </div>
    </section>
  )
}

export default ContactMe
