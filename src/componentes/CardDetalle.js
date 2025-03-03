import React from 'react';
import producto from "../imagenes/producto.png";
import "../estilos/CardVerDetalle.css";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const CardDetalle = ({ nombreComercio, allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal }) => {

    const [valorCantidad, estadoValorClick] = useState(1);
    const location = useLocation();
    const { id } = location.state;
    const { nombre } = location.state;
    const { valor } = location.state;
    const { descripcion } = location.state;

    const product = {
        id: id,
        nombre: nombre,
        valor: valor,
        descripcion: descripcion,
        quantity: valorCantidad
    };

    const agregarProducto = product => {
        // Si el producto ya existe en el carrito, solo incrementa su cantidad
        const productExists = allProducts.find(item => item.id === product.id);
        if (productExists) {
            const updatedProducts = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + valorCantidad }  // Se acumula la cantidad
                    : item
            );

            // Actualizamos el countProducts y total acumulando la cantidad y el valor
            setCountProducts(countProducts + valorCantidad);
            setTotal(total + (valor * valorCantidad));

            setAllProducts(updatedProducts);
        } else {
            // Si el producto no existe, lo agrega al carrito con la cantidad seleccionada
            setAllProducts([...allProducts, product]);
            setCountProducts(countProducts + valorCantidad);
            setTotal(total + (valor * valorCantidad));
        }
    };

    function restarYsumar(accion) {
        if (accion === "sumar") {
            estadoValorClick(valorCantidad + 1);
        } else {
            if (valorCantidad > 1) {  // Prevenir que la cantidad sea menor a 1
                estadoValorClick(valorCantidad - 1);
            }
        }
    }

    return (
        <div>
            <div className='divLogoYtexto'>
                <div className='divLogo'>
                    <img className="imagengProductoVerDetalle" src={producto} alt='logo'></img>
                </div>
                <div className='divTexto'>
                    <li className='nombreProductoVerDetalle'>{nombre}</li>
                    <li className='sectorProductoVerDetalle'>{nombreComercio}</li>
                    <li className='precioProductoVerDetalle'>${valor}</li>
                </div>
            </div>

            <div className='textoCardProductoVerDetalle'>
                <li className='textoDescripcion'>Descripción: {descripcion}</li>
            </div>

            <div className='divCantidadYboton'>
                <div className='cantidad'>
                    <label onClick={() => { restarYsumar("restar") }} className="bi bi-dash cardBotonMenos"></label>
                    <label className='textoCantidad'>{valorCantidad}</label>
                    <label onClick={() => { restarYsumar("sumar") }} className='bi bi-plus-lg cardBotonMas'></label>
                </div>

                <div className=''>
                    <Link to="/pedidos"><button className='botonVolver'>Volver</button></Link>
                    <button disabled={valorCantidad < 1} onClick={() => { agregarProducto(product) }} className='botonVerDetalles'>Añadir al carro</button>
                </div>
            </div>
        </div>
    );
};

export default CardDetalle;
