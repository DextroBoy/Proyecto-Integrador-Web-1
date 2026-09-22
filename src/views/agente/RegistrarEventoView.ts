/**
 * Vista: Agente - Registrar eventos
 */
import { getCiudades } from '../../services/ubicacionService';

export function renderRegistrarEventoView(): string {
  const ciudades = getCiudades();
  const ciudadesOptions = ciudades
    .map((ciudad) => `<option value="${ciudad.id}">${ciudad.nombre} - ${ciudad.departamento}</option>`)
    .join('');

  return /*html*/ `
    <section class="contenedor-vista" aria-labelledby="titulo-registrar-evento">
      <div class="encabezado-vista">
        <h1 id="titulo-registrar-evento">Registrar evento</h1>
        <p class="subtitulo-vista">Completa la información del nuevo evento</p>
      </div>

      <form id="formulario-evento" class="formulario-entidad" novalidate>
        <div class="cuadricula-formulario">
          <div class="campo-formulario">
            <label for="nombre-evento">Nombre del evento</label>
            <input type="text" id="nombre-evento" name="nombre" required />
          </div>
          <div class="campo-formulario">
            <label for="teatro-evento">Teatro</label>
            <input type="text" id="teatro-evento" name="teatro" required />
          </div>
          <div class="campo-formulario">
            <label for="ciudad-evento">Ciudad</label>
            <select id="ciudad-evento" name="ciudadId" required>
              <option value="" disabled selected>Selecciona una ciudad</option>
              ${ciudadesOptions}
            </select>
          </div>
          <div class="campo-formulario">
            <label for="capacidad-evento">Capacidad total</label>
            <input type="number" id="capacidad-evento" name="capacidad" min="1" required />
          </div>
          <div class="campo-formulario">
            <label for="precio-evento">Precio base</label>
            <input type="number" id="precio-evento" name="precioBase" min="0" step="1000" required />
          </div>
          <div class="campo-formulario">
            <label for="inicio-evento">Fecha y hora de inicio</label>
            <input type="datetime-local" id="inicio-evento" name="fechaInicio" required />
          </div>
          <div class="campo-formulario">
            <label for="fin-evento">Fecha y hora estimada de finalización</label>
            <input type="datetime-local" id="fin-evento" name="fechaFin" required />
          </div>
          <div class="campo-formulario campo-formulario-amplio">
            <label for="descripcion-evento">Descripción</label>
            <textarea id="descripcion-evento" name="descripcion" rows="3"></textarea>
          </div>
          <div class="campo-formulario campo-formulario-amplio">
            <label for="observaciones-evento">Observaciones</label>
            <textarea id="observaciones-evento" name="observaciones" rows="2"></textarea>
          </div>
        </div>

        <button type="submit" class="boton-principal">Registrar evento</button>
      </form>
    </section>
  `;
}
