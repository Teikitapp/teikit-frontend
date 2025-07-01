import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.nav`
display: flex;
flex-direction: column;
justify-content: center;
background-color: #FC4B08;
color:white;
transform: ${({ open1 }) => (open1 ? "translateX(0)" : "translateX(-100%)")};
height: 100vh;
text-align: left;
padding: 2rem;
position: absolute;
top: 0;
left: 0;
transition: transform 0.3s ease-in-out;

display: flex;
      align-content: space-around;
      align-items: center;

@media (max-width: 576px) {
  width: 100%;
  z-index: 1;
}

li {
color: white;
  font-size: 2rem;
  text-transform: uppercase;
  
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: #0d0c1d;
  text-decoration: none;
  transition: color 0.3s linear;
  padding-top: 30px;

  @media (max-width: 576px) {
    font-size: 1.5rem;
    text-align: center;
    color: white;
  }

  &:hover {
    color: #343078;
  }
}
`;

const Menu1 = ({ open1 }) => {
  const [active, setActive] = useState(false);

  return (
    <StyledMenu open1={open1}>
      <li>
        <Link to="/home">🏠 Inicio</Link>
      </li>
      <hr className='hrHorizontal' />
      <li>
        <Link to="/pedidos">🧾 Pedidos</Link>
      </li>
      <hr className='hrHorizontal' />
      <li>
        <Link to="/home" onClick={() => setActive(!active)}>🛒 Carrito</Link>
      </li>
      <hr className='hrHorizontal' />
      <li>
        <Link to="/retirosPendientes">⏳ Pedidos en curso</Link>
      </li>
      <hr className='hrHorizontal' />
      {/* <div className='cardMenu'>
                                 <div className='contenidoCard'>
                                        <div className='cardAvatar'><img className='imgAvatar' src={dog} alt='logo de freeCode'></img> </div>
                                        <div className='cardTexto'>
                                            <li>{email}</li>
                                            <li className='cardNombre'>{nombre} </li>
                                            <li><button className='cardBotonSalir' onClick={salir}>Salir</button></li>
                                        </div>
                                    </div>                                    
                                </div>*/}
      
      
    </StyledMenu>
  );
};

export default Menu1;
