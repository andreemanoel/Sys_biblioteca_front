import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  emprestimos: [],
  getEmprestimo: {
    id: '',
    usuario_id: '',
    livro_id: '',
    data_devolucao: '',
    status: 'Emprestado',
  },
}

export const emprestimo = createSlice({
  name: 'emprestimo',
  initialState,
  reducers: {
    setLoading(state, {payload}){
      state.loading = payload;
    },
    setEmprestimos(state, {payload}){
      state.emprestimos = payload;
    },
    setGetEmprestimo(state, {payload}){
      state.getEmprestimo = payload;
    },
    setId(state, {payload}){
      state.getEmprestimo.id = payload;
    },
    setUsuarioId(state, {payload}){
      state.getEmprestimo.usuario_id = payload;
    },
    setLivroId(state, {payload}){
      state.getEmprestimo.livro_id = payload;
    },
    setStatus(state, {payload}){
      state.getEmprestimo.status = payload;
    },
    setDataDevolucao(state, {payload}){
      state.getEmprestimo.data_devolucao = payload;
    },
    setReset(state){
      state.getEmprestimo.id = '';
      state.getEmprestimo.usuario_id = '';
      state.getEmprestimo.livro_id = '';
      state.getEmprestimo.data_devolucao = '';
      state.getEmprestimo.status = 'Emprestado';
    },
  }
});

export const {
  setLoading,
  setDataDevolucao,
  setEmprestimos,
  setGetEmprestimo,
  setId,
  setLivroId,
  setReset,
  setStatus,
  setUsuarioId,
} = emprestimo.actions;

export default emprestimo.reducer;