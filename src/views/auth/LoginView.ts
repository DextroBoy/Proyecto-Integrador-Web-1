/**
 * Vista: Inicio de sesión
 */
export function renderLoginView(): string {
  return /*html*/ `
    <section class="vista-autenticacion" aria-labelledby="titulo-login">
      <div class="tarjeta-autenticacion">
        <h1 id="titulo-login" class="titulo-tarjeta">Iniciar sesión</h1>
        <p class="subtitulo-tarjeta">Accede con tu correo y contraseña</p>

        <div id="login-message" class="mensaje-formulario" role="alert" aria-live="polite"></div>

        <form id="formulario-login" class="formulario-autenticacion" novalidate>
          <div class="campo-formulario">
            <label for="email-login">Correo electrónico</label>
            <input type="email" id="email-login" name="email" required autocomplete="email" />
          </div>

          <div class="campo-formulario">
            <label for="password-login">Contraseña</label>
            <input type="password" id="password-login" name="password" required autocomplete="current-password" />
          </div>

          <button type="submit" class="boton-principal">Ingresar</button>

          <p class="pista-formulario">
            ¿No tienes cuenta? <a href="#/registro" data-route="registro">Regístrate aquí</a>
          </p>
        </form>
      </div>
    </section>
  `;
}
