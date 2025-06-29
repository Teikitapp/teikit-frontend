import React, { useState } from 'react'
import { Label, Button } from "reactstrap"
import "../estilos/Login.css"
import ClienteService from '../servicios/ClienteService';
import { useNavigate } from 'react-router';
import { Link } from "react-router-dom";
import teikit from "../imagenes/teikitMenu.png";


const Login = ({ setRespLogin, setUsuarios }) => {

    // const [verLogin, setVerLogin] = useState(true);
    const [usuario, setUsuario] = useState("");
    const [pass, setPass] = useState("");
    const [ingresa, setIngresa] = useState(null);

    //const u = localStorage.getItem('usuario');
    //const p = localStorage.getItem('clave');
    //console.log("obtener: ",u,p);
    const navigate = useNavigate();
    //let location = useLocation();
    //console.log(location.pathname) 

    /* if((u !== "" && u !== null) && (p !== "" && p !== null) && pass ==="" && usuario ===""){
        setPass(p);
        setUsuario(u);
        let  body ={
            "email": u,
            "passUsuario": p
           }
        
        ClienteService.obtenerUsuario(body).then(response => {
            setRespLogin(response.data.length)
            if (response.data.length  > 0) {
               
                setIngresa(response.data.length);
                setUsuarios(response.data[0]);
                setVerLogin(false);
                localStorage.removeItem('usuario');
                localStorage.removeItem('clave');
                console.log("obtener: ",u,p);
                navigate("/detallePedido");
               
               
            }else{
                
                
                setIngresa(response.data.length);
                console.log(ingresa);
            }


        }).catch(error => {
            console.log(error);

        })
      
    } */




    const ingresar = () => {
        //alert("ingresar:"+ usuario +" "+ pass)
        //localStorage.setItem('clave', pass);
        //localStorage.setItem('usuario', usuario);      
        //console.log("guardar: ", localStorage);  
        //localStorage.removeItem('usuario');

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
                    //setVerLogin(false);
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

    return (
        <div className='divLogin'>
            <div className="panel-lite">
                <img className='imgLogin' src={teikit} alt='logo de freeCode'></img>
                <p className="nombreLogin">Correo electrónico:</p>
                <div className="form-group">
                    <div className='divcon'>
                        <i className="icon bi bi-person-fill"></i>
                    </div>
                    <div>
                        <input onChange={(user) => { funUsuario(user) }} className="form-control" required="required" placeholder='Escriba aquí su correo' />
                        {/* <label class="form-label" placeholder='Escriba aquí su correo'><i class="bi bi-person-fill"></i> Escriba aquí su correo</label> */}
                    </div>
                </div>
                <p className="nombreLogin">Contraseña:</p>
                <div className="form-group">

                    <div className='divcon'>
                        <i className="icon fa fa-lock"></i>
                    </div>

                    <input onChange={(pass) => { funPass(pass) }} className="form-control" type="password" required="required" placeholder='Escriba aquí su contraseña' />

                </div>
                <Label className='mensajeError'> {ingresa === 0 ? "Contraseña o usuario incorrecto." : ""}</Label>
                <div className='divIngresar'>
                    <Button id="ingresar" className='btnIngresar' onClick={() => ingresar()}>Ingresar</Button>
                </div>
                <div>
                    <p className='textSinCuenta'>¿Aún no tienes una cuenta?</p>
                    <Link to="/registrarUsuario" className='registrate' >Registrate aquí</Link>
                </div>

                <div className='divBtnRegistrar'>
                    {/* <Link to="/registrarUsuario" className='' ><Button className='btnsLogin'> Registrar Usuario</Button></Link> */}
                    <Link to="/loginComercio" className=''><Button className='btnsLogin'>Login Cafetería</Button></Link>
                    <Link to="/login" className=''><Button className='btnsLogin'>Login Usuario</Button></Link>
                </div>
            </div>

            {/* <div className=''>
                <h2 className='tituloLogin'>
                    Iniciar Sesión Usuario
                </h2>

                <form className='form'>
                    <Label className='labelLogin' for='usuario'>Usuario</Label>
                    <Input className='inputLogin' onChange={(user) => { funUsuario(user) }} placeholder='example@gmail.com' type="email" id="usuario" />

                    <Label className='labelLogin' for='password'>Contraseña</Label>
                    <Input className='inputLogin' onChange={(pass) => { funPass(pass) }} type="password" id="password" />

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

            {/*  <Modal isOpen={verLogin === true}>
                <ModalHeader>
                    <h4>Iniciar Sesión Usuario</h4>
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
            </Modal>  */}
        </div>
    )
}

export default Login
