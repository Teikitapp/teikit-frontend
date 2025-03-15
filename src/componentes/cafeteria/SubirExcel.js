import React, { Component } from 'react'
import * as XLSX from 'xlsx';
import ClienteService from '../servicios/ClienteService';
import { Link } from 'react-router-dom';

export default class SubirExcel extends Component {

   

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
            <div className='container' >
                <h1 className='my-5'>Subir excel de productos</h1>
                <form onSubmit={this.leerExcel}>
                    <label> Seleccione archivo:</label>
                    <input type={"file"} className='form-control'
                        accept='aplplication/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                        name="excel" />
                    <button className='btn btn-primary mt-3'> Subir</button>
                    
                </form>
                <div>
                <Link  to="/homeComercio"><button className='botonAtras'>Volver</button></Link> 
                </div>
                    
                <hr />
                {
                    this.state.status && 
                    <>
                     <form>
                        <label className='form-label'>Hojas</label>
                        <select className='form-select' ref={this.selectHola} onChange={this.cambiarHoja}>
                        {
                            this.state.woorksheets.map((hoja, index) => {
                                return (<option key={index} value={index}>{hoja.name}</option>)
                            })
                        }
                        </select>
                     </form>
                     <table className='table mt-3'>
                        <thead>
                            <tr>
                                {
                                    this.state.propiedades.map((propiedades,index) => {
                                        return (
                                            <th key={index}>
                                                {propiedades}
                                            </th>
                                        )
                                    })
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.files.map((files, index1) => {
                                    return (
                                    <tr key={index1}>
                                        {
                                            this.state.propiedades.map((propiedad, index2) => {
                                                return <td> {files[propiedad]} </td>
                                            })
                                        }

                                    </tr>
                                    )
                                })
                            
                            }
                        </tbody>                       
                     </table>
                    </>
                }

            </div>
        )
    }

}

//export default SubirExcel
