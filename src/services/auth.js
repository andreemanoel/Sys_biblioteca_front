export const TOKEN_KEY = '@TOKEN';
export const NOME_USUSARIO = 'NOME';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
}

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const setNomeUsuario = nome => {
  localStorage.setItem(NOME_USUSARIO, nome);
}