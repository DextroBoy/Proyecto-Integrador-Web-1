/**
 * Vista: Administrador - Reportes del sistema (gráficas y tablas)
 */
import {
  getEventosPorAgenteCiudad,
  getIngresosPorMes2026,
  getMetricasDashboard,
  getReservasPorEventoMes2026,
} from '../../services/dashboardService';

export function renderDashboardView(): string {
  const metricas = getMetricasDashboard();
  const ingresos = getIngresosPorMes2026();
  const reservas = getReservasPorEventoMes2026();
  const eventosPorCiudad = getEventosPorAgenteCiudad();

  const barrasIngresos = ingresos
    .map((mes) => {
      const altura = Math.max(20, (mes.total / 500000) * 100);
      return `
        <div class="columna-grafica">
          <span class="valor-columna">$ ${mes.total.toLocaleString('es-CO')}</span>
          <div class="barra-grafica" style="height: ${altura}%"></div>
          <small>${mes.mes}</small>
        </div>
      `;
    })
    .join('');

  const reservasPorEvento = reservas
    .map(
      (item) => `
        <li><span>${item.nombre}</span><strong>${item.reservas}</strong></li>
      `,
    )
    .join('');

  const eventosCiudad = eventosPorCiudad
    .map(
      (item) => `
        <li><span>${item.ciudad}</span><strong>${item.cantidad}</strong></li>
      `,
    )
    .join('');

  return /*html*/ `
    <section class="contenedor-vista" aria-labelledby="titulo-dashboard">
      <div class="encabezado-vista">
        <h1 id="titulo-dashboard">Dashboard de reportes</h1>
        <p class="subtitulo-vista">Resumen general del sistema</p>
      </div>

      <div class="cuadricula-estadisticas">
        <div class="tarjeta-estadistica">
          <span class="etiqueta-estadistica">Clientes registrados</span>
          <span class="valor-estadistica" id="clientes-estadistica">${metricas.clientes}</span>
        </div>
        <div class="tarjeta-estadistica">
          <span class="etiqueta-estadistica">Agentes registrados</span>
          <span class="valor-estadistica" id="agentes-estadistica">${metricas.agentes}</span>
        </div>
        <div class="tarjeta-estadistica">
          <span class="etiqueta-estadistica">Eventos registrados</span>
          <span class="valor-estadistica" id="eventos-estadistica">${metricas.eventos}</span>
        </div>
        <div class="tarjeta-estadistica">
          <span class="etiqueta-estadistica">Reservas registradas</span>
          <span class="valor-estadistica" id="reservas-estadistica">${metricas.reservas}</span>
        </div>
      </div>

      <div class="cuadricula-graficas">
        <div class="tarjeta-grafica">
          <h2>Ingresos totales por mes (2026)</h2>
          <div class="grafica-barras" aria-label="Gráfica de ingresos por mes">
            ${barrasIngresos}
          </div>
        </div>
        <div class="tarjeta-grafica">
          <h2>Reservas por evento</h2>
          <ul class="lista-metricas">
            ${reservasPorEvento}
          </ul>
        </div>
        <div class="tarjeta-grafica tarjeta-grafica-amplia">
          <h2>Eventos por ciudad</h2>
          <ul class="lista-metricas">
            ${eventosCiudad}
          </ul>
        </div>
      </div>
    </section>
  `;
}
