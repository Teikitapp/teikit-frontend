import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import MenuInterior from './MenuInterior';

const Contactanos = () => {
    const form = useRef();
    const [mensaje, setMensaje] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        debugger;
        if (e.currentTarget[0].value && e.currentTarget[1].value && e.currentTarget[2].value && e.currentTarget[4].value) {
            emailjs
                .sendForm('service_tiooxqr', 'template_bn4o9cs', form.current, {
                    publicKey: '_f3Pbs4Q_nl-fZ6y5',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        setMensaje("¡Se ha enviado con éxito!");
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                        setMensaje("Tuvimos problemas internos para enviar el formulario, Intentalo más tarde.");
                    },
                );
        } else {
            setMensaje("Debe completar datos con (*) para enviar el formulario.");
            console.log("Falta datos para enviar formulario");
        }
    };
    return (
        <div>
            <div className='menu-div'>
                <MenuInterior></MenuInterior>
            </div>

            <div className="divCuatro">
                <span className='textoQuieresEnTuNegocio'>¿Quieres TEIKIT en tu negocio?</span>
                {/* <h1 className='textoComoFunciona'>¿Quieres TEIKIT en tu negocio?</h1> */}


                <div>
                    <form ref={form} onSubmit={sendEmail} className='field'>
                        <label>Nombre *</label>
                        <input type="text" className='inputCorreo' name="user_name" />
                        <label>Email *</label>
                        <input type="email" className='inputCorreo' name="user_email" placeholder='' />
                        <label>Celular *</label>
                        <input type="phone" className='inputCorreo' name="user_phone" />
                        <label>Tipo Negocio</label>
                        <input type="phone" className='inputCorreo' name="bunisess" />
                        <label className='labelTexarea'>Mensaje *</label>
                        <textarea name="message" className='textareaEmail' />
                        <input type="submit" value="Enviar" />
                        <label className='mensaje'>{mensaje}</label>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactanos
