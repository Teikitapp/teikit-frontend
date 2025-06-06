import React, { useState } from 'react';
import logo from '../imagenes/logoTeikit2.png';
import menu from '../imagenes/menu2.png';
import dog from '../imagenes/dog.png';
import logoBlanco2 from '../imagenes/teikitMenu.png';
import "../estilos/Header.css";
import { Link, useNavigate } from 'react-router-dom';
import { Tooltip } from 'react-tooltip'

const Header = ({
    allProducts,
    setAllProducts,
    total,
    countProducts,
    setCountProducts,
    setTotal,
    email,
    nombre
}) => {

    const [active, setActive] = useState(false);
    const navigate = useNavigate();

    // Función para eliminar un producto
    const onDeleteProduct = product => {
        const results = allProducts.filter(item => item.id !== product.id);
        setTotal(total - product.valor * product.quantity);
        setCountProducts(countProducts - product.quantity);
        setAllProducts(results);
    };

    // Función para limpiar todo el carrito
    const onCleanCart = () => {
        setAllProducts([]);
        setTotal(0);
        setCountProducts(0);
    };

    // Función para ajustar la cantidad de un producto
    const adjustQuantity = (product, action) => {
        const updatedProducts = allProducts.map(item => {
            if (item.id === product.id) {
                const updatedQuantity = action === 'increment' ? item.quantity + 1 : item.quantity - 1;
                if (updatedQuantity > 0) {
                    item.quantity = updatedQuantity;
                    setTotal(total + (action === 'increment' ? item.valor : -item.valor));
                    setCountProducts(countProducts + (action === 'increment' ? 1 : -1));
                }
            }
            return item;
        });
        setAllProducts(updatedProducts);
    };

    // Función para abrir y cerrar el menú
    const abrir_cerrar_menu = () => {
        setActive(false);
        let menu_desplegable = document.getElementById('menu');
        menu_desplegable.classList.toggle('abrir_menu');
    };

    // Función para cerrar sesión
    const salir = () => {
        abrir_cerrar_menu();
        localStorage.setItem('clave', "");
        localStorage.setItem('usuario', "");
        navigate("/login");
    };

    return (
        <div className='divContenedor'>
            <div className='divHead'>
                <div>
                    <header className='divHeader'>
                        <div className="">
                           <img data-tooltip-id="my-tooltip"
                             data-tooltip-content="Abrir Menú"
                             data-tooltip-place="top"  
                             onClick={abrir_cerrar_menu} className='menu' src={menu} alt='logo de freeCode' />  
                        </div>
                        <nav id='menu' className="desplegable">
                             <div className='headerMenu' onClick={abrir_cerrar_menu} >
                                <img
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="Cerrar Menú"
                                data-tooltip-place="right"   
                                className='headerMenuImagen' src={logoBlanco2} alt='logo' />
                            </div>
                            <Tooltip id="my-tooltip" />  
                            <ul>
                                <li>
                                    <Link to="/home" onClick={abrir_cerrar_menu} >Home</Link>
                                </li>
                                <hr className='hrHorizontal' />
                                <li>
                                    <Link to="/pedidos" onClick={abrir_cerrar_menu} >Pedidos</Link>
                                </li>
                                <hr className='hrHorizontal' />
                                <li> <Link to="/home" onClick={() => setActive(!active)} >Carrito</Link></li>
                                <hr className='hrHorizontal' />
                                <li>
                                    <Link to="/retirosPendientes" onClick={abrir_cerrar_menu} >Pedidos en curso</Link>
                                </li>
                                <hr className='hrHorizontal' />
                                <li> <Link to="/home" onClick={abrir_cerrar_menu} >Configuraciones</Link></li>
                                <hr className='hrHorizontal' />
                                <li> <Link to="/home" onClick={abrir_cerrar_menu} >Acerca de</Link></li>
                                <hr className='hrHorizontal' />
                                <div className='cardMenu'>
                                    <div className='contenidoCard'>
                                        <div className='cardAvatar'>
                                            <img className='imgAvatar' src={dog} alt='logo de freeCode'></img>
                                        </div>
                                        <div className='cardTexto'>
                                            <li>{email}</li>  
                                            <li className='cardNombre'>{nombre}</li>  
                                            <li><button className='cardBotonSalir' onClick={salir}>Salir</button></li>  
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </nav>
                    </header>
                </div>

                <img className='logo' src={logo} alt='logo de freeCode' />
                <div className='container-icon' onChange={abrir_cerrar_menu}>
                    <div
                        className='container-cart-icon carrito'
                        onClick={() => setActive(!active)}
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='icon-cart'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
                            />
                        </svg>
                        <div className='count-products'>
                            <span id='contador-productos'>{countProducts}</span>
                        </div>
                    </div>

                    <div
                        className={`container-cart-products ${active ? '' : 'hidden-cart'
                            }`}
                    >
                        {allProducts.length ? (
                            <>
                                <div className='row-product'>
                                    {allProducts.map(product => (
                                        <div className='cart-product' key={product.id}>
                                            <div className='info-cart-product'>
                                                <span className='cantidad-producto-carrito'>
                                                    {product.quantity}
                                                </span>
                                                <p className='titulo-producto-carrito'>
                                                    {product.nombre}
                                                </p>
                                                <span className='precio-producto-carrito'>
                                                    ${product.valor}
                                                </span>
                                                <div className='cantidad-ajustable'>
                                                    <button onClick={() => adjustQuantity(product, 'decrement')}>-</button>
                                                    <button onClick={() => adjustQuantity(product, 'increment')}>+</button>
                                                </div>
                                            </div>
                                            <svg
                                                xmlns='http://www.w3.org/2000/svg'
                                                fill='none'
                                                viewBox='0 0 24 24'
                                                strokeWidth='1.5'
                                                stroke='currentColor'
                                                className='icon-close'
                                                onClick={() => onDeleteProduct(product)}
                                            >
                                                <path
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    d='M6 18L18 6M6 6l12 12'
                                                />
                                            </svg>
                                        </div>
                                    ))}
                                </div>

                                <div className='cart-total'>
                                    <h3>Total:</h3>
                                    <span className='total-pagar'>${total}</span>
                                </div>

                                <button className='btn-clear-all' onClick={onCleanCart}>
                                    Vaciar Carrito
                                </button>
                                <Link onClick={() => { setAllProducts(allProducts); setCountProducts(countProducts); setTotal(total); setActive(false); }} to="/pedidos/verDetalle/finalizarPedido">
                                    <button className='btnFinalizarPedido' >Finalizar pedido
                                    </button></Link>
                            </>
                        ) : (
                            <p className='cart-empty'>El carrito está vacío</p>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;
