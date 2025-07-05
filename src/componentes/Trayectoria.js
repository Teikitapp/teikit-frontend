import React from 'react'
import MenuInterior from './MenuInterior';

const Trayectoria = () => {
    return (
        <div>
            <div className='menu-div'>
                <MenuInterior></MenuInterior>
            </div>
            <div className="contenedorTrayectoria">
                <h1 className='tituloTrayectoria' style={{ fontSize: "2.8rem" }}>Trayectoria</h1>
                <h1 className='tituloTrayectoria' style={{ fontSize: "2rem", marginTop: 16 }}>Hitos</h1>
                <div className='divLineaTiempo'>
                    <div className='divTrayectoria'>
                        <p><b>2023</b></p>
                        <p>Inicio del proyecto</p>
                        <hr />
                    </div>
                    <div className='divTrayectoria'>
                        <p><b>2023</b></p>
                        <p>Talento Emprendedor</p>
                        <p><b>PUCV</b></p>
                        <hr />
                    </div>
                    <div className='divTrayectoria'>
                        <p><b>2024</b></p>
                        <p>Top 10 Chile</p>
                        <p>Impacto emprendedor</p>
                        <p><b>UDD</b></p>
                        <hr />
                    </div>
                    <div className='divTrayectoria'>
                        <p><b>2024</b></p>
                        <p>Mejor emprendimiento del año</p>
                        <p><b>PUCV</b></p>
                        <hr />
                    </div>
                    <div className='divTrayectoria'>
                        <p><b>2024</b></p>
                        <p>Top 10 Chile categoría Local </p>
                        <p>Desafío emprendedor</p>
                        <p><b>BANCO DE CHILE</b></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trayectoria
