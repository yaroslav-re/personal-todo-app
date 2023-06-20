import axios from "axios";
const baseUrl = "http://localhost:3001/api/todos";

let token = null;

const setToken = (newToken) => {
  token = `Bearer ${newToken}`;
};

const getAll = (user) => {
  const config = {
    headers: { Authorization: `Bearer ${user.token}` },
  };
  const request = axios.get(baseUrl, config);

  return request.then((response) => response.data);
};

const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newObject, config);
  return response.then((response) => response.data);
};

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject);
  return request.then((response) => response.data);
};

const todoDelete = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, create, update, setToken, todoDelete };
