import React, { useState } from 'react'
import CardProductosComercio from '../cafeteria/CardProductosComercio';
import logoCafeteria from "../../imagenes/logoCafeteria.png";
import { useNavigate } from 'react-router';
import ClienteService from '../../servicios/ClienteService';
import "../../estilos/HomeComercio.css";
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';

const HomeComercio = () => {

  const [listaPedidos, setListaPedidos] = useState([]);
  const [bool, setBool] = useState(false);

  let cont = 0;
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  date = date.toString();
  month = month.toString();
   // eslint-disable-next-line 
  if (date.length === 1){date = "0" + date}
   // eslint-disable-next-line 
  if (month.length === 1){month = "0" + month}

  let fechaHoy = date + "-" + month + "-" + year;
  const navigate = useNavigate();
  const salir = () => {
    navigate("/loginComercio");
  }
  const excel = () => {
    navigate("/subirExcel");
  }



 if(cont === 0){
   cont++;
      ClienteService.obtenerPedidos(1).then(response => {
        console.log("RESPONSE: ", response);    
           if(response.data.length === 0){
            setBool(true);
          }else{
            setBool(false);
          }
          setListaPedidos(response.data);
      }).catch(error => {
        console.log(error);
      })
    
  };

  /*INICIO*/
state = {
        woorksheets: [],
        files: [],
        propiedades: [],
        status: false
    }

    selectHola = React.createRef();

    leerrFilas = (index) =>{
       let hoja = this.state.woorksheets[index];
       let files = XLSX.utils.sheet_to_row_object_array(hoja.data);
       this.state.files=[];
       this.state.files = files;
       
       this.ingresarPedidosBD(files);
     }

     ingresarPedidosBD = (files) => {
     let body = { 
            "nombre" : null,
            "precioUnidad" : null,
            "categoria": null,
            "descripcion": null,
            "idCliente": null
        }

        for (let index = 0; index < files.length; index++) {
            body = { 
                "nombre" : files[index].PRODUCTO,
                "precioUnidad" : files[index].PRECIO,
                "categoria": null,
                "descripcion": null,
                "idCliente": 1
            }

            ClienteService.guardarProductos(body).then(response => {
            }).catch(error => {
                console.log(error);
            })
            
        }      
     }
 
     leerPropiedades = (index) => {
         let hoja = this.state.woorksheets[index];
         this.state.propiedades = [];
         for (let key in hoja.data) {
            let regEx = new RegExp("^\(\\w\)\(1\){1}$");
            if (regEx.test(key) === true) {
                this.state.propiedades.push(hoja.data[key].v)
            }          
         }       
     }

     cambiarHoja = () => {
        this.leerPropiedades(this.selectHola.curretnt.value);
        this.leerrFilas(this.selectHola.current.value);
        this.setState({
            files: this.state.files,
            propiedades: this.state.propiedades
        })
     }

    leerExcel = (e) => {

        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        let excel = formData.get("excel");
        let listWoorksheet = [];

        let reader = new FileReader()
        reader.readAsArrayBuffer(excel);
        reader.onloadend = (e) => {
            let data = new Uint8Array(e.target.result)
            let excelRead = XLSX.read(data, { type: 'array' })
            excelRead.SheetNames.forEach(function (SheetNames, index) {
                listWoorksheet.push({
                    data: excelRead.Sheets[SheetNames],
                    name: SheetNames,
                    index: index
                })
            })
            this.state.woorksheets = listWoorksheet;
            this.setState({
                woorksheets: this.state.woorksheets
            })

            this.leerPropiedades(0);
            this.leerrFilas(0);
            this.setState({
                files: this.state.files,
                propiedades: this.state.propiedades,
                status: true
            })


        }
    }

render() {
  return (
    <div className='divComercio'>
      <div>
       <img className="imgComercio" src={logoCafeteria} alt='logo'></img>
      </div>
      <div className='divButton'>
      <button className='cardBotonSalir' onClick={salir}>Cerrar sesión</button>
      <button className='cardBotonSalir' onClick={excel}>Agregar productos</button>
      </div>
      <div className='divFecha'><h1>Día: {fechaHoy}</h1></div>
      <div className='divCardTodosProductos'>
      {/* {bool === true  ? <h1>SIN PEDIDOS PARA REALIZAR</h1> : ""} */}
        {bool === false ? listaPedidos.map(product => (
          <div className='formatoCard' key={product.id}>
            <CardProductosComercio lista={product} setListaPedidos={setListaPedidos} />
          </div>
        )) : <h1 className='sinPedidos'>SIN PEDIDOS PARA REALIZAR</h1> }
      </div>
      
    </div>

  )
}
}
//export default HomeComercio
