import React from 'react'
import imagenQueEs from "../imagenes/casillero-queEs.png";
import sp from "../imagenes/seleccionHorario.png";
import prp from "../imagenes/paraRealizarpedido.png";
import rp from "../imagenes/retiraPedido.png";
import MenuInterior from './MenuInterior';

const QueEs = () => {
    return (
        <div style={{ background: "#fff", minHeight: "100vh" }}>
            <div className='menu-div'>
                <MenuInterior></MenuInterior>
            </div>
            <div className="divTres" style={{ alignItems: "center", background: "#fff" }}>
                <h1
                    style={{
                        color: "#FC4B08",
                        fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
                        fontWeight: 800,
                        fontSize: "3.5rem",
                        lineHeight: 1.1,
                        marginBottom: "0.5em",
                        textAlign: "center",
                        width: "100%"
                    }}
                >
                    ¿Qué es?
                </h1>
                <div
                    style={{
                        color: "#003049",
                        fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
                        fontSize: "1.25rem",
                        lineHeight: 1.5,
                        textAlign: "justify",
                        maxWidth: 500,
                        margin: "0 auto 2.5em auto",
                        padding: "0 16px"
                    }}
                >
                    Un servicio que te permite pedir tu colación desde el celular y retirarla en lockers inteligentes, sin hacer fila y al mismo precio que en la cafetería.
                </div>
                {/* Casillero a la izquierda, logos+textos en columna a la derecha */}
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: "48px",
                    width: "100%",
                    marginTop: 24
                }}>
                    {/* Casillero */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <img
                            src={imagenQueEs}
                            alt="Casillero Teikit"
                            style={{ width: 234, height: "auto" }} // 180 * 1.3 = 234
                        />
                    </div>
                    {/* Logos y textos en columna, texto debajo de cada imagen */}
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "32px",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img src={prp} alt="Realizar pedido" style={{ width: 80, height: 80 }} />
                            <span style={{
                                color: "#003049",
                                fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
                                fontWeight: 400,
                                fontSize: "0.95rem",
                                marginTop: 8,
                                textAlign: "center",
                                lineHeight: 1.1,
                                whiteSpace: "pre-line"
                            }}>Realizar{'\n'}pedido</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img src={sp} alt="Selecciona horario" style={{ width: 80, height: 80 }} />
                            <span style={{
                                color: "#003049",
                                fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
                                fontWeight: 400,
                                fontSize: "0.95rem",
                                marginTop: 8,
                                textAlign: "center",
                                lineHeight: 1.1,
                                whiteSpace: "pre-line"
                            }}>Selecciona{'\n'}horario</span>
                        </div>
                        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                            <img src={rp} alt="Retira pedido" style={{ width: 80, height: 80 }} />
                            <span style={{
                                color: "#003049",
                                fontFamily: "'Poppins', Arial, Helvetica, sans-serif",
                                fontWeight: 400,
                                fontSize: "0.95rem",
                                marginTop: 8,
                                textAlign: "center",
                                lineHeight: 1.1,
                                whiteSpace: "pre-line"
                            }}>Retira{'\n'}pedido</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QueEs
