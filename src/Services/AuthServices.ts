import api from "./ApiConfig";

const GetStats = async () => {
  const response = await api.get("User/statistics/summary");
  return response.data;
};
const logginURL = import.meta.env.VITE_API_AUTH_URL;
window.addEventListener("message", (event) => {

  console.log("Token:", event.data);
  localStorage.setItem("Token", event.data);
});

export { GetStats };
