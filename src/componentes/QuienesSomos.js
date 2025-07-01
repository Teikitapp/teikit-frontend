import React from 'react'
import socio1 from '../imagenes/socio1.png';
import socio2 from '../imagenes/socio2.png';
import MenuInterior from './MenuInterior';

const integrantes = [
  {
    nombre: "Sung Hee Kim",
    cargo: "CEO & Co-Founder",
    img: socio1
  },
  {
    nombre: "Sebastián Cifuentes",
    cargo: "CTO & Co-Founder",
    img: socio2
  },
  {
    nombre: "Valeria Martinez",
    cargo: "Visual Content Manager",
    img: socio1
  },
  {
    nombre: "Fabiola Yong",
    cargo: "Full Stack Developer",
    img: socio2
  }
];

const QuienesSomos = () => {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <div className='menu-div'>
        <MenuInterior />
      </div>
      <div className="divTQuienes" style={{
        background: "#fff",
        paddingTop: 40,
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        minHeight: "100vh",
        justifyContent: "center"
      }}>
        {/* Columna izquierda: título y texto */}
        <div style={{
          flex: "1 1 0",
          minWidth: 320,
          maxWidth: 480,
          background: "#fff",
          padding: "0 24px 0 32px",
          boxSizing: "border-box"
        }}>
          <h1 style={{
            color: "#FC4B08",
            fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
            fontWeight: 800,
            fontSize: "2.5rem",
            textAlign: "left",
            marginBottom: 0,
            textTransform: "none",
            lineHeight: 1.1,
            whiteSpace: "pre-line"
          }}>
            Quienes{'\n'}somos
          </h1>
          <div style={{ height: 4 }} />
          <div style={{
            color: "#003049",
            fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
            fontSize: "1.1rem",
            lineHeight: 1.5,
            textAlign: "justify",
            maxWidth: 600,
            margin: "0 0 0.7em 0",
            padding: "0"
          }}>
            Somos un grupo de jóvenes que sabe lo que es hacer fila con hambre y apuro.
            Por eso creamos Teikit: una forma simple, rápida y sin cobros extra para pedir tu comida y retirarla sin estrés.
          </div>
        </div>
        {/* Columna derecha: integrantes centrados sobre fondo blanco */}
        <div style={{
          flex: "1 1 0",
          background: "#fff",
          padding: "10px 0 0 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          minHeight: "100vh"
        }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "24px 32px",
              justifyItems: "center",
              alignItems: "start",
              maxWidth: 400,
              width: "100%",
              margin: "0 auto"
            }}
          >
            {integrantes.map((int, idx) => (
              <div key={int.nombre} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: 170,
                justifyContent: "flex-start"
              }}>
                <div style={{
                  position: "relative",
                  width: 170,
                  height: 170,
                  marginBottom: 4,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center"
                }}>
                  {/* Fondo naranja cuadrado detrás de la parte inferior de la imagen */}
                  <div style={{
                    position: "absolute",
                    left: 0,
                    bottom: 0,
                    width: 170,
                    height: 56,
                    background: "#FC4B08",
                    zIndex: 0, // detrás de la imagen
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0
                  }} />
                  <img
                    src={int.img}
                    alt={int.nombre}
                    style={{
                      width: 170,
                      height: 170,
                      objectFit: "cover",
                      borderRadius: 0,
                      background: "transparent",
                      position: "relative",
                      zIndex: 1 // sobre el fondo naranja
                    }}
                  />
                </div>
                <div style={{
                  color: "#003049",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  textAlign: "left",
                  marginBottom: 2,
                  fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
                  width: 170,
                  marginTop: 2
                }}>
                  {int.nombre}
                </div>
                <div style={{
                  color: "#003049",
                  fontWeight: 400,
                  fontSize: "1.08rem",
                  textAlign: "left",
                  fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
                  width: 170
                }}>
                  {int.cargo}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuienesSomos
