/**
 * Vista: Agente - Visualizar todos los eventos registrados
 */
import { getCiudades } from '../../services/ubicacionService';
import { getEventosPorAgente } from '../../services/eventoService';

export function renderEventosRegistradosView(): string {
  const ciudades = getCiudades();
  const eventos = getEventosPorAgente('agente-1');

  const normalizeStateClass = (value: string) =>
    value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-');

  const filas = eventos.length
    ? eventos
        .map((evento) => {
          const ciudad = ciudades.find((item) => item.id === evento.ciudadId)?.nombre ?? 'Sin ciudad';
          const fecha = new Date(evento.fechaInicio).toLocaleDateString('es-CO', { dateStyle: 'short' });

          return `
            <tr>
              <td>${evento.codigo}</td>
              <td>${evento.nombre}</td>
              <td>${ciudad}</td>
              <td>${fecha}</td>
              <td><span class="estado-fila estado-${normalizeStateClass(evento.estado)}">${evento.estado}</span></td>
              <td><button type="button" class="boton-secundario btn-sm">Detalle</button></td>
            </tr>
          `;
        })
        .join('')
    : `<tr><td colspan="6" class="tabla-vacia">Aún no has registrado eventos</td></tr>`;

  return /*html*/ `
    <section class="contenedor-vista" aria-labelledby="titulo-mis-eventos">
      <div class="encabezado-vista">
        <h1 id="titulo-mis-eventos">Mis eventos registrados</h1>
        <p class="subtitulo-vista">Eventos que has creado en la plataforma</p>
      </div>

      <div class="contenedor-tabla">
        <table class="tabla-datos" id="tabla-eventos-agente">
          <thead>
            <tr>
              <th scope="col">Código</th>
              <th scope="col">Nombre</th>
              <th scope="col">Ciudad</th>
              <th scope="col">Fecha inicio</th>
              <th scope="col">Estado</th>
              <th scope="col">Acciones</th>
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
