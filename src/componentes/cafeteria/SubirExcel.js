import React, { Component, createRef } from 'react';
import * as XLSX from 'xlsx';
import { Link } from 'react-router-dom';
import ClienteService from '../../servicios/ClienteService';

export default class SubirExcel extends Component {
    state = {
        woorksheets: [],
        files: [],
        propiedades: [],
        status: false
    };

    selectHola = createRef();

    leerrFilas = (index) => {
        let hoja = this.state.woorksheets[index];
        let files = XLSX.utils.sheet_to_row_object_array(hoja.data);
        
        this.setState({ files });
        this.ingresarPedidosBD(files);
    };

    ingresarPedidosBD = (files) => {
        files.forEach(file => {
            let body = {
                nombre: file.PRODUCTO || null,
                precioUnidad: file.PRECIO || null,
                categoria: null,
                descripcion: null,
                idCliente: 1
            };

            ClienteService.guardarProductos(body)
                .catch(error => console.log(error));
        });
    };

    leerPropiedades = (index) => {
        let hoja = this.state.woorksheets[index];
        let propiedades = [];

        for (let key in hoja.data) {
            let regEx = new RegExp("^\\w1$");
            if (regEx.test(key)) {
                propiedades.push(hoja.data[key].v);
            }
        }

        this.setState({ propiedades });
    };

    cambiarHoja = () => {
        let index = this.selectHola.current.value;
        this.leerPropiedades(index);
        this.leerrFilas(index);
    };

    leerExcel = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        let excel = formData.get("excel");
        let listWoorksheet = [];

        let reader = new FileReader();
        reader.readAsArrayBuffer(excel);
        reader.onloadend = (e) => {
            let data = new Uint8Array(e.target.result);
            let excelRead = XLSX.read(data, { type: 'array' });

            excelRead.SheetNames.forEach((SheetNames, index) => {
                listWoorksheet.push({
                    data: excelRead.Sheets[SheetNames],
                    name: SheetNames,
                    index
                });
            });

            this.setState({ woorksheets: listWoorksheet }, () => {
                this.leerPropiedades(0);
                this.leerrFilas(0);
                this.setState({ status: true });
            });
        };
    };

    render() {
        return (
            <div className='container'>
                <h1 className='my-5'>Subir excel de productos</h1>
                <form onSubmit={this.leerExcel}>
                    <label>Seleccione archivo:</label>
                    <input type="file" className='form-control'
                        accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                        name="excel" />
                    <button className='btn btn-primary mt-3'>Subir</button>
                </form>
                
                <div>
                    <Link to="/homeComercio">
                        <button className='botonAtras'>Volver</button>
                    </Link>
                </div>

                <hr />
                {
                    this.state.status &&
                    <>
                        <form>
                            <label className='form-label'>Hojas</label>
                            <select className='form-select' ref={this.selectHola} onChange={this.cambiarHoja}>
                                {this.state.woorksheets.map((hoja, index) => (
                                    <option key={index} value={index}>{hoja.name}</option>
                                ))}
                            </select>
                        </form>

                        <table className='table mt-3'>
                            <thead>
                                <tr>
                                    {this.state.propiedades.map((propiedad, index) => (
                                        <th key={index}>{propiedad}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.files.map((files, index1) => (
                                    <tr key={index1}>
                                        {this.state.propiedades.map((propiedad, index2) => (
                                            <td key={index2}>{files[propiedad]}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </>
                }
            </div>
        );
    }
}
