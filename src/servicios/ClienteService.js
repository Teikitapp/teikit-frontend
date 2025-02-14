import axios from "axios";

const BACKEND_API_URL = process.env.BACKEND_API_URL;
const MP_API_URL = process.env.MP_API_URL;

const CLIENTE_BASE_REST_API_URL = `${BACKEND_API_URL}/api/data/clientes`;
const USUARIO_BASE_REST_API_URL = `${BACKEND_API_URL}/api/usuario/listarUsuarios`;
const PAGO_BASE_REST_API_URL = `${MP_API_URL}/create_preference`;
const PRODUCTOS_BASE_REST_API_URL = `${BACKEND_API_URL}/api/producto/listarProductos`;
const DETALLE_PEDIDO_BASE_REST_API_URL = `${BACKEND_API_URL}/api/detallePedido/ingresarDetallePedido`;
const PEDIDO_BASE_REST_API_URL = `${BACKEND_API_URL}/api/pedido/ingresarPedido`;
const CASILLERO_BASE_REST_API_URL = `${BACKEND_API_URL}/api/casillero/buscarCasilleroDisponible`;
//const FIN_PEDIDO_BASE_REST_API_URL= "`${BACKEND_API_URL}/api/pedido/buscarPedidoPorId/"

class ClienteService {
    getAllClientes(){
        return axios.get(CLIENTE_BASE_REST_API_URL);
    }

    getAllUsuarios(){
        return axios.get(USUARIO_BASE_REST_API_URL);
    }
    getAllProductos(){
        return axios.get(PRODUCTOS_BASE_REST_API_URL);
    }

    createPreference(cantidad, total, idDelPedido, casillero){
        
        console.log("Desde el servicio");
        console.log("Mercado Pago URL:", PAGO_BASE_REST_API_URL);

        return axios.post((PAGO_BASE_REST_API_URL),{
            title:"PRUEBA TEIKIT",
            quantity:cantidad,
            price:total,
            idDelPedido:idDelPedido,
            casillero:casillero
        });
        
    } 

    enviarDetallePedido(request){              
        return axios.post((DETALLE_PEDIDO_BASE_REST_API_URL),request);
        
    } 
    enviarPedido(request){              
        return axios.post((PEDIDO_BASE_REST_API_URL),request);
        
    } 
    getCasilleroDisponible(){              
        return axios.get(CASILLERO_BASE_REST_API_URL);
        
    } 
    getBuscarPorEstadoIdcliente(status, idUsuario){
        return axios.get(`${BACKEND_API_URL}/api/pedido/buscarPedidoPorId/${status}-${idUsuario}`);
    }

    getBuscarPorDosEstadosIdcliente(idUsuario){
        return axios.get(`${BACKEND_API_URL}/api/pedido/buscarPedidoEnProcesoYlistoRetiro/${idUsuario}`);
    }

    actualizarEstadoPedido(idPedido, nuevoEstado){
        return axios.put(`${BACKEND_API_URL}/api/pedido/actualizarPedido/${idPedido}-${nuevoEstado}`);
    }

    actualizarEstadoCasillero(idCasillero, nuevoEstado){
        return axios.put(`${BACKEND_API_URL}/api/casillero/actualizarEstadoCasillero/${idCasillero}-${nuevoEstado}`);
    }

    obtenerCliente(request){              
        return axios.post(`${BACKEND_API_URL}/api/data/buscarClienteUserPass`, request);
    } 

    obtenerUsuario(request){              
        return axios.post(`${BACKEND_API_URL}/api/usuario/buscarUsuarioUserPass`, request);      
    } 

    obtenerComercio(request){              
        return axios.post(`${BACKEND_API_URL}/api/data/buscarClienteUserPass`, request);       
    } 

    registrarUsuario(request){              
        return axios.post(`${BACKEND_API_URL}/api/usuario/guardarUsuarios`, request);       
    } 

    // Servicios Comercios
    obtenerPedidos(idComercio){              
        return axios.get(`${BACKEND_API_URL}/api/pedido/listarPedidosYdetalle/${idComercio}`);       
    } 
}
// eslint-disable-next-line
export default new ClienteService();