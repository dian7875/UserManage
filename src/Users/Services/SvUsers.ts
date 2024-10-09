import axios, { AxiosError } from "axios";
import api from "../../ApiConfig";
import { ErrorResponse } from "../Types/Roles";
import { User } from "../Types/User";

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

export { postNewUser };
