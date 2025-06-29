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
        <div>
            <div className='menu-div'>
                <Menu2></Menu2>
            </div>
            <div className="divAliados">
                <h1 className='textoAliados'>Aliados
                    que creen en Teikit</h1>
                <h3 className='textoQuienes'>
                    Gracias a las marcas que se han sumado a este viaje
                    ¡Con su apoyo, hacemos que pedir sea más fácil para todos!
                </h3>

                <div className='divContenedorSocios'>
                <div className='divImgSocios'>
                    <img className='imgAliado' src={aliado1} alt='logo de freeCode'></img>
                </div>

                <div className='divImgSocios'>
                    <img className='imgAliado' src={aliado2} alt='logo de freeCode'></img>
                </div>

                <div className='divImgSocios'>
                    <img className='imgAliado' src={aliado3} alt='logo de freeCode'></img>
                </div>

                <div className='divImgSocios'>
                    <img className='imgAliado' src={aliado4} alt='logo de freeCode'></img>
                </div>

                <div className='divImgSocios'>
                    <img className='imgAliado' src={aliado5} alt='logo de freeCode'></img>
                </div>

                <div className='divImgSocios'>
                    <img className='imgAliado' src={aliado6} alt='logo de freeCode'></img>
                </div>
               
            </div>
            <div className=''>
                    <img className='imgUC' src={aliado7} alt='logo de freeCode'></img>
            </div>

            </div>
            
        </div>
    )
}

export default Aliados
