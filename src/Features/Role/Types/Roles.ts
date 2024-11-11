export interface Role {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
}

export interface RolesResponse {
  totalCount: number;
  pageNumber: number;
  pageSize: number;
  roles: Role[];
}