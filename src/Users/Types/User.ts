export type User = {
    id: number;
    cedula: string;
    name: string;
    email: string;
    phone: string;
    address: string;
    lastname1: string;
    lastname2: string;
    password:string;
    birthDate: Date;
    rolId:number
  };

export type EditUserRole= {
    id: number;
    roleId:number
  };