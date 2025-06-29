import React from 'react'
import MenuInterior from './MenuInterior';

const Trayectoria = () => {
    return (
        <div>
            <div className='menu-div'>
                <MenuInterior></MenuInterior>
            </div>
            <div className="contenedorTrayectoria">
                <h1 className='tituloTrayectoria'>Trayectoria</h1>
                <h1 className='tituloTrayectoria'>Noticias</h1>
                <h1 className='textoAliados'>Hitos</h1>
                <div className='divLineaTiempo'>

                   
                   
                    <div className='divTrayectoria'>
                        <p>Inicio del proyecto</p>
                        <p>2023</p>
                        <hr></hr>
                    </div>
                    <div className='divTrayectoria'>
                        <p>2023</p>
                        <p>Talento Emprendedor</p>
                        <p>PUCV</p>
                        <hr></hr>
                    </div>
                    <div className='divTrayectoria'>
                        <p>2024</p>
                        <p>Top 10 Chile</p>
                        <p>Impacto emprendedor</p>
                        <p>UDD</p>
                        <hr></hr>
                    </div>
                    <div className='divTrayectoria'>
                        <p>2024</p>
                        <p>Mejor emprendimiento del año</p>
                        <p>PUCV</p>
                        <hr></hr>
                    </div>
                    <div className='divTrayectoria'>
                        <p>2024</p>
                        <p>Top 10 Chile categoría Local </p>
                        <p>Desafío emprendedor</p>
                        <p>Banco de Chile</p>
                        
                    </div>



                   

                </div>
            </div>
        </div>
    )
}

export default Trayectoria
