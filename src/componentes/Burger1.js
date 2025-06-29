import React from "react";
import styled from "styled-components";

const StyledBurger = styled.button`
 
  top: 5%;
  left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open1 }) => (open1 ? "#0D0C1D" : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open1 }) => (open1 ? "rotate(45deg)" : "rotate(0)")};
      background-color: white;
    }

    :nth-child(2) {
      opacity: ${({ open1 }) => (open1 ? "0" : "1")};
      transform: ${({ open1 }) => (open1 ? "translateX(20px)" : "translateX(0)")};
      background-color: white;
    }

    :nth-child(3) {
      transform: ${({ open1 }) => (open1 ? "rotate(-45deg)" : "rotate(0)")};
          background-color: white;
    }
  }
  @media (max-width: 576px) {
      top: 0.5%;
  }
`;

const Burger1 = ({ open1, setOpen1 }) => {
  return (
    <div className="div-menu-landing1">
      <StyledBurger open1={open1} onClick={() => setOpen1(!open1)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </div>
  );
};

export default Burger1;
