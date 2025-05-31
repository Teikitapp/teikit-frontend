import React, { useState } from 'react'
import {  Label, Input, Button } from "reactstrap"
import "../estilos/Login.css"
import ClienteService from '../servicios/ClienteService';
import { Link } from "react-router-dom";
import validator from "validator";
import imgCasillero from "../imagenes/img-login.png";


const RegistrarUsuarios = () => {

    //const verLogin = true;
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");
    const [passRepetida, setPassRepetida] = useState("");
    const [nombre, setNombre] = useState("");
    const [ingresa, setIngresa] = useState(null);
    const [error, setError] = useState("");
    const [campoVacio, setCampoVacio] = useState("");

    const guardar = () => {
        if (!validator.isEmail(usuario)) {
            alert("Correo incorrecto.");
            setError("Las contraseñas no coinciden.");
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

                    } else {
                        setIngresa(response.data);
                        console.log(ingresa);
                    }
                    console.log(ingresa);
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

    return (
        <div className='divLogin'>
            <div>
                <h2 className='tituloLogin'>
                Registrar Usuario
                </h2>

                <form>
                    <Label className='labelLogin' for='usuario'>Nombre Usuario</Label>
                    <Input className='inputLogin' onChange={(name) => { funNombre(name) }} placeholder='' type="email" id="usuario" />

                    <Label className='labelLogin' for='email'>Correo</Label>
                    <Input className='inputLogin' onChange={(user) => { funUsuario(user) }} placeholder='example@gmail.com' type="email" />


                    <Label className='labelLogin' for='password'>Contraseña</Label>
                    <Input className='inputLogin' onChange={(pass) => { funPass(pass)}} type="password" id="password" />

                    <Label className='labelLogin' for='passwordRepeat'>Repetir Contraseña</Label>
                    <Input className='inputLogin' onChange={(passRepeat) => { funPassRepetida(passRepeat) }} type='password' />

                    {campoVacio && <Label className='mensajeError'>{campoVacio}</Label>}
                    {error && <Label className='mensajeError'>{error}</Label>}

                    {/*  <Label className='mensajeError'> {ingresa === 0 ? "No se ha podido ingresar su solicitud, Intente mas atrde." : ""}</Label>*/}
                    <Label className='mensajeExito'> {ingresa === "Usuario ingresado con éxito" ? "Usuario ingresado con éxito." : ingresa === "Usuario ya existe" ? "Usuario ya existe" : ""}</Label>
                            
                    <div className='divIngresar'>
                        <Button id="ingresar" className='btnIngresar' onClick={() => guardar()}>Registrar</Button>
                    </div>

                    <div className='divBtnRegistrar'>
                        <Link to="/registrarUsuario" className='' ><Button className='btnsLogin'> Registrar Usuario</Button></Link>
                        <Link to="/loginComercio" className=''><Button className='btnsLogin'>Login Cafetería</Button></Link>
                        <Link to="/login" className=''><Button className='btnsLogin'>Login Usuario</Button></Link>
                    </div>
                </form>
            </div>
            <div>
                <img className='' src={imgCasillero} alt='logo'></img>
            </div>

           {/*  <Modal isOpen={verLogin === true}>
                <ModalHeader>
                    <p>Registrar usuario</p>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <Label for='name'>Nombre</Label>
                        <Input onChange={(name) => { funNombre(name) }} type="text" />

                        <Label for='email'>Correo</Label>
                        <Input onChange={(user) => { funUsuario(user) }} placeholder='example@gmail.com' type="email" />

                        <Label for='password'>Contraseña</Label>
                        <Input onChange={(pass) => { funPass(pass) }} type='text' />

                      
                        <Label className='mensajeExito'> {ingresa === "Usuario ingresado con éxito" ? "Usuario ingresado con éxito." : ingresa === "Usuario ya existe" ? "Usuario ya existe" : ""}</Label>
                        <div className='divIngresar'>
                            <Button id="ingresar" className='btnIngresar' onClick={() => guardar()}>Registrar</Button>
                        </div>

                    </FormGroup>

                </ModalBody>

                <ModalFooter className='footerModalLogin'>
                    <div className='divBtnRegistrar'>
                        <Link to="/registrarUsuario" className='' >Registrar Usuario</Link>
                        <Link to="/loginComercio" className=''>Login Cafetería</Link>
                        <Link to="/login" className=''>Login Usuario</Link>
                    </div>
                </ModalFooter>
            </Modal> */}
        </div>
    )
}

export default RegistrarUsuarios;
