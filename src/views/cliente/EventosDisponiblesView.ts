/**
 * Vista: Cliente - Visualizar todos los eventos disponibles
 */
import { getCiudades } from '../../services/ubicacionService';
import { getEventosDisponibles } from '../../services/eventoService';

export function renderEventosDisponiblesView(): string {
  const ciudades = getCiudades();
  const eventos = getEventosDisponibles();

  const normalizeStateClass = (value: string) =>
    value
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-');

  const opcionesCiudad = ciudades
    .map((ciudad) => `<option value="${ciudad.id}">${ciudad.nombre}</option>`)
    .join('');

  const tarjetas = eventos
    .map((evento) => {
      const ciudad = ciudades.find((item) => item.id === evento.ciudadId)?.nombre ?? 'Sin ubicación';
      const estadoClass = normalizeStateClass(evento.estado);
      const fecha = new Date(evento.fechaInicio).toLocaleString('es-CO', {
        dateStyle: 'medium',
        timeStyle: 'short',
      });

      return `
        <article class="tarjeta-evento">
          <div class="estado-evento estado-${estadoClass}">${evento.estado}</div>
          <h2 class="nombre-evento">${evento.nombre}</h2>
          <p class="detalle-evento"><strong>Teatro:</strong> ${evento.teatro}</p>
          <p class="detalle-evento"><strong>Ciudad:</strong> ${ciudad}</p>
          <p class="detalle-evento"><strong>Fecha:</strong> ${fecha}</p>
          <p class="precio-evento">$ ${evento.precioBase.toLocaleString('es-CO')}</p>
          <button class="boton-secundario" type="button">Reservar</button>
        </article>
      `;
    })
    .join('');

  return /*html*/ `
    <section class="contenedor-vista" aria-labelledby="titulo-eventos">
      <div class="encabezado-vista">
        <h1 id="titulo-eventos">Eventos disponibles</h1>
        <p class="subtitulo-vista">Explora y reserva tu lugar en los próximos eventos</p>
      </div>

      <div class="barra-filtros">
        <input type="search" id="filtro-evento" placeholder="Buscar evento..." aria-label="Buscar evento" />
        <select id="filtro-ciudad" aria-label="Filtrar por ciudad">
          <option value="">Todas las ciudades</option>
          ${opcionesCiudad}
        </select>
      </div>

      <div id="cuadricula-eventos" class="cuadricula-eventos">
        ${tarjetas}
      </div>
    </section>
  `;
}
