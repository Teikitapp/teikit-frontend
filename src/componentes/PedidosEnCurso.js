import React, { useState, useEffect } from 'react';
import ScrollTop from './ScrollTop';
import ClienteService from '../servicios/ClienteService';
import '../estilos/DetallePedidoFin.css';
import { Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Button } from 'reactstrap';
import Header from './Header';

const PedidosEnCurso = ({
  allProducts,
  setAllProducts,
  total,
  countProducts,
  setCountProducts,
  setTotal,
  nombreApellido,
  email,
  usuario,
}) => {
  const [detalle, setDetalle] = useState([]);
  const [abierto, setAbierto] = useState(false);
  const [modalEnPreparacion, setModalEnPreparacion] = useState(false);
  const [newNpedido, setNewNpedido] = useState(0);
  const [newNcasillero, setNewNcasillero] = useState(0);

  // Obtener pedidos pendientes del usuario
  useEffect(() => {
    if (usuario.id) {
      ClienteService.getBuscarPorDosEstadosIdcliente(usuario.id)
        .then((response) => {
          console.log('Usuario ID:', usuario.id);
          setDetalle(response.data);
        })
        .catch((error) => {
          console.error('Error al obtener pedidos:', error);
        });
    }
  }, [usuario.id]);

  // Manejar apertura de casillero
  const abrir = (nCasillero, nPedido, estadoPedido) => {
    console.log('Abrir casillero:', nCasillero, 'Pedido:', nPedido);
    setNewNpedido(nPedido);
    setNewNcasillero(nCasillero);

    if (estadoPedido === 2) {
      setModalEnPreparacion(true);
    } else if (estadoPedido === 3) {
      setAbierto(true);
    }
  };

  // Confirmar apertura del casillero
  const confirmaAbrir = async () => {
    try {
      const actualizarCasillero = await ClienteService.actualizarEstadoCasillero(newNcasillero, 1);
      console.log('Estado del casillero actualizado:', actualizarCasillero.data);

      const actualizarPedido = await ClienteService.actualizarEstadoPedido(newNpedido, 4);
      console.log('Estado del pedido actualizado:', actualizarPedido.data);
    } catch (error) {
      console.error('Error al actualizar estados:', error);
    }

    setAbierto(false);
  };

  // Cerrar modal de confirmación
  const cerrarConfirmar = () => {
    setAbierto(false);
    setModalEnPreparacion(false);
  };

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
        nombre={nombreApellido}
      />
      <div className="fondoPedidos">
        <ScrollTop />

        <div className="card-product-container">
          <div className="card-product">
            <div className="card">
              <h1 className="tituloPedido">Retiros pendientes</h1>

              {detalle.length > 0 ? (
                detalle.map((d) => (
                  <div className="card" key={d.id}>
                    <div className="contenedorTexto">
                      <label>Casillero: {d.casillero}</label>
                      <label>Fecha de retiro: {d.fechaRetiraPedido}</label>
                      <label>Hora: {d.horaRetiraPedido}</label>
                      <label>Lugar: {d.lugarRetiraPedido}</label>
                    </div>

                    <div>
                      <button className="botonAtras" onClick={() => abrir(d.casillero, d.id, d.status)}>
                        Abrir Casillero
                      </button>

                      {/* Modal de confirmación de apertura */}
                      <Modal isOpen={abierto}>
                        <ModalHeader>Confirmación</ModalHeader>
                        <ModalBody>
                          <FormGroup>
                            <Label tag="p">
                              <strong>¿Está seguro de que desea abrir el casillero N°{newNcasillero}?</strong>
                            </Label>
                            <div className="divConfirmacion">
                              <Button className="botonAceptar" onClick={confirmaAbrir}>
                                Aceptar
                              </Button>
                              <Button className="botonRechazar" onClick={cerrarConfirmar}>
                                Rechazar
                              </Button>
                            </div>
                          </FormGroup>
                        </ModalBody>
                        <ModalFooter />
                      </Modal>

                      {/* Modal de aviso cuando el pedido no está listo */}
                      <Modal isOpen={modalEnPreparacion}>
                        <ModalHeader>Aviso</ModalHeader>
                        <ModalBody>
                          <FormGroup>
                            <Label tag="p">
                              <strong>Su pedido en el casillero N°{newNcasillero} aún no está listo para su retiro.</strong>
                            </Label>
                            <div className="divConfirmacion">
                              <Button className="botonRechazar" onClick={cerrarConfirmar}>
                                Cerrar
                              </Button>
                            </div>
                          </FormGroup>
                        </ModalBody>
                        <ModalFooter />
                      </Modal>
                    </div>
                  </div>
                ))
              ) : (
                <h1 className="sinPedidos">No tienes pedidos pendientes.</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PedidosEnCurso;
