import React, { useState } from 'react'
import { Button } from "reactstrap"
import "../estilos/Login.css"
import ClienteService from '../servicios/ClienteService';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import teikit from "../imagenes/teikitMenu.png";

const LoginCliente = ({ setRespLoginComercio }) => {

    //const [verLogin, setVerLogin] = useState(true);
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");
    const [ingresa, setIngresa] = useState(null);
    const navigate = useNavigate();


    const ingresar = () => {

        let bodyComercio = {
            "email": usuario,
            "passCliente": pass
        }

        if (usuario !== "" && pass !== "") {
            ClienteService.obtenerComercio(bodyComercio).then(response => {
                setRespLoginComercio(response.data.length);
                if (response.data.length > 0) {
                    setIngresa(response.data.length);
                    ///setUsuarios(response.data[0]);
                    console.log("INGRESA COMERCIO");
                    // setVerLogin(false);//esconde el login para navegar
                    navigate("/homeComercio");

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

    return (
        <div className='divLogin'>

            <div className="panel-lite">
                <div >
                    <div></div>
                </div>
                <img className='imgLogin' src={teikit} alt='logo de freeCode'></img>
                <p className="nombreLogin">Correo electrónico:</p>
                <div className="form-group">
                    <div className='divcon'>
                        <i className="icon bi bi-person-fill"></i>
                    </div>
                    <input onChange={(user) => { funUsuario(user) }} className="form-control" required="required" placeholder='Escriba aquí su correo' />

                </div>
                <p className="nombreLogin">Contraseña:</p>
                <div className="form-group">
                    <div className='divcon'>
                        <i className="icon fa fa-lock"></i>
                    </div>

                    <input onChange={(pass) => { funPass(pass) }} className="form-control" type="password" required="required" placeholder='Escriba aquí su contraseña' />

                </div>
                <div className='divIngresar'>
                    <Button id="ingresar" className='btnIngresar' onClick={() => ingresar()}>Ingresar <i className="bi bi-cup-hot-fill"></i></Button>
                </div>


                <div className='divBtnRegistrar'>
                    {/* <Link to="/registrarUsuario" className='' ><Button className='btnsLogin'> Registrar Usuario</Button></Link> */}
                    <Link to="/loginComercio" className=''><Button className='btnsLogin'>Login Cafetería</Button></Link>
                    <Link to="/login" className=''><Button className='btnsLogin'>Login Usuario</Button></Link>
                </div>
            </div>

            {/* <div>
                <h2 className='tituloLogin'>
                    Iniciar Sesión Comercio
                </h2>

                <form className='form'>
                    <Label className='labelLogin' for='usuario'>Usuario</Label>
                    <Input className='inputLogin' onChange={(user) => { funUsuario(user) }} placeholder='example@gmail.com' type="email" id="usuario" />

                    <Label className='labelLogin' for='password'>Contraseña</Label>
                    <Input className='inputLogin' onChange={(user) => { funPass(user) }} type="password" id="password" />

                    <Label className='mensajeError'> {ingresa === 0 ? "Contraseña o usuario incorrecto." : ""}</Label>

                    <div className='divIngresar'>
                        <Button id="ingresar" className='btnIngresar' onClick={() => ingresar()}>Ingresar</Button>
                    </div>

                    <div className='divBtnRegistrar'>
                        <Link to="/registrarUsuario" className='' ><Button className='btnsLogin'> Registrar Usuario</Button></Link>
                        <Link to="/loginComercio" className=''><Button className='btnsLogin'>Login Cafetería</Button></Link>
                        <Link to="/login" className=''><Button className='btnsLogin'>Login Usuario</Button></Link>
                    </div>
                </form>
            </div>
            <div>
                <img className='img' src={imgCasillero} alt='logo'></img>
            </div> */}

            {/* <Modal isOpen={verLogin === true}>
                <ModalHeader>
                    <h4>Iniciar Sesión Comercio</h4>
                </ModalHeader>

                <ModalBody>
                    <FormGroup>
                        <Label for='usuario'>Usuario</Label>
                        <Input onChange={(user) => { funUsuario(user) }} placeholder='example@gmail.com' type="email" id="usuario" />

                        <Label for='password'>Contraseña</Label>
                        <Input onChange={(pass) => { funPass(pass) }} type="password" id="password" />

                        <Label className='mensajeError'> {ingresa === 0 ? "Contraseña o usuario incorrecto." : ""}</Label>
                        <div className='divIngresar'>
                            <Button id="ingresar" className='btnIngresar' onClick={() => ingresar()}>Ingresar</Button>
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

export default LoginCliente;
