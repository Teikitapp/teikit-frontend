import React, { useState } from 'react'
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import MenuInterior from './MenuInterior';

const Contactanos = () => {
    const form = useRef();
    const [mensaje, setMensaje] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        if (
            e.currentTarget[0].value &&
            e.currentTarget[1].value &&
            e.currentTarget[2].value &&
            e.currentTarget[3].value
        ) {
            emailjs
                .sendForm('service_tiooxqr', 'template_bn4o9cs', form.current, {
                    publicKey: '_f3Pbs4Q_nl-fZ6y5',
                })
                .then(
                    () => {
                        setMensaje("¡Se ha enviado con éxito!");
                    },
                    (error) => {
                        setMensaje("Tuvimos problemas internos para enviar el formulario, Intentalo más tarde.");
                    },
                );
        } else {
            setMensaje("Debe completar todos los campos para enviar el formulario.");
        }
    };

    return (
        <div style={{ background: "#fff", minHeight: "100vh", fontFamily: "'Poppins', Arial, Helvetica, sans-serif" }}>
            <div className='menu-div'>
                <MenuInterior></MenuInterior>
            </div>
            <div className="divCuatro" style={{
                background: "#fff",
                alignItems: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                minHeight: "80vh",
                width: "100vw"
            }}>
                <h1
                    style={{
                        color: "#FC4B08",
                        fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
                        fontWeight: 800,
                        fontSize: "2.2rem",
                        textAlign: "center",
                        margin: "0 0 32px 0",
                        whiteSpace: "pre-line"
                    }}
                >
                    QUIERES TEIKIT{'\n'}EN TU NEGOCIO?
                </h1>
                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <form
                        ref={form}
                        onSubmit={sendEmail}
                        style={{
                            width: "100%",
                            maxWidth: 340,
                            margin: "0 auto",
                            display: "grid", // Cambia de flex a grid
                            placeItems: "center", // Centra horizontal y verticalmente
                            background: "#fff",
                        }}
                    >
                        <input
                            className="input-login-fb"
                            type="text"
                            name="user_name"
                            placeholder="Nombre/Apellido"
                            required
                            style={{ marginBottom: 16, textAlign: "center" }}
                        />
                        <input
                            className="input-login-fb"
                            type="email"
                            name="user_email"
                            placeholder="Correo electrónico"
                            required
                            style={{ marginBottom: 16, textAlign: "center" }}
                        />
                        <input
                            className="input-login-fb"
                            type="tel"
                            name="user_phone"
                            placeholder="Número"
                            required
                            style={{ marginBottom: 16, textAlign: "center" }}
                        />
                        <input
                            className="input-login-fb"
                            type="text"
                            name="business"
                            placeholder="Tipo de negocio"
                            required
                            style={{ marginBottom: 16, textAlign: "center" }}
                        />
                        <button
                            type="submit"
                            style={{
                                width: 120,
                                height: 36,
                                borderRadius: 12,
                                background: "#fc4b08",
                                color: "#fff",
                                fontWeight: 600,
                                fontSize: "1rem",
                                border: "none",
                                margin: "8px 0 0 0",
                                cursor: "pointer",
                                display: "block"
                            }}
                        >
                            Enviar
                        </button>
                        <div className='mensajeError' style={{ marginTop: 10, textAlign: "center", width: "100%" }}>{mensaje}</div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contactanos