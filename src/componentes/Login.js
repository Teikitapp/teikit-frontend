import React, { useState } from 'react'
import { Button } from "reactstrap"
import "../estilos/Login.css"
import ClienteService from '../servicios/ClienteService';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import teikit from "../imagenes/teikitMenu.png";

const Login = ({ setRespLogin, setUsuarios }) => {
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");
    const [ingresa, setIngresa] = useState(null);

    const navigate = useNavigate();

    const ingresar = () => {
        let body = {
            "email": usuario,
            "passUsuario": pass
        }
        if (usuario !== "" && pass !== "") {
            ClienteService.obtenerUsuario(body)
                .then(response => {
                    setRespLogin(response.data.length);
                    if (response.data.length > 0) {
                        setIngresa(response.data.length);
                        setUsuarios(response.data[0]);
                        navigate("/home");
                    } else {
                        setIngresa(response.data.length);
                    }
                })
                .catch(error => {
                    setIngresa(0);
                });
        }
    }

    const funUsuario = (u) => { setUsuario(u.target.value); }
    const funPass = (p) => { setPass(p.target.value); }

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
                <form className="form-login" style={{
                    width: "100%",
                    maxWidth: 340,
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }} onSubmit={e => { e.preventDefault(); ingresar(); }}>
                    <input
                        className="input-login-fb"
                        type="email"
                        placeholder="Correo electrónico"
                        onChange={funUsuario}
                        required
                        autoFocus
                        style={{ textAlign: "center" }}
                    />
                    <input
                        className="input-login-fb"
                        type="password"
                        placeholder="Contraseña"
                        onChange={funPass}
                        required
                        style={{ textAlign: "center" }}
                    />
                    <Button type="submit" className='btnIngresar' style={{ width: "100%", maxWidth: 340 }}>Iniciar sesión</Button>
                    <div className='mensajeError'>{ingresa === 0 ? "Contraseña o usuario incorrecto." : ""}</div>
                </form>
                <div style={{ width: "100%", textAlign: "center" }}>
                    <p className='textSinCuenta'>¿Aún no tienes cuenta?</p>
                    <Link to="/registrarUsuario" className='registrate'>Crear cuenta nueva</Link>
                </div>
                <div className='divBtnRegistrar' style={{ width: "100%" }}>
                    <Link to="/loginComercio" className='' style={{ width: "100%" }}>
                        <Button className='btnsLogin' style={{ width: "100%", maxWidth: 340 }}>Ingreso Cafetería</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login;