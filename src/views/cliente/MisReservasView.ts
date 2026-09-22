/**
 * Vista: Cliente - Visualizar todas sus reservas con el estado actual
 */
import { getEventosDisponibles } from '../../services/eventoService';
import { getReservasPorCliente } from '../../services/reservaService';

export function renderMisReservasView(): string {
  const reservas = getReservasPorCliente('cliente-1');
  const eventos = getEventosDisponibles();

  const filas = reservas.length
    ? reservas
        .map((reserva) => {
          const evento = eventos.find((item) => item.id === reserva.eventoId);
          const fecha = new Date(reserva.fechaReserva).toLocaleString('es-CO', {
            dateStyle: 'medium',
            timeStyle: 'short',
          });

          return `
            <tr>
              <td>${evento?.nombre ?? 'Evento no encontrado'}</td>
              <td>${fecha}</td>
              <td>${reserva.numeroEntradas}</td>
              <td>$ ${reserva.valorTotal.toLocaleString('es-CO')}</td>
              <td><span class="estado-fila estado-${reserva.estado.toLowerCase()}">${reserva.estado}</span></td>
            </tr>
          `;
        })
        .join('')
    : `<tr><td colspan="5" class="tabla-vacia">Aún no tienes reservas registradas</td></tr>`;

  return /*html*/ `
    <section class="contenedor-vista" aria-labelledby="titulo-reservas">
      <div class="encabezado-vista">
        <h1 id="titulo-reservas">Mis reservas</h1>
        <p class="subtitulo-vista">Consulta el estado de tus reservas</p>
      </div>

      <div class="contenedor-tabla">
        <table class="tabla-datos" id="tabla-reservas">
          <thead>
            <tr>
              <th scope="col">Evento</th>
              <th scope="col">Fecha de reserva</th>
              <th scope="col">Entradas</th>
              <th scope="col">Valor total</th>
              <th scope="col">Estado</th>
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
