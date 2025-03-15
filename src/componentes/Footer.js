import React from 'react'
import '../estilos/FondoInicioFooter.css';

const InicioFooter = () => {
    return (
        <div className='footer'>
        <a href="https://wa.me/+56965970365"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer">
        <i class="fa fa-whatsapp whatsapp-icon"></i>
        </a>
            
            <h1 className='espacioTitulo'>¿Por qué <label className='textoNaranjo'>TEIKIT</label>?</h1>
            <div className='formatoTextos'>
                <div className='col-3 posicionFija'>
                    <h1 className='textoNaranjo espacioEnteTexto'>Cómodidad</h1>
                    <p className='textoNegro'>Con Teikit, olvídate de las filas. Retira tu pedido en 
                        el lugar que tú escojas.
                    </p>
                </div>
                <hr className='hrVertical'/>
                <div className='col-3 posicionFija'>
                    <h1 className='textoNaranjo espacioEnteTexto'>Tiempo</h1>
                    <p className='textoNegro'>Tu comida, tu tiempo. 
                        Solo escoge cuándo quieres retirarla, sin espera.
                    </p>
                </div>
                <hr className='hrVertical'/>
                <div className='col-3 posicionFija'>
                    <h1 className='textoNaranjo espacioEnteTexto'>Casilleros Inteligentes</h1>
                    <p className='textoNegro'>Nuestros casilleros inteligentes
                        permiten una entrega personalizada y ajustable a tus necesidades.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InicioFooter
