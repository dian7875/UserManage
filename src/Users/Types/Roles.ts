export interface Role {
  id: number;
  name: string;
  description: string;
}

// interfaz para respuestas del servidor
export interface ErrorResponse {
  statusCode: number;
  message: string;
}

//Mensaje de error
export type ApiError = {
  message: string;
  error: string;
  statusCode: number;
};
