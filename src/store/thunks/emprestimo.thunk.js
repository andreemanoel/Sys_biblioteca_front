import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../services/api';
import { setEmprestimos, setGetEmprestimo } from '../slice/emprestimo.slice';
import { setGetLivro, setLivros } from '../slice/livro.slice';
import { setGetUsuario } from '../slice/usuario.slice';

export const fetchEmprestimo = createAsyncThunk(
  'emprestimo/fetchEmprestimo',
  async (_, { dispatch }) => {
    const { data } = await instance.get('/api/emprestimo');
    console.log(data)
    if(data){
      dispatch(
        setEmprestimos(data),
      );
    }
    return;
  },
);

export const findEmprestimo = createAsyncThunk(
  'emprestimo/fetchEmprestimoId',
  async (id, { dispatch }) => {
    try {
      const { data } = await instance.get(`/api/emprestimo/${id}`);
      if(data){
        dispatch(
          setGetEmprestimo(data)
        );
      }
    } catch (e) {
      console.log('erro', e.response)
    }
  },
);

export const createEmprestimo = createAsyncThunk(
  'livro/create',
  async ({usuario_id, livro_id, data_devolucao, status}, { dispatch }) => {
    const { data } = await instance.post(`/api/emprestimo`, {usuario_id, livro_id, data_devolucao, status});
  },
);

export const updateEmprestimo = createAsyncThunk(
  'livro/update',
  async ({id, usuario_id, livro_id, data_devolucao, status}, { dispatch }) => {
    const { data } = await instance.put(`/api/emprestimo/${id}`, {usuario_id, livro_id, data_devolucao, status});
  },
);
