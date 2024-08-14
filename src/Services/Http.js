import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL
});

// Função para configurar o Axios com o token de autenticação
const setupAxios = (token) => {
  http.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

// Função para realizar o login e armazenar o token no cookie
const loginUser = async (email, password) => {
  try {
    // Aqui você faria a requisição para o seu endpoint de login
    const response = await http.post('signin', {
      email,
      password,
    });

    return response.data.data;

  } catch (error) {
    // Trate os erros de forma adequada
    console.error("Erro ao realizar login:", error);
    throw error;
  }
};

// Função para realizar o registro do usuário
const registerUser = async (userData) => {
  try {
    const response = await http.post('signup', userData);
    return response.data;
  } catch (error) {
    console.error("Erro ao realizar registro:", error);
    throw error;
  }
};

// Exporta as funções necessárias
export { loginUser, registerUser, setupAxios };
