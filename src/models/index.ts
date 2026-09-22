export type PerfilUsuario = 'cliente' | 'agente' | 'admin';
export type EstadoEvento = 'Programado' | 'En Boletería' | 'En Vivo' | 'Finalizado' | 'Cancelado';
export type EstadoReserva = 'Reservada' | 'Confirmada' | 'Cancelada';

export interface Ciudad {
  id: string;
  nombre: string;
  departamento: string;
  pais: string;
}

export interface Usuario {
  id: string;
  tipo: PerfilUsuario;
  identificacion: string;
  nombreCompleto: string;
  email: string;
  password: string;
  direccion: string;
  ciudadId: string;
  telefonos: string[];
}

export interface Cliente extends Usuario {
  tipo: 'cliente';
  puntos: number;
  publicidad: boolean;
}

export interface Agente extends Usuario {
  tipo: 'agente';
  comision: number;
  experiencia: string;
}

export interface Administrador extends Usuario {
  tipo: 'admin';
  salario: number;
  horario: string;
}

export interface Evento {
  id: string;
  codigo: string;
  nombre: string;
  descripcion: string;
  teatro: string;
  ciudadId: string;
  fechaInicio: string;
  fechaFin: string;
  capacidad: number;
  precioBase: number;
  observaciones: string;
  estado: EstadoEvento;
  agenteId: string;
}

export interface Reserva {
  id: string;
  clienteId: string;
  eventoId: string;
  fechaReserva: string;
  numeroEntradas: number;
  valorTotal: number;
  observaciones: string;
  estado: EstadoReserva;
}
