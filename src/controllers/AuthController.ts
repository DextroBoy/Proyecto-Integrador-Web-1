import { login, registerUser } from '../services/authService';

const roleRoutes = {
  cliente: '/cliente/eventos',
  agente: '/agente/eventos',
  admin: '/admin/dashboard',
} as const;

function showMessage(elementId: string, message: string, isError = false): void {
  const element = document.getElementById(elementId);
  if (!element) return;

  element.textContent = message;
  element.classList.toggle('mensaje-error', isError);
  element.classList.toggle('mensaje-exito', !isError);
}

export function bindAuthForms(): void {
  const loginForm = document.getElementById('formulario-login');
  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const form = event.currentTarget as HTMLFormElement;
      const formData = new FormData(form);
      const email = String(formData.get('email') ?? '').trim();
      const password = String(formData.get('password') ?? '').trim();

      if (!email || !password) {
        showMessage('login-message', 'Debes ingresar correo y contraseña.', true);
        return;
      }

      const usuario = login(email, password);
      if (!usuario) {
        showMessage('login-message', 'Credenciales inválidas. Verifica tus datos.', true);
        return;
      }

      localStorage.setItem('currentUser', JSON.stringify(usuario));
      showMessage('login-message', `Bienvenido, ${usuario.nombreCompleto}.`, false);
      const route = roleRoutes[usuario.tipo as keyof typeof roleRoutes] ?? '/login';
      window.location.hash = route;
    });
  }

  const registerForm = document.getElementById('formulario-registro');
  if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault();

      const form = event.currentTarget as HTMLFormElement;
      const formData = new FormData(form);
      const tipo = String(formData.get('tipoUsuario') ?? '').trim();
      const nombreCompleto = String(formData.get('nombreCompleto') ?? '').trim();
      const email = String(formData.get('email') ?? '').trim();
      const password = String(formData.get('password') ?? '').trim();
      const direccion = String(formData.get('direccion') ?? '').trim();
      const ciudadId = String(formData.get('ciudadId') ?? '').trim();
      const identificacion = String(formData.get('identificacion') ?? '').trim();
      const telefono = String(formData.get('telefono') ?? '').trim();

      if (!tipo || !nombreCompleto || !email || !password || !direccion || !ciudadId || !identificacion || !telefono) {
        showMessage('register-message', 'Todos los campos son obligatorios.', true);
        return;
      }

      const nuevoUsuario = registerUser({
        tipo,
        nombreCompleto,
        email,
        password,
        ciudadId,
        direccion,
        identificacion,
        telefonos: [telefono],
      });

      localStorage.setItem('currentUser', JSON.stringify(nuevoUsuario));
      showMessage('register-message', 'Registro exitoso. Redirigiendo...', false);
      const route = roleRoutes[tipo as keyof typeof roleRoutes] ?? '/login';
      window.setTimeout(() => {
        window.location.hash = route;
      }, 500);
    });
  }
}
