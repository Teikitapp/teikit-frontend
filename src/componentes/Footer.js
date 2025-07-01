import React from 'react'
import '../estilos/FondoInicioFooter.css';

const InicioFooter = () => {
    return (
        <div className='footer' style={{ fontFamily: "'Poppins', Arial, Helvetica, sans-serif" }}>
        <a href="https://wa.me/+56965970365"
        class="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer">
        <i class="fa fa-whatsapp whatsapp-icon"></i>
        </a>
            
            <h1 className='espacioTitulo' style={{ fontFamily: "'Poppins', Arial, Helvetica, sans-serif", fontWeight: 800 }}>
                ¿Por qué <label className='textoNaranjoTeikit'>TEIKIT</label>?
            </h1>
            <div className='formatoTextos'>
                <div className='col-3 posicionFija'>
                    <h1 className='textoNaranjo espacioEnteTexto' style={{ fontFamily: "'Poppins', Arial, Helvetica, sans-serif", fontWeight: 800 }}>Cómodidad</h1>
                    <p className='textoNegro' style={{ fontFamily: "'Poppins', Arial, Helvetica, sans-serif" }}>
                        Con Teikit, olvídate de las filas. Retira tu pedido en 
                        el lugar que tú escojas.
                    </p>
                </div>
                <hr className='hrVertical'/>
                <div className='col-3 posicionFija'>
                    <h1 className='textoNaranjo espacioEnteTexto' style={{ fontFamily: "'Poppins', Arial, Helvetica, sans-serif", fontWeight: 800 }}>Tiempo</h1>
                    <p className='textoNegro' style={{ fontFamily: "'Poppins', Arial, Helvetica, sans-serif" }}>
                        Tu comida, tu tiempo. 
                        Solo escoge cuándo quieres retirarla, sin espera.
                    </p>
                </div>
                <hr className='hrVertical'/>
                <div className='col-3 posicionFija'>
                    <h1 className='textoNaranjo espacioEnteTexto' style={{ fontFamily: "'Poppins', Arial, Helvetica, sans-serif", fontWeight: 800 }}>Casilleros Inteligentes</h1>
                    <p className='textoNegro' style={{ fontFamily: "'Poppins', Arial, Helvetica, sans-serif" }}>
                        Nuestros casilleros inteligentes
                        permiten una entrega personalizada y ajustable a tus necesidades.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default InicioFooter
