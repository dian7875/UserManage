import axios, { AxiosError } from "axios";
import api from "../../../Services/ApiConfig";
import { User } from "./User";
import { ErrorResponse } from "../../../Types/GlobalTypes";

const postNewUser = async (data: User) => {
  try {
    const response = await api.post("/Auth/register", data);
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


const editUser = async (data: User) => {
  try {
    const response = await api.post(`/User/${data.id}`, data);
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

const deleteUser = async (id:number) => {
  try {
    const response = await api.post(`/User/${id}`);
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


const changeRolUser = async (data: { id: number; roleId: number }) => {
  try {
    const response = await api.put(`/User/${data.id}/role`, { roleId: data.roleId });
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



const GetUserList = async (page?: number, limit?: number) => {
  try {
    const params: { [key: string]: string | number | undefined } = {
      page,
      limit,
    };
    const response = await api.get("User", { params });
    return response.data;
  } catch (error) {
    console.error("Error to get pending requests:", error);
    throw error;
  }
};

const disableUser = async (userId: number) => {
  try {
    const response = await api.put(`/User/${userId}/desactivate`);
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

const enableUser = async (userId: number) => {
  try {
    const response = await api.put(`/User/${userId}/reactivate`);
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

export { 
  postNewUser, 
  GetUserList, 
  changeRolUser, 
  deleteUser, 
  editUser,
  disableUser,
  enableUser 
};