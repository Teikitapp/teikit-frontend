import React from 'react'
import dog from '../imagenes/dog.png';
import socio1 from '../imagenes/socio1.png';
import socio2 from '../imagenes/socio2.png';
import MenuInterior from './MenuInterior';

const QuienesSomos = () => {
  return (
    <div>
      <div className='menu-div'>
        <MenuInterior></MenuInterior>
      </div>
      <div className="divTQuienes">
        <h1 className='textoQuienesSomos'>¿Quiénes somos?</h1>
        <h3 className='textoQuienes'>
          Somos un grupo de jóvenes que sabe lo que es hacer fila con hambre y apuro.
          <p> Por eso creamos Teikit: una forma simple, rápida y sin cobros extra para pedir tu comida y retirarla sin estrés.</p>
        </h3>


        <div className='divContenedorSocios'>
          <div className='divImgSocios'>
            <img className='imgSocio' src={socio1} alt='logo de freeCode'></img>
            <label className='nombresSocios'>Sung Hee Kim</label>
          </div>

          <div className='divImgSocios'>
            <img className='imgSocio' src={socio2} alt='logo de freeCode'></img>
            <label className='nombresSocios'>Sebastián Cifuentes</label>
          </div>

          <div className='divImgSocios'>
            <img className='imgSocio' src={dog} alt='logo de freeCode'></img>
            <label className='nombresSocios'>Valeria Martinez</label>
          </div>

          <div className='divImgSocios'>
            <img className='imgSocio' src={dog} alt='logo de freeCode'></img>
            <label className='nombresSocios'>Fabiola Yong</label>
          </div>
        </div>
      </div>




    </div>
  )
}

export default QuienesSomos
