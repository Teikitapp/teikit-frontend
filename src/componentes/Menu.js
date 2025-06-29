import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";




const Menu = ({ open }) => {
  const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #FC4B08;
  color:white;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
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

  return (
    <StyledMenu open={open}>
      <li>
        <Link to="/Landing">  💁🏻‍♂️ Inicio</Link>
      </li>
      <li href="/">
        <Link to="/QueEs">  💸 ¿Qué Es?</Link>
      </li>
      <li href="/">
        <Link to="/quienesSomos"> 💸  ¿Quiénes somos?</Link>
      </li>
      <li href="/">
        <Link to="/aliados"> 💸  Aliados</Link>
      </li>
      <li href="/">
        <Link to="/mision"> 💸  Misión</Link>
      </li>
      <li href="/">
        <Link to="/trayectoria"> 💸  Trayectoria</Link>
      </li>
      <li href="/">
        <Link to="/tecnologia"> 💸  Tecnología</Link>
      </li>
      <li href="/">
        <Link to="/contactanos"> 📩 Contactanos</Link>
      </li>
    </StyledMenu>
  );
};

export default Menu;
