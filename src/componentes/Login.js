import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Button } from "reactstrap"
import "../estilos/Login.css"
import ClienteService from '../servicios/ClienteService';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";

const Login = ({ setRespLogin, setUsuarios }) => {

    const [verLogin, setVerLogin] = useState(true);
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
            ClienteService.obtenerUsuario(body).then(response => {
                setRespLogin(response.data.length);
                if (response.data.length > 0) {
                    setIngresa(response.data.length);
                    setUsuarios(response.data[0]);
                    setVerLogin(false);
                    navigate("/home");
                } else {
                    setIngresa(response.data.length);
                    console.log(ingresa);
                }
            }).catch(error => {
                setIngresa(0);
                console.log(error);
            })
        }
    }

    const funUsuario = (u) => { setUsuario(u.target.value); }
    const funPass = (p) => { setPass(p.target.value); }

    const handleSubmit = (e) => {
        e.preventDefault();
        ingresar();
    }

    return (
        <div className='divLogin'>
            <Modal isOpen={verLogin === true}>
                <ModalHeader tag="h4">
                    Iniciar Sesión Usuario
                </ModalHeader>

                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label for='usuario'>Usuario</Label>
                            <Input 
                                onChange={(user) => { funUsuario(user) }} 
                                placeholder='ejemplo@correo.com' 
                                type="email" 
                                id="usuario" 
                            />

                            <Label for='password'>Contraseña</Label>
                            <Input 
                                onChange={(pass) => { funPass(pass) }} 
                                type="password" 
                                id="password" 
                            />

                            <Label className='mensajeError'> {ingresa === 0 ? "Usuario o contraseña incorrecto." : ""}</Label>
                            <div className='divIngresar'>
                                <Button id="ingresar" className='btnIngresar' type="submit">Ingresar</Button>
                            </div>
                        </FormGroup>
                    </form>
                </ModalBody>

                <ModalFooter className='footerModalLogin'>
                    <div className='divBtnRegistrar'>
                        <Link to="/registrarUsuario" className='' >Registrar Usuario</Link>
                        <Link to="/loginComercio" className=''>Login Cafetería</Link>
                        <Link to="/login" className=''>Login Usuario</Link>
                    </div>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default Login;
