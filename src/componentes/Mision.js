import React from 'react'
import MenuInterior from './MenuInterior';
import mision from '../imagenes/img-mision.jpg';

const Mision = () => {
  return (
    <div>
       <div className='menu-div'>
            <MenuInterior></MenuInterior>
        </div>
        <div className="divAliados">
                <h1 className='textoAliados'>Misión</h1>
                <h3 className='textoQuienes'>
                Hacer que la experiencia de compra de comida sea más rápida, cómoda y sin complicaciones.
                Conectamos tecnología y simpleza para que cada persona aproveche mejor su tiempo.
                </h3>

                <img className='imgMision' src={mision} alt='logo de freeCode'></img>
        </div>     
    </div>
  )
}

export default Mision
