import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  livros: [],
  getLivro: {
    id: '',
    name: '',
    autor: '',
    genero_id: '',
    situacao: true,
  },
}

export const livro = createSlice({
  name: 'livro',
  initialState,
  reducers: {
    setLoading(state, {payload}){
      state.loading = payload;
    },
    setLivros(state, {payload}){
      state.livros = payload;
    },
    setGetLivro(state, {payload}){
      state.getLivro = payload;
    },
    setId(state, {payload}){
      state.getLivro.id = payload;
    },
    setName(state, {payload}){
      state.getLivro.name = payload;
    },
    setAutor(state, {payload}){
      state.getLivro.autor = payload;
    },
    setSituacao(state, {payload}){
      state.getLivro.situacao = payload;
    },
    setGenero(state, {payload}){
      state.getLivro.genero_id = payload;
    },
    setReset(state){
      state.getLivro.id = '';
      state.getLivro.name = '';
      state.getLivro.autor = '';
      state.getLivro.genero_id = '';
      state.getLivro.situacao = true;
    },
  }
});

export const {
  setLoading,
  setAutor, 
  setGenero, 
  setGetLivro,
  setId,
  setLivros,
  setName,
  setReset,
  setSituacao
} = livro.actions;

export default livro.reducer;