import React, { useEffect, useState } from 'react'
import CardProductosComercio from '../cafeteria/CardProductosComercio';
import logoCafeteria from "../../imagenes/logoCafeteria.png";
import { useNavigate } from 'react-router';
import ClienteService from '../../servicios/ClienteService';
import "../../estilos/HomeComercio.css";


const HomeComercio = () => {

  const [listaPedidos, setListaPedidos] = useState([]);
  const [bool, setBool] = useState(false);

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  date = date.toString();
  month = month.toString();
   // eslint-disable-next-line 
  if (date.length === 1){date = "0" + date}
   // eslint-disable-next-line 
  if (month.length === 1){month = "0" + month}

  let fechaHoy = date + "-" + month + "-" + year;
  const navigate = useNavigate();
  const salir = () => {
    navigate("/loginComercio");
  }
  const excel = () => {
    navigate("/subirExcel");
  }



  useEffect(() => {
      ClienteService.obtenerPedidos(1).then(response => {
        console.log("RESPONSE: ", response);    
         
      }).catch(error => {
        console.log(error);
      })
    
  }, [] );

  return (
    <div className='divComercio'>
      <div>
       <img className="imgComercio" src={logoCafeteria} alt='logo'></img>
      </div>
      <div className='divButton'>
      <button className='cardBotonSalir' onClick={salir}>Cerrar sesión</button>
      <button className='cardBotonSalir' onClick={excel}>Agregar productos</button>
      </div>
      <div className='divFecha'><h1>Día: {fechaHoy}</h1></div>
      <div className='divCardTodosProductos'>
      {/* {bool === true  ? <h1>SIN PEDIDOS PARA REALIZAR</h1> : ""} */}
        {bool === false ? listaPedidos.map(product => (
          <div className='formatoCard' key={product.id}>
            <CardProductosComercio lista={product} setListaPedidos={setListaPedidos} />
          </div>
        )) : <h1 className='sinPedidos'>SIN PEDIDOS PARA REALIZAR</h1> }
      </div>
      
    </div>

  )
}

export default HomeComercio
