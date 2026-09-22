import type { Evento } from '../models';
import { eventos } from './mockData';

export function getEventosDisponibles(): Evento[] {
  return [...eventos];
}

export function getEventosPorAgente(agenteId: string): Evento[] {
  return eventos.filter((evento) => evento.agenteId === agenteId);
}

export function registrarEvento(nuevoEvento: Evento): Evento {
  eventos.push(nuevoEvento);
  return nuevoEvento;
}
