import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../services/api';
import { setGetLivro, setLivros } from '../slice/livro.slice';
import { setGetUsuario } from '../slice/usuario.slice';

export const fetchLivros = createAsyncThunk(
  'livro/fetchLivro',
  async (_, { dispatch }) => {
    const { data } = await instance.get('/api/livro');
    console.log(data)
    if(data){
      dispatch(
        setLivros(data),
      );
    }
    return;
  },
);

export const findLivro = createAsyncThunk(
  'livro/fetchLivroId',
  async (id, { dispatch }) => {
    try {
      const { data } = await instance.get(`/api/livro/${id}`);
      if(data){
        dispatch(
          setGetLivro(data)
        );
      }
    } catch (e) {
      console.log('erro', e.response)
    }
  },
);

export const deleteLivro = createAsyncThunk(
  'livro/delete',
  async (id, { dispatch }) => {
    const { data } = await instance.delete(`/api/livro/${id}`);
  },
);

export const createLivro = createAsyncThunk(
  'livro/create',
  async ({name, autor, situacao, genero_id}, { dispatch }) => {
    const { data } = await instance.post(`/api/livro`, {name, autor, situacao, genero_id});
  },
);

export const updateLivro = createAsyncThunk(
  'livro/update',
  async ({id, name, autor, situacao, genero_id}, { dispatch }) => {
    const { data } = await instance.put(`/api/livro/${id}`, {name, autor, situacao, genero_id});
  },
);
