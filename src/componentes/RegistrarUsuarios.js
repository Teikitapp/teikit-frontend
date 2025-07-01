import React, { useState } from 'react'
import {Button } from "reactstrap"
import "../estilos/Login.css"
import ClienteService from '../servicios/ClienteService';
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import teikit from "../imagenes/teikitMenu.png";

const RegistrarUsuarios = () => {
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");
    const [passRepetida, setPassRepetida] = useState("");
    const [nombre, setNombre] = useState("");
    const [ingresa, setIngresa] = useState(null);
    const [error, setError] = useState("");
    const [campoVacio, setCampoVacio] = useState("");

    const navigate = useNavigate();

    const guardar = () => {
        if (!validator.isEmail(usuario)) {
            setError("Correo no cumple formato correcto.");
        } else if (pass !== passRepetida) {
            setError("Las contraseñas no coinciden. Por favor, repítalas correctamente.");
        } else {
            setError("");
            let body = {
                "nombreApellido": nombre,
                "email": usuario,
                "passUsuario": pass
            }
            if (nombre !== "" && pass !== "" && usuario !== "") {
                ClienteService.registrarUsuario(body).then(response => {
                    setIngresa(response.data);
                }).catch(error => {
                    setIngresa(0);
                })
            } else {
                setCampoVacio("Ingrese datos para el registro");
            }
        }
    }

    const funUsuario = (u) => { setUsuario(u.target.value); }
    const funPass = (p) => { setPass(p.target.value); }
    const funPassRepetida = (p) => { setPassRepetida(p.target.value); }
    const funNombre = (p) => { setNombre(p.target.value); }

    return (
        <div className='divLogin' style={{
            minHeight: "100vh",
            width: "100vw",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            background: "#fff",
            paddingTop: "40px"
        }}>
            <div className="panel-lite" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start",
                width: "100%",
                maxWidth: 440,
                minWidth: 340,
                boxShadow: "0 2px 16px 0 rgba(31, 38, 135, 0.08)",
                borderRadius: "1.5rem",
                padding: "40px 24px 32px 24px",
                background: "#fff",
                position: "relative"
            }}>
                {/* Botón volver solo flecha, arriba a la izquierda */}
                <button
                    onClick={() => navigate("/Landing")}
                    style={{
                        position: "absolute",
                        left: 18,
                        top: 18,
                        background: "none",
                        border: "none",
                        fontSize: "2rem",
                        fontWeight: "bold",
                        color: "#fc4b08",
                        cursor: "pointer",
                        zIndex: 2,
                        padding: 0,
                        lineHeight: 1
                    }}
                    aria-label="Volver"
                >
                    ←
                </button>
                <div style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: 18,
                    marginTop: 10
                }}>
                    <img
                        className='imgLogin'
                        src={teikit}
                        alt='logo teikit'
                        style={{
                            width: "330px",
                            height: "330px",
                            objectFit: "contain",
                            display: "block"
                        }}
                    />
                </div>
                <form className='form-login' style={{
                    width: "100%",
                    maxWidth: 340,
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }} onSubmit={e => { e.preventDefault(); guardar(); }}>
                    <input
                        className="input-login-fb"
                        onChange={funNombre}
                        placeholder='Nombre Usuario'
                        type="text"
                        required
                        style={{ textAlign: "center" }}
                    />
                    <input
                        className="input-login-fb"
                        onChange={funUsuario}
                        placeholder='Correo'
                        type="email"
                        required
                        style={{ textAlign: "center" }}
                    />
                    <input
                        className="input-login-fb"
                        onChange={funPass}
                        placeholder='Contraseña'
                        type="password"
                        required
                        style={{ textAlign: "center" }}
                    />
                    <input
                        className="input-login-fb"
                        onChange={funPassRepetida}
                        placeholder='Repetir Contraseña'
                        type="password"
                        required
                        style={{ textAlign: "center" }}
                    />
                    {campoVacio && <div className='mensajeError'>{campoVacio}</div>}
                    {error && <div className='mensajeError'>{error}</div>}
                    <div className='mensajeExito'>
                        {ingresa === "Usuario ingresado con éxito" ? "Usuario ingresado con éxito." : ingresa === "Usuario ya existe" ? "Usuario ya existe" : ""}
                    </div>
                    <Button type="submit" className='btnIngresarRegistrar' style={{ width: "100%", maxWidth: 340 }}>Registrar</Button>
                </form>
                <div className='divBtnRegistrar' style={{ marginTop: 24, width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Link to="/login" className='' style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                        <Button className='btnsLogin' style={{ width: "100%", maxWidth: 340 }}>Ingreso usuario</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default RegistrarUsuarios;
