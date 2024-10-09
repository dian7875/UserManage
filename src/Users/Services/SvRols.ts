import axios, { AxiosError } from "axios";
import api from "../../ApiConfig";
import { ErrorResponse, Role } from "../Types/Roles";

const postNewRol = async (data: Role) => {
  try {
    const response = await api.post("Rol", data);
    return response.status;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        console.error("Error:", axiosError.response.data.message);
      } else {
        console.error("Error:", axiosError.message);
      }
    } else {
      console.error("Error desconocido:", error);
    }
    throw error;
  }
};
const putEditRol = async (data: Role) => {
  try {
    const response = await api.put(`Rol/${data.id}`, data);
    return response.status;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        console.error("Error:", axiosError.response.data.message);
      } else {
        console.error("Error:", axiosError.message);
      }
    } else {
      console.error("Error desconocido:", error);
    }
    throw error;
  }
};
const deletetRol = async (id: number) => {
  try {
    const response = await api.delete(`Rol/${id}`);
    return response.status;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        console.error("Error:", axiosError.response.data.message);
      } else {
        console.error("Error:", axiosError.message);
      }
    } else {
      console.error("Error desconocido:", error);
    }
    throw error;
  }
};

const GetRolesList = async (page?: number, limit?: number) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };
    const response = await api.get("Rol", { params });
    return response.data;
  } catch (error) {
    console.error("Error to get pending requests:", error);
    throw error;
  }
};

export { postNewRol, GetRolesList, putEditRol, deletetRol };
