import { usuarios } from './mockData';

export function login(email: string, password: string) {
  return usuarios.find(
    (usuario) => usuario.email.toLowerCase() === email.toLowerCase() && usuario.password === password,
  );
}

export function registerUser(usuario: { email: string; password: string; tipo: string; nombreCompleto: string }) {
  return {
    ...usuario,
    id: `mock-${Date.now()}`,
    ciudadId: 'bogota',
    direccion: 'Dirección por definir',
    identificacion: 'NN-000000',
    telefonos: ['0000000000'],
  };
}
