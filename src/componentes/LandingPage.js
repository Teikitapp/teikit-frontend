import React from 'react'
import landingPage from "../imagenes/pageLanding.png";
import landingPage2 from "../imagenes/landingPage2.png";
import landingPage3 from "../imagenes/landingPage3.png";
import "../estilos/LandingPage.css";

const LandingPage = () => {
  return (
    <div className='color-withe'>
     
      <div className="divUno" >
        <img src={landingPage} alt='logo'></img>
      </div>
      <div className="divDos">
        <img  src={landingPage2} alt='logo'></img>
      </div>
      <div className="divTres">
        <img  src={landingPage3} alt='logo'></img>
      </div>
    </div>
  )
}

export default LandingPage
