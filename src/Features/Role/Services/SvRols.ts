import axios, { AxiosError } from "axios";
import api from "../../../Services/ApiConfig";
import {  roles } from "../Types/Roles";
import { ErrorResponse } from "../../../Types/GlobalTypes";

const postNewRol = async (data: roles) => {
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
const putEditRol = async (data: roles) => {
  try {

    const response = await api.patch(`Rol/${data.id}`, data);
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

const deactivateRol = async (id: number) => {
  try {
    const response = await api.patch(`Rol/deactivate/${id}`);
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

const reactivateRol = async (id: number) => {
  try {
    const response = await api.patch(`Rol/reactivate/${id}`);  
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


const GetRolesList = async (pageNumber?: number, pageSize?: number) => {
    const params: { [key: string]: string | number | undefined } = {
      pageNumber,
      pageSize,
    };
    const response = await api.get("Rol", { params });
    return response.data;
  
};
export { postNewRol, GetRolesList, putEditRol, deactivateRol, reactivateRol };

