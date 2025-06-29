import React from 'react'
import landingPage from "../imagenes/imgInicio.png";

import disenio from "../imagenes/disenioLineas.png";

import "../estilos/LandingPage.css";
import { Link } from 'react-router-dom'
//import emailjs from '@emailjs/browser';
//import { useRef } from 'react';

import MenuInterior from './MenuInterior';
//yarn add react-burger-menu
//npm install styled-components@4.3.2 react@16.8.6 react-dom@16.8.6 react-is@16.8.6
//https://icons.getbootstrap.com/icons/person/

const LandingPage = () => {

  /*const form = useRef();
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
  }; */


  return (
    <div>

      <div className='menu-div'>
        <MenuInterior></MenuInterior>
      </div>

      <div className='color-withe'>


        <div>
          <div className="divInit" >
            <div className=''>
              <img className='imgLineas' src={disenio} alt='logo'></img>
            </div>
            <div className=''>
              <h1 className='textoTitulo'>PIDE</h1>
              <h1 className='textoTitulo'>ELIGE</h1>
              <h1 className='textoTitulo'>RETIRA</h1>
            </div>
          </div>

          {/* <div className="divNav" >
            <nav className='nav'>
              <img className='teikit' src={teikit} alt='logo'></img>
            </nav>
          </div> */}




          <div className="divUno" >
            <span className='textoInicio'>Pide desde tu celular y retira en segundos.</span>
            <img className='imagen-inicio' src={landingPage} alt='logo'></img>
            <Link to="/registrarUsuario" className='div-btn'><button className='botonIr'>PIDE AQUÍ</button></Link>
          </div>

          {/* <div className="divDos">      
          <h1 className='textoComoFunciona'>¿Cómo Funciona?</h1>
          <img className='imagenComoFunciona' src={funcionaImg} alt='logo'></img>
          <h4 className='subTexto'>Realiza pedido</h4>
          <img className='imagenComoFunciona' src={funcionaImg2} alt='logo'></img>
          <h4 className='subTexto'>Selecciona horario</h4>
          <img className='imagenComoFunciona' src={funcionaImg3} alt='logo'></img>
          <h4 className='subTexto'>Retira tu pedido</h4>
        </div> */}

          {/* <div className="divTres">
          <h1 className='textoComoFunciona'>¿Qué es?</h1>
          <h3 className='textoSubTituloQueEs'>Un servicio  que te permite pedir tu colación desde tu celular y retirarlas en lockers inteligentes sin hacer fila.</h3>
          <img className='imagen' src={imagenQueEs} alt='logo'></img>
        </div> */}

          {/* <div className="divCuatro">
          <h1 className='textoComoFunciona'>¿Quieres TEIKIT en tu negocio?</h1>

          <form ref={form} onSubmit={sendEmail} className='field'>
            <label>Nombre *</label>
            <input type="text"  className='inputCorreo' name="user_name" />
            <label>Email *</label>
            <input type="email"  className='inputCorreo' name="user_email" placeholder=''/>
            <label>Celular *</label>
            <input type="phone" className='inputCorreo'  name="user_phone" />
            <label>Tipo Negocio</label>
            <input type="phone" className='inputCorreo' name="bunisess" />
            <label className='labelTexarea'>Mensaje *</label>
            <textarea name="message" className='textareaEmail' />
            <input type="submit" value="Enviar" />
            <label className='mensaje'>{mensaje}</label>
          </form>
        </div> */}
          {/* <div className='divRrss'>
          <img className='linea'  src={lineasBlanco} alt='logo'></img>
          <a href='https://www.instagram.com/teikit_cl/'><img className='img-rrss'  src={instagram} alt='logo'></img></a>
          <a href="https://wa.me/+56965970365" rel="noopener noreferrer"><img className='img-rrss' src={whatsapp} alt='logo'></img></a>
          <a href='https://www.linkedin.com/company/teikit-chile/posts/?feedView=all'><img className='img-rrss' src={linkedln} alt='logo'></img></a>
          <img className='linea'  src={lineasBlanco} alt='logo'></img>
        </div> */}

          {/*  <div className="divCinco">
          
        </div> */}
        </div>


      </div>
    </div>
  )
}

export default LandingPage
