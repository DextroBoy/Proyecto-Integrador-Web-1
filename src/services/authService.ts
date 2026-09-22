import type { Usuario } from '../models';
import { usuarios } from './mockData';

export function login(email: string, password: string): Usuario | undefined {
  return usuarios.find(
    (usuario) => usuario.email.toLowerCase() === email.toLowerCase() && usuario.password === password,
  );
}

export function registerUser(usuario: {
  email: string;
  password: string;
  tipo: string;
  nombreCompleto: string;
  ciudadId: string;
  direccion: string;
  identificacion: string;
  telefonos: string[];
}): Usuario {
  const nuevoUsuario: Usuario = {
    id: `mock-${Date.now()}`,
    tipo: usuario.tipo as Usuario['tipo'],
    identificacion: usuario.identificacion,
    nombreCompleto: usuario.nombreCompleto,
    email: usuario.email,
    password: usuario.password,
    direccion: usuario.direccion,
    ciudadId: usuario.ciudadId,
    telefonos: usuario.telefonos,
  };

  usuarios.push(nuevoUsuario);
  return nuevoUsuario;
}
