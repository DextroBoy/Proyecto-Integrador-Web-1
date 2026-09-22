import { ciudades, eventos, reservas, usuarios } from './mockData';

export function getMetricasDashboard() {
  return {
    clientes: usuarios.filter((usuario) => usuario.tipo === 'cliente').length,
    agentes: usuarios.filter((usuario) => usuario.tipo === 'agente').length,
    administradores: usuarios.filter((usuario) => usuario.tipo === 'admin').length,
    reservas: reservas.length,
    eventos: eventos.length,
  };
}

export function getIngresosPorMes2026() {
  const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const valores = Array.from({ length: 12 }, () => 0);

  reservas.forEach((reserva) => {
    const fecha = new Date(reserva.fechaReserva);
    const mes = fecha.getMonth();
    valores[mes] += reserva.valorTotal;
  });

  return meses.map((mes, index) => ({ mes, total: valores[index] }));
}

export function getReservasPorEventoMes2026() {
  return eventos.map((evento) => ({
    nombre: evento.nombre,
    reservas: reservas.filter((reserva) => reserva.eventoId === evento.id).length,
  }));
}

export function getEventosPorAgenteCiudad() {
  return agentesPorCiudad();
}

function agentesPorCiudad() {
  return ciudades.map((ciudad) => ({
    ciudad: ciudad.nombre,
    cantidad: eventos.filter((evento) => evento.ciudadId === ciudad.id).length,
  }));
}

const agentes = usuarios.filter((usuario) => usuario.tipo === 'agente');
