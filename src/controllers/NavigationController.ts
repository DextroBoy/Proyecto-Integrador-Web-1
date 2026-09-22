import { renderAdministrarReservasView } from '../views/agente/AdministrarReservasView';
import { renderEventosRegistradosView } from '../views/agente/EventosRegistradosView';
import { renderRegistrarEventoView } from '../views/agente/RegistrarEventoView';
import { renderDashboardView } from '../views/admin/DashboardView';
import { renderLoginView } from '../views/auth/LoginView';
import { renderRegistroView } from '../views/auth/RegistroView';
import { renderEventosDisponiblesView } from '../views/cliente/EventosDisponiblesView';
import { renderMisReservasView } from '../views/cliente/MisReservasView';

export const routes: Record<string, () => string> = {
  '/login': renderLoginView,
  '/registro': renderRegistroView,
  '/cliente/eventos': renderEventosDisponiblesView,
  '/cliente/reservas': renderMisReservasView,
  '/agente/registrar-evento': renderRegistrarEventoView,
  '/agente/eventos': renderEventosRegistradosView,
  '/agente/reservas': renderAdministrarReservasView,
  '/admin/dashboard': renderDashboardView,
};

export function renderCurrentRoute(path: string): string {
  const safePath = path || '/login';
  const view = routes[safePath];
  return view ? view() : `<p>Vista no encontrada: ${safePath}</p>`;
}

export function bindNavigationLinks(): void {
  const links = document.querySelectorAll<HTMLAnchorElement>('[data-route]');
  links.forEach((link) => {
    link.addEventListener('click', () => {
      const target = link.getAttribute('data-route');
      if (target) {
        window.location.hash = `/${target}`;
      }
    });
  });
}
