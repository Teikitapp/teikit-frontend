import React, { useEffect, useState } from 'react';
import "../estilos/Pedidos.css";
import lupa from "../imagenes/lupa.png";
import CardProducto from './CardProducto';
import ScrollTop from './ScrollTop';
import Titulo from './Titulo';
import ClienteService from '../servicios/ClienteService';
import Header from './Header';

const Pedidos = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
  email,
  nombre,
  nombreComercio
}) => {

  const [listaProductos, setListaProductos] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda

  useEffect(() => {
    ClienteService.getAllProductos().then(response => {
      setListaProductos(response.data);
    }).catch(error => {
      console.log(error);
    })
  }, []);

  return (
    <div>
      <Header 
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
        <div>               
          <div className="cajabuscar">
            <form method="get" id="buscarform">
              <fieldset>
                <input
                  type="text"
                  id="s"
                  placeholder="Buscar"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)} // Actualiza el término de búsqueda mientras escribes
                />
                <button className='botonLupa' value="" disabled>
                  <img className="lupa" src={lupa} alt='logo'></img>
                </button>
              </fieldset>
            </form>
          </div>
        </div>

        <div className='divCardTodosProductos'>
          {listaProductos
            .filter(product =>
              product.nombre.toLowerCase().includes(searchTerm.toLowerCase()) // Filtra mientras escribes
            )
            .map(filteredProduct => (
              <div className='formatoCard' key={filteredProduct.id}>
                <CardProducto 
                  id={filteredProduct.id} 
                  nombreComercio={nombreComercio} 
                  nombre={filteredProduct.nombre} 
                  valor={filteredProduct.precioUnidad} 
                  descripcion={filteredProduct.descripcion} 
                />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Pedidos;
