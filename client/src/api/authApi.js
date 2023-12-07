import httpClient from "./httpClient";

const AUTH_ROUTE = "/auth";

async function login(loginData) {
  return (await httpClient.post(`${AUTH_ROUTE}/login`, loginData)).data;
}

async function registerUser(registerData) {
  return (await httpClient.post(`${AUTH_ROUTE}/register`, registerData)).data;
}

export { login, registerUser };
