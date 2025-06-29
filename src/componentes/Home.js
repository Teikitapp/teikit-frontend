import React from 'react'
import Footer from './Footer';
import InicioPrimero from './InicioPrimero';
import InicioSegundo from './InicioSegundo';
import ScrollTop from './ScrollTop';
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

const Home = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
  email,
  nombre

}) => {
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

        <ScrollTop/>
        <InicioPrimero />
        <InicioSegundo />
        <Footer /> 
    </div>
  )
}

export default Home
