import type { Reserva } from '../models';
import { reservas } from './mockData';

export function getReservasPorCliente(clienteId: string): Reserva[] {
  return reservas.filter((reserva) => reserva.clienteId === clienteId);
}

export function getReservasPendientes(): Reserva[] {
  return reservas.filter((reserva) => reserva.estado !== 'Cancelada');
}

export function actualizarEstadoReserva(id: string, nuevoEstado: Reserva['estado']): Reserva | undefined {
  const reserva = reservas.find((item) => item.id === id);

  if (!reserva) {
    return undefined;
  }

  reserva.estado = nuevoEstado;
  return reserva;
}
