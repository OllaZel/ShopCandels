import React from 'react';
import { dataContact } from './dataContact';
import { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("xvonwoaw");
  if (state.succeeded) {
      return <p>Спасибо за ваше сообщение!</p>;
  }
  return (
      <form onSubmit={handleSubmit} className="formContact">
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Ваш e-mail'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='Ваше сообщение'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
        
      />
      <button type="submit" disabled={state.submitting} className="btnSubmit">
        Отправить
      </button>
    </form>
  );
}



function Contact() {

    const [contact, setContact] = useState(0);
    const {id, name, telefon} = dataContact[contact];

    const previous = () => {
        setContact(contact => {
            contact --;
            if (contact < 0) {
                return dataContact.length-1;}
                return contact
            }
        )
    }

    const next = () => {
        setContact(contact => {
            contact ++;
            if (contact > dataContact.length-1) 
            {contact=0}
            return contact
            }
        )
    }


    return(
        <div>
            <div className="containerTitle">
                <h1>КОНТАКТЫ</h1>
            </div>

            <div className="containerContacts">

                <button className='previous' onClick={previous}> ⬅️ </button>

                <div className="contact" key={id}>
                    <h2>{name}</h2>
                    <h3 className="telefon">{telefon}</h3>
                </div>

                <button className='next' onClick={next}> ➡️ </button>


                {/* <div className="contact">
                    <h2>Отдел продаж</h2>
                    <h3 className="telefon">8 (812) 888-88-88 </h3>
                </div>

                <div className="contact">
                    <h2>По вопросам доставки</h2>
                    <h3 className="telefon">8 (812) 888-88-89 </h3>
                </div>

                <div className="contact">
                    <h2>E-mail</h2>
                    <h3 className="telefon">sales@candels.ru </h3>
                </div> */}

            </div>
        
                <div className="form">
                    <h2>НАПИШИТЕ НАМ</h2>
                    <ContactForm /> 
                </div>
        
        
        </div>
    )
}

export default Contact;