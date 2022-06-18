import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  usuarios: [],
  getUsuario: {
    id: null,
    name: '',
    email: '',
  },
}

export const usuario = createSlice({
  name: 'usuario',
  initialState,
  reducers: {
    setLoading(state, {payload}){
      state.loading = payload;
    },
    setUsuarios(state, {payload}){
      state.usuarios = payload;
    },
    setGetUsuario(state, {payload}){
      state.getUsuario = payload;
    },
    setId(state, {payload}){
      state.getUsuario.id = payload;
    },
    setName(state, {payload}){
      state.getUsuario.name = payload;
    },
    setEmail(state, {payload}){
      state.getUsuario.email = payload;
    },
    setReset(state){
      state.getUsuario.id = '';
      state.getUsuario.email = '';
      state.getUsuario.name = '';
    },
  }
});

export const {
  setLoading,
  setEmail,
  setGetUsuario,
  setId,
  setName,
  setUsuarios,
  setReset
} = usuario.actions;

export default usuario.reducer;