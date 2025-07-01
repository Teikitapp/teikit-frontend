import React, { useRef } from 'react'
import Burger from './Burger';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "../estilos/LandingPage.css";

const useOnClickOutside = (ref, handler) => {
    useEffect(() => {
      const listener = event => {
        if (!ref.current || ref.current.contains(event.target)) return;
        handler(event);
      };
      document.addEventListener("mousedown", listener);
  
      return () => {
        document.removeEventListener("mousedown", listener);
      };
    }, [ref, handler]);
  };

  
const MenuInterior = () => {


  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <div className='todo-menu'>
      <div ref={node} className='menu-test'>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />   
     </div>
     <div className={`nombre-t${open ? ' hide-teikit' : ''}`}>TEIKIT</div>
     <div className='ingresa'>
          <Link to="/login" className='link-ingresa'>
            Ingresar<i className="bi bi-person icon-persona"></i>
          </Link>
     </div>
    </div>
  )
}

export default MenuInterior
