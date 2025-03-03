import React, { useState } from 'react'
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, Button } from "reactstrap"
import "../estilos/Login.css"
import ClienteService from '../servicios/ClienteService';
import { Link } from "react-router-dom";
import validator from "validator";

const RegistrarUsuarios = () => {

    const verLogin = true;
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");
    const [passRepetida, setPassRepetida] = useState("");
    const [nombre, setNombre] = useState("");
    const [ingresa, setIngresa] = useState(null);
    const [error, setError] = useState("");
    const [campoVacio, setCampoVacio] = useState("");

    const guardar = () => {
        if (nombre === "" || pass === "" || passRepetida === "" || usuario === "") {
            setCampoVacio("Todos los campos son obligatorios.");
            return;
        } else {
            setCampoVacio("");
        }

        if (!validator.isEmail(usuario)) {
            alert("Correo incorrecto.");
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
                    if (response.data === "Usuario ingresado con éxito") {
                        setIngresa(response.data);
                        setUsuario("");
                        setPass("");
                        setNombre("");

                    } else {
                        setIngresa(response.data);
                        console.log(ingresa);
                    }
                }).catch(error => {
                    setIngresa(0);
                    console.log(error);
                })
            }
        }
    }

    const funUsuario = (u) => { setUsuario(u.target.value); }
    const funPass = (p) => { setPass(p.target.value); }
    const funPassRepetida = (p) => { setPassRepetida(p.target.value); }
    const funNombre = (p) => { setNombre(p.target.value); }

    const handleSubmit = (e) => {
        e.preventDefault();  // Evita el comportamiento predeterminado de enviar el formulario
        guardar();  // Llama a la función que maneja el envío
    }

    return (
        <div className='divLogin'>
            <Modal isOpen={verLogin === true}>
                <ModalHeader>
                    <p>Registrar usuario</p>
                </ModalHeader>

                <ModalBody>
                    <form onSubmit={handleSubmit}> {/* Formulario que maneja el evento submit */}
                        <FormGroup>
                            <Label for='name'>Nombre y Apellido</Label>
                            <Input 
                                onChange={(name) => { funNombre(name) }} 
                                type="text" 
                                placeholder="Alexis Sánchez" 
                            />

                            <Label for='email'>Correo</Label>
                            <Input onChange={(user) => { funUsuario(user) }} placeholder='ejemplo@correo.com' type="email" />

                            <Label for='password'>Contraseña</Label>
                            <Input onChange={(pass) => { funPass(pass) }} type='password' />

                            <Label for='passwordRepeat'>Repetir Contraseña</Label>
                            <Input onChange={(passRepeat) => { funPassRepetida(passRepeat) }} type='password' />

                            {campoVacio && <Label className='mensajeError'>{campoVacio}</Label>}
                            {error && <Label className='mensajeError'>{error}</Label>}

                              {/*  <Label className='mensajeError'> {ingresa === 0 ? "No se ha podido ingresar su solicitud, Intente mas atrde." : ""}</Label>*/}
                            <Label className='mensajeExito'> {ingresa === "Usuario ingresado con éxito" ? "Usuario ingresado con éxito." : ingresa === "Usuario ya existe" ? "Usuario ya existe" : ""}</Label>
                            <div className='divIngresar'>
                                <Button id="ingresar" className='btnIngresar' type="submit">Registrar</Button> {/* El botón ahora hace submit */}
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

export default RegistrarUsuarios;
