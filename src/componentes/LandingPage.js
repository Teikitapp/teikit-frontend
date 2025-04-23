import React from 'react'
import landingPage from "../imagenes/pageLanding.png";
import landingPage2 from "../imagenes/landingPage2.png";
import landingPage3 from "../imagenes/landingPage3.png";
import "../estilos/LandingPage.css";
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='color-withe'>
    
      <div  className=''>
        <h1 className='texto'>Compra tu comida online y retira en casilleros.</h1>
        <p className='texto'>¡Sin espera, en el horario que quieras!</p>
      </div>
     
      <div className="divUno" >       
        <Link to="/login"><img className='imagen' src={landingPage} alt='logo'></img></Link>
      </div>

      <div className="divDos">       
        <Link to="/login"><img className='imagen imagenDos' src={landingPage2} alt='logo'></img></Link>
      </div>

      <div className="divTres">       
        <Link to="/login"><img className='imagen imagenTres' src={landingPage3} alt='logo'></img></Link>
      </div>
    </div>
  )
}

export default LandingPage
