/**
 * Vista: Agente - Administrar reservas (visualizar y actualizar estado)
 */
import { getEventosDisponibles } from '../../services/eventoService';
import { getReservasPendientes } from '../../services/reservaService';

export function renderAdministrarReservasView(): string {
  const reservas = getReservasPendientes();
  const eventos = getEventosDisponibles();

  const filas = reservas.length
    ? reservas
        .map((reserva) => {
          const evento = eventos.find((item) => item.id === reserva.eventoId);
          const clienteNombre = reserva.clienteId === 'cliente-1' ? 'Ana García' : 'Luis Torres';
          return `
            <tr>
              <td>${clienteNombre}</td>
              <td>${evento?.nombre ?? 'Evento no disponible'}</td>
              <td>${reserva.numeroEntradas}</td>
              <td>$ ${reserva.valorTotal.toLocaleString('es-CO')}</td>
              <td><span class="estado-fila estado-${reserva.estado.toLowerCase()}">${reserva.estado}</span></td>
              <td>
                <select class="form-select form-select-sm">
                  <option value="Reservada" ${reserva.estado === 'Reservada' ? 'selected' : ''}>Reservada</option>
                  <option value="Confirmada" ${reserva.estado === 'Confirmada' ? 'selected' : ''}>Confirmada</option>
                  <option value="Cancelada" ${reserva.estado === 'Cancelada' ? 'selected' : ''}>Cancelada</option>
                </select>
              </td>
            </tr>
          `;
        })
        .join('')
    : `<tr><td colspan="6" class="tabla-vacia">No hay reservas para mostrar</td></tr>`;

  return /*html*/ `
    <section class="contenedor-vista" aria-labelledby="titulo-reservas-admin">
      <div class="encabezado-vista">
        <h1 id="titulo-reservas-admin">Administrar reservas</h1>
        <p class="subtitulo-vista">Gestiona el estado de las reservas solicitadas</p>
      </div>

      <div class="contenedor-tabla">
        <table class="tabla-datos" id="tabla-reservas-agente">
          <thead>
            <tr>
              <th scope="col">Cliente</th>
              <th scope="col">Evento</th>
              <th scope="col">Entradas</th>
              <th scope="col">Valor total</th>
              <th scope="col">Estado</th>
              <th scope="col">Actualizar estado</th>
            </tr>
          </thead>
          <tbody>
            ${filas}
          </tbody>
        </table>
      </div>
    </section>
  `;
}
