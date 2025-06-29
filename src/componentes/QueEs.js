import React from 'react'
import imagenQueEs from "../imagenes/casillero-queEs.png";

import sp from "../imagenes/seleccionHorario.png";
import prp from "../imagenes/paraRealizarpedido.png";
import rp from "../imagenes/retiraPedido.png";

import MenuInterior from './MenuInterior';

const QueEs = () => {
    return (
        <div>
            <div className='menu-div'>
                <MenuInterior></MenuInterior>
            </div>
            <div className="divTres">
                <h1 className='textoComoFunciona'>¿Qué es?</h1>
                <h3 className='textoSubTituloQueEs'>Un servicio que te permite pedir tu colación desde el celular y retirarla en lockers inteligentes, sin hacer fila y al mismo precio que en la cafetería.</h3> 
                
                <div className='div-img'>
                   <div className='div-img-logo-grande'>
                     <img className='imagen' src={imagenQueEs} alt='logo'></img>
                   </div>
                   <div className='div-img-logo-pequenio'>
                   <img className='img-logo-pequenio' src={rp} alt='logo'></img>
                   <span className='text-logo-pequenio'>Realizar Pedido</span>
                   <img className='img-logo-pequenio-2' src={sp} alt='logo'></img>
                   <span className='text-logo-pequenio'>Selecciona Horario</span>
                   <img className='img-logo-pequenio-2' src={prp} alt='logo'></img>
                   <span className='text-logo-pequenio'>Retira Pedido</span>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default QueEs
