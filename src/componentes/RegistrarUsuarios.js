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
    const [passRepetida, setPassRepetida] = useState("");  // Nuevo estado para la contraseña repetida
    const [nombre, setNombre] = useState("");
    const [ingresa, setIngresa] = useState(null);
    const [error, setError] = useState("");  // Estado para almacenar el error si las contraseñas no coinciden
    const [campoVacio, setCampoVacio] = useState("");  // Estado para manejar el error de campos vacíos

    const guardar = () => {
        // Verificar que los campos no estén vacíos
        if (nombre === "" || pass === "" || passRepetida === "" || usuario === "") {
            setCampoVacio("Todos los campos son obligatorios.");
            return; // No continuar si algún campo está vacío
        } else {
            setCampoVacio("");  // Limpiar el mensaje de error de campos vacíos
        }

        if (!validator.isEmail(usuario)) {
            alert("Correo incorrecto.");
        } else if (pass !== passRepetida) {  // Verificar que las contraseñas coincidan
            setError("Las contraseñas no coinciden. Por favor, repítalas correctamente.");
        } else {
            setError("");  // Limpiar el error si las contraseñas coinciden

            let body = {
                "nombreApellido": nombre,
                "email": usuario,
                "passUsuario": pass
            }
            if (nombre !== "" && pass !== "" && usuario !== "") {
                ClienteService.registrarUsuario(body).then(response => {
                    if (response.data.id > 0) {
                        setIngresa(response.data.id);
                        setUsuario("");
                        setPass("");
                        setPassRepetida("");  // Limpiar la contraseña repetida
                        setNombre("");
                    } else {
                        setIngresa(response.data.id);
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
    const funPassRepetida = (p) => { setPassRepetida(p.target.value); }  // Función para manejar la contraseña repetida
    const funNombre = (p) => { setNombre(p.target.value); }

    return (
        <div className='divLogin'>

            <Modal isOpen={verLogin === true}>
                <ModalHeader>
                    <p>Registrar usuario</p>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <Label for='name'>Nombre</Label>
                        <small>Ejemplo: Alexis Sánchez</small>  {/* Agregado un ejemplo */}
                        <Input 
                            onChange={(name) => { funNombre(name) }} 
                            type="text" 
                            placeholder="Ejemplo: Alexis Sánchez"  // Placeholder para el nombre
                        />

                        <Label for='email'>Correo</Label>
                        <Input onChange={(user) => { funUsuario(user) }} placeholder='example@gmail.com' type="email" />

                        <Label for='password'>Contraseña</Label>
                        <Input onChange={(pass) => { funPass(pass) }} type='password' />

                        <Label for='passwordRepeat'>Repetir Contraseña</Label>
                        <Input onChange={(passRepeat) => { funPassRepetida(passRepeat) }} type='password' />  {/* Campo para repetir la contraseña */}

                        {campoVacio && <Label className='mensajeError'>{campoVacio}</Label>}  {/* Mostrar mensaje de error si algún campo está vacío */}
                        {error && <Label className='mensajeError'>{error}</Label>}  {/* Mostrar mensaje de error si las contraseñas no coinciden */}

                        <Label className='mensajeError'> {ingresa === 0 ? "No se ha podido ingresar su solicitud, Intente más tarde." : ""}</Label>

                        <Label className='mensajeExito'> {ingresa > 0 ? "Se ha registrado exitosamente." : ""}</Label>
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
            </Modal>
        </div>
    )
}

export default RegistrarUsuarios;
