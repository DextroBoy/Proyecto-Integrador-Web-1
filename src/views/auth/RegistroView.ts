/**
 * Vista: Registro de clientes y agentes
 */
import { getCiudades } from '../../services/ubicacionService';

export function renderRegistroView(): string {
  const ciudades = getCiudades();
  const ciudadesOptions = ciudades
    .map(
      (ciudad) => `<option value="${ciudad.id}">${ciudad.nombre} (${ciudad.departamento})</option>`,
    )
    .join('');

  return /*html*/ `
    <section class="vista-autenticacion" aria-labelledby="titulo-registro">
      <div class="tarjeta-autenticacion tarjeta-autenticacion-amplia">
        <h1 id="titulo-registro" class="titulo-tarjeta">Crear cuenta</h1>
        <p class="subtitulo-tarjeta">Regístrate como cliente o agente</p>

        <form id="formulario-registro" class="formulario-autenticacion" novalidate>
          <div class="campo-formulario">
            <label for="tipo-usuario">Tipo de usuario</label>
            <select id="tipo-usuario" name="tipoUsuario" required>
              <option value="" disabled selected>Selecciona una opción</option>
              <option value="cliente">Cliente</option>
              <option value="agente">Agente</option>
            </select>
          </div>

          <div class="cuadricula-formulario">
            <div class="campo-formulario">
              <label for="identificacion-registro">Número de identificación</label>
              <input type="text" id="identificacion-registro" name="identificacion" required />
            </div>
            <div class="campo-formulario">
              <label for="nombre-registro">Nombre completo</label>
              <input type="text" id="nombre-registro" name="nombreCompleto" required />
            </div>
            <div class="campo-formulario">
              <label for="email-registro">Correo electrónico</label>
              <input type="email" id="email-registro" name="email" required />
            </div>
            <div class="campo-formulario">
              <label for="password-registro">Contraseña</label>
              <input type="password" id="password-registro" name="password" required />
            </div>
            <div class="campo-formulario">
              <label for="direccion-registro">Dirección</label>
              <input type="text" id="direccion-registro" name="direccion" required />
            </div>
            <div class="campo-formulario">
              <label for="ciudad-registro">Ciudad</label>
              <select id="ciudad-registro" name="ciudadId" required>
                <option value="" disabled selected>Selecciona tu ciudad</option>
                ${ciudadesOptions}
              </select>
            </div>
            <div class="campo-formulario">
              <label for="telefono-registro">Teléfono</label>
              <input type="tel" id="telefono-registro" name="telefono" required />
            </div>
          </div>

          <button type="submit" class="boton-principal">Registrarme</button>

          <p class="pista-formulario">
            ¿Ya tienes cuenta? <a href="#/login" data-route="login">Inicia sesión</a>
          </p>
        </form>
      </div>
    </section>
  `;
}
