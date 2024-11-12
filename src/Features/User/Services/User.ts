export type User = {
  id: number;
  cedula: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  lastname1: string;
  lastname2: string;
  password: string;
  birthDate: Date;
  dateRegistered: Date;
  isActive: boolean;
  rol: number;
  rolId: number;
};

export interface UsersLits {
  usuarios: User[];
  totalCount: number;
}

export type EditUserRole = {
  id: number;
  roleId: number;
};
