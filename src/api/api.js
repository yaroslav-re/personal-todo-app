const baseUrl = "http://localhost:3001";

export const fetchTodos = () => {
  fetch(`${baseUrl}/todos`).then((res) => res.json());
};
