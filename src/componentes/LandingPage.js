import React from 'react'
import landingPage from "../imagenes/imgInicio.png";
import "../estilos/LandingPage.css";
import { Link } from 'react-router-dom'
import MenuInterior from './MenuInterior';

const LandingPage = () => {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <div className='menu-div'>
        <MenuInterior showLogo={true}></MenuInterior>
      </div>
      <div className='color-withe' style={{ background: "#fff" }}>
        <div>
          <div
            className="divInit"
            style={{
              marginTop: "48px",
              marginLeft: "8px", // Más a la izquierda
              flexDirection: "column",
              alignItems: "flex-start",
              display: "flex"
            }}
          >
            {/* Título sin caja, naranja, a la izquierda */}
            <span
              style={{
                fontFamily: "Poppins, Arial, Helvetica, sans-serif",
                fontWeight: 800,
                fontSize: 64,
                lineHeight: "67px",
                letterSpacing: "1%",
                color: "#FC4B08",
                textAlign: "left",
                display: "block"
              }}
            >
              PIDE<br />ELIGE<br />RETIRA
            </span>
            <span
              style={{
                fontFamily: "Poppins, Arial, Helvetica, sans-serif",
                fontWeight: 400,
                fontSize: 24,
                lineHeight: "22px",
                letterSpacing: "9%",
                color: "#FC4B08",
                display: "block",
                textAlign: "left",
                marginTop: "12px",
                whiteSpace: "pre-line",
                marginLeft: "0"
              }}
            >
              Pide desde tu{'\n'}celular y retira{'\n'}en segundos
            </span>
          </div>
          <div className="divUno">
            <img className='imagen-inicio' src={landingPage} alt='logo'></img>
            <Link to="/login" className='div-btn'>
              <button className='botonIr'>PIDE AQUÍ</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LandingPage;