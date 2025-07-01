import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Burger from './Burger';
import Menu from './Menu';
import teikitLogoBlanco from "../imagenes/teikit-logo-letras-blancas.png";
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
    const [menuOpen, setMenuOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setMenuOpen(false));

    return (
        <div className="todo-menu">
            <div className="menu-test">
                <Burger open={menuOpen} setOpen={setMenuOpen} />
                <Menu open={menuOpen} setOpen={setMenuOpen} />   
            </div>
            {/* Mostrar el logo solo si el menú lateral está cerrado */}
            {!menuOpen && (
                <div className="nombre-t" style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                    <img
                        src={teikitLogoBlanco}
                        alt="TEIKIT"
                        style={{
                            height: "27px",
                            width: "auto",
                            margin: "0 auto",
                            display: "block"
                        }}
                    />
                </div>
            )}
            <div className='ingresa'>
                <Link to="/login" className='link-ingresa'>
                    Ingresar<i className="bi bi-person icon-persona"></i>
                </Link>
            </div>
            {/* Menú lateral */}
            {menuOpen && (
                <div
                    className="desplegable"
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "300px",
                        height: "100vh",
                        background: "#FC4B08",
                        zIndex: 9999,
                        padding: "2rem",
                        color: "white"
                    }}
                >
                    {/* Ejemplo de cierre */}
                    <button
                        onClick={() => setMenuOpen(false)}
                        aria-label="Cerrar menú"
                        style={{
                            background: "none",
                            border: "none",
                            color: "white",
                            fontSize: 32,
                            position: "absolute",
                            top: 10,
                            right: 10,
                            cursor: "pointer"
                        }}
                    >✕</button>
                    {/* ...aquí tus links... */}
                </div>
            )}
        </div>
    );
};

export default MenuInterior;
