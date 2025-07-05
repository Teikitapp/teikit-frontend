import React from 'react'
import Menu2 from './MenuInterior'
import aliado1 from '../imagenes/aliado1.png';
import aliado2 from '../imagenes/aliado2.png';
import aliado3 from '../imagenes/aliado3.png';
import aliado4 from '../imagenes/aliado4.png';
import aliado5 from '../imagenes/aliado5.png';
import aliado6 from '../imagenes/aliado6.png';
import aliado7 from '../imagenes/aliado7.png';

const Aliados = () => {
    return (
        <div style={{ background: "#fff", minHeight: "100vh", width: "100vw" }}>
            <div className='menu-div'>
                <Menu2></Menu2>
            </div>
            <div className="divAliados" style={{
                alignItems: "center",
                width: "100%",
                display: "flex",
                flexDirection: "column",
                background: "#fff",
                minHeight: "100vh",
                boxSizing: "border-box",
                paddingLeft: 0
            }}>
                <h1 className='textoAliados' style={{
                    whiteSpace: "pre-line",
                    textAlign: "center",
                    width: "100vw",
                    fontSize: "2.1rem", // más pequeño
                    marginBottom: 0,
                    maxWidth: "100vw",
                    fontWeight: 800,
                    color: "#FC4B08"
                }}>
                    Aliados{'\n'}que creen{'\n'}en Teikit
                </h1>
                <h3 className='textoQuienes' style={{
                    whiteSpace: "pre-line",
                    textAlign: "center",
                    width: "100vw",
                    fontSize: "1.05rem", // más pequeño
                    margin: "12px 0 0 0",
                    fontWeight: 500,
                    color: "#003049"
                }}>
                    Gracias a las marcas que se{'\n'}han sumado en este viaje.
                    {'\n\n'}¡Con su apoyo, hacemos que{'\n'}pedir sea más facil para{'\n'}todos!
                </h3>

                {/* Logos en 2 columnas, centrados y más juntos */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, 1fr)",
                    gap: "8px 8px",
                    justifyContent: "center",
                    alignItems: "center",
                    maxWidth: 260, // más pequeño para que no se salgan
                    margin: "24px auto 0 auto",
                    width: "100%"
                }}>
                    <div className='divImgSocios' style={{ display: "flex", justifyContent: "center" }}>
                        <img className='imgAliado' src={aliado1} alt='aliado1' style={{ width: 90, height: "auto" }} />
                    </div>
                    <div className='divImgSocios' style={{ display: "flex", justifyContent: "center" }}>
                        <img className='imgAliado' src={aliado2} alt='aliado2' style={{ width: 90, height: "auto" }} />
                    </div>
                    <div className='divImgSocios' style={{ display: "flex", justifyContent: "center" }}>
                        <img className='imgAliado' src={aliado3} alt='aliado3' style={{ width: 90, height: "auto" }} />
                    </div>
                    <div className='divImgSocios' style={{ display: "flex", justifyContent: "center" }}>
                        <img className='imgAliado' src={aliado4} alt='aliado4' style={{ width: 90, height: "auto" }} />
                    </div>
                    <div className='divImgSocios' style={{ display: "flex", justifyContent: "center" }}>
                        <img className='imgAliado' src={aliado5} alt='aliado5' style={{ width: 90, height: "auto" }} />
                    </div>
                    <div className='divImgSocios' style={{ display: "flex", justifyContent: "center" }}>
                        <img className='imgAliado' src={aliado6} alt='aliado6' style={{ width: 90, height: "auto" }} />
                    </div>
                    {/* Aliado 7 debajo de aliado 5 y 6, centrado en la fila */}
                    <div style={{ gridColumn: "1 / span 2", display: "flex", justifyContent: "center", marginTop: 8 }}>
                        <img
                            className='imgUC'
                            src={aliado7}
                            alt='PUCV'
                            style={{
                                width: "130px",
                                maxWidth: "90vw",
                                height: "auto"
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aliados
