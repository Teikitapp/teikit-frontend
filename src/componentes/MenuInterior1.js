import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../imagenes/logoTeikit2.png';
//import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import "../estilos/Header.css";
import Burger1 from './Burger1';
import Menu1 from './Menu1';


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

const MenuInterior1 = ({
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
  //const navigate = useNavigate();

  const onDeleteProduct = product => {
    const results = allProducts.filter(
      item => item.id !== product.id
    );
    console.log("desde HEADER: ", allProducts);


    setTotal(total - product.valor * product.quantity);
    setCountProducts(countProducts - product.quantity);
    setAllProducts(results);
  };

  const onCleanCart = () => {
    setAllProducts([]);
    setTotal(0);
    setCountProducts(0);
  };






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


  const [open1, setOpen1] = React.useState(false);
  const node = React.useRef();
  useOnClickOutside1(node, () => setOpen1(false));

  return (
    <div className='todo-menu'>
      {/* <div ref={node} className='menu-test'> */}
        <Burger1 open1={open1} setOpen1={setOpen1} />
        <Menu1 open1={open1} setOpen1={setOpen1} />

      {/* </div> */}
      <div className='nombre-t1'>
        <img className='logo' src={logo} alt='logo de freeCode' />
      </div>

      <div className='ingresa'>
        <div className='container-icon'>
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
            {allProducts.length > 0 ? (
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
                {allProducts.length}
                <button className='btn-clear-all' onClick={onCleanCart}>
                  Vaciar Carrito
                </button>
                <Link onClick={() => { setAllProducts(allProducts); setCountProducts(countProducts); setTotal(total); setActive(false); }} to="finalizarPedido">
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
  )
}

export default MenuInterior1
