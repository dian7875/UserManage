import api from "./ApiConfig";

const GetStats = async () => {
  const response = await api.get("User/statistics/summary");
  return response.data;
};

export { GetStats };
