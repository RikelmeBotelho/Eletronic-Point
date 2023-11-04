import axios from "axios";

const Api = axios.create({
  baseURL: 'http://localhost:8080/',
});

const getFuncionarios = async () => {
  const response = await Api.get("/funcionarios");
  return response.data;
};

export default Api;