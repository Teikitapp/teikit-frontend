import React, { useEffect, useState } from 'react'
import "../estilos/Pedidos.css";
import lupa from "../imagenes/lupa.png";
import CardProducto from './CardProducto';


import ScrollTop from './ScrollTop';
import Titulo from './Titulo';
import ClienteService from '../servicios/ClienteService';
import MenuInterior1 from './MenuInterior1';

const useOnClickOutside1 = (ref, handler) => {
    React.useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) return;
        handler(event);
      };
      document.addEventListener("mousedown1", listener);
  
      return () => {
        document.removeEventListener("mousedown1", listener);
      };
    }, [ref, handler]);
  };

const Pedidos = ({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal,
    email,
    nombre,
    nombreComercio}) => {
    
    const [listaProductos, setListaProductos] = useState([]);
    
    useEffect(() => {
        ClienteService.getAllProductos().then(response => {
            setListaProductos(response.data);
        }).catch(error => {
            console.log(error);
        })


    }, []);
    return (
        <div>
            {/* <Header 
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}
          email={email}
          nombre={nombre}
        /> */}
         <MenuInterior1
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
                email={email}
                nombre={nombre}
                 /> 
              
        <div className='fondoPedidos'>           
            <ScrollTop />
             <Titulo nombreComercio={nombreComercio}/>            
            <div className='divContenedorCajaBuscra'>               
                <div className="cajabuscar">
                    <form method="get" id="buscarform">
                        <fieldset>
                            <input type="text" id="s" placeholder="Buscar" />
                            <button className='botonLupa' value="">
                                <img className="lupa" src={lupa} alt='logo'></img></button>
                        </fieldset>
                    </form>
                </div>
            </div>
            <div className='divCardTodosProductos'>
            {listaProductos.map(product => (
                <div className='formatoCard' key={product.id}>
                    <CardProducto id={product.id} nombreComercio={nombreComercio} nombre={product.nombre} valor={product.precioUnidad} descripcion={product.descripcion} />                   
                </div>
                ))}       
            </div>
        </div>
    </div>
)}

export default Pedidos;
