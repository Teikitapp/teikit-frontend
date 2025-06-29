import React from 'react'
import trayectoria from '../imagenes/img-tecnologia.png';
import MenuInterior from './MenuInterior';

const Tecnologia = () => {
  return (
    <div>
       <div className='menu-div'>
            <MenuInterior></MenuInterior>
        </div>
        <div className="divAliados">
                <h1 className='textoAliados'>Tecnología</h1>
                <h3 className='textoQuienes'>
                Nuestros lockers inteligentes están diseñados para que retires tu pedido en su temperatura ideal,
                 sin filas, sin contacto y en sólo unos segundos.
                 Cada casillero se abre solo con tu cuenta personal, ¡como magia! 
                </h3>

            <div className='divTecnologia'>
                <div className='subTextoTecnologia'>
                Pide online y retira apretando un botón dentro de la página. Tu puerta se abrirá automáticamente
                </div>
                <div>
                <img className='imgTecnologia' src={trayectoria} alt='logo de freeCode'></img>
                </div>
            </div>
                
        </div> 

    </div>
  )
}

export default Tecnologia
