import React, { useState } from 'react';
import '../estilos/FinalizarPedidos.css';
import ScrollTop from './ScrollTop';
import DatePicker, { registerLocale } from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';
import { isWeekend } from 'date-fns';
import { Link } from 'react-router-dom';
import Header from './Header';

registerLocale("es", es);

const FinalizarPedidos = ({
  setAllProducts,
  setTotal,
  countProducts,
  setCountProducts,
  email,
  nombre,
  nombreComercio,
  allProducts,
  total,
  dia,
  mes,
  anio,
  setFechaRetiro,
  setHorarioRetiro,
}) => {

  const [fecha, setFecha] = useState(null);
  const [horaRetiro, setHoraRetiro] = useState(null);
  const diaFinMes = (dia + 8) > 30 ? dia - 22 : (dia + 8);
  const mesFinMes = (dia + 8) > 31 ? mes + 1 : mes;
  const fechaHoy = mes + "/" + dia + "/" + anio;
  const fechaHasta = mesFinMes + "/" + diaFinMes + "/" + anio;
  const minDate = new Date(fechaHoy);
  const maxDate = new Date(fechaHasta);

  const tiempoRetiroChance = (t) => {
    setHoraRetiro(t.target.value);
    setHorarioRetiro(t.target.value);
  };

  const dateChance = (date) => {
    if (!date) { 
      setFecha(null); 
      setFechaRetiro(null); 
      return; 
    }
    
    setFecha(date);
    let temp = date.toLocaleDateString('es-ES');
    setFechaRetiro(formateaDate(temp));
  };

    const formateaDate = (temp) => {
      let d = temp.split('/');
      let a = d[0];
      let b = d[1];
      let c = d[2];
      if(a.length === 1){a = "0"+a; temp = a +"/"+ b +"/"+ c; }
      if(b.length === 1){b = "0"+b; temp = a +"/"+ b +"/"+ c;}
      log.console(temp);
    return temp;
  }
  

  const isWeekendDay = (date) => {
    return isWeekend(date);
  };

  const filterWeek = (date) => {
    return !isWeekendDay(date);
  };

  // Obtener la hora actual y la hora del sistema
  const currentHour = new Date().getHours();
  const currentMinutes = new Date().getMinutes();

  // Filtrar las horas según la hora actual
  const filterHours = (hours) => {
    // Si el día seleccionado es el mismo día, se filtran las horas posteriores a la hora actual
    if (fecha && fecha.toLocaleDateString('es-ES') === new Date().toLocaleDateString('es-ES')) {
      return hours.filter(hour => {
        const [hourValue, minuteValue] = hour.split(':').map(Number);
        return hourValue > currentHour || (hourValue === currentHour && minuteValue > currentMinutes);
      });
    }
    return hours; // Si el día seleccionado no es hoy, no se filtran las horas
  };

  const availableHours = filterHours([
    "9:00", "9:30", "10:00", "13:00", "14:30", "16:00"
  ]);

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

        <div className='card-product-container-finalizar'>
          <div className='card-product-finalizar'>
            <div className='card-finalizar'>

              <div className='divCalendario'>
                <DatePicker
                  showIcon
                  isClearable
                  className='pitcher fa fa-calendar'
                  placeholderText="Seleccione fecha retiro"
                  selected={fecha}
                  onChange={(date) => { allProducts.length === 0 ? dateChance("Seleccione fecha retiro") : dateChance(date) }}
                  locale="es"
                  dateFormat="dd/MM/yyyy "
                  filterDate={filterWeek}
                  minDate={minDate}
                  maxDate={maxDate}
                  disabled={allProducts.length === 0}
                />
              </div>

              <div className='divSelectTiempo'>
                <select 
                  onChange={(hora) => { tiempoRetiroChance(hora) }} 
                  disabled={allProducts.length === 0} 
                  className='select-tiempo'>
                  <option>Seleccione hora retiro</option>
                  {availableHours.map((hora, index) => (
                    <option key={index} value={hora}>{hora}</option>
                  ))}
                </select>
              </div>

              <div className='divPagar'>
                <Link to="/pedidos"><button className='botonSeguirComprando'>Seguir comprando </button></Link>
                <Link to="/pagar"><button
                  disabled={allProducts.length === 0 || (horaRetiro === null || horaRetiro === "Seleccione hora retiro") || fecha === null} 
                  className='botonPagar'>Ir a Pagar </button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalizarPedidos;
