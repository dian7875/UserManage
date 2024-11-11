export type roles = {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
}

export type ListaRoles = {
  roles: roles[];
  TotalCount: number;
};