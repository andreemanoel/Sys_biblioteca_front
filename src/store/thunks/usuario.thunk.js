import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../services/api';
import { setGetUsuario, setUsuarios } from '../slice/usuario.slice';

export const fetchUsuarios = createAsyncThunk(
  'usuario/fetchUser',
  async (_, { dispatch }) => {
    const { data } = await instance.get('/api/usuario');
    console.log(data)
    if(data){
      dispatch(
        setUsuarios(data),
      );
    }
    return;
  },
);

export const findUsuario = createAsyncThunk(
  'usuario/fetchUserId',
  async (id, { dispatch }) => {
    try {
      const { data } = await instance.get(`/api/usuario/${id}`);
      console.log('console',data);
      if(data){
        dispatch(
          setGetUsuario(data)
        );
      }
    } catch (e) {
      console.log('erro', e.response)
    }
  },
);

export const deleteUser = createAsyncThunk(
  'usuario/delete',
  async (id, { dispatch }) => {
    const { data } = await instance.delete(`/api/usuario/${id}`);
  },
);

export const createUser = createAsyncThunk(
  'usuario/create',
  async ({name, email}, { dispatch }) => {

    const { data } = await instance.post(`/api/usuario`, {name, email});

  },
);

export const updateUser = createAsyncThunk(
  'usuario/update',
  async ({id, name, email}, { dispatch }) => {

    const { data } = await instance.put(`/api/usuario/${id}`, {name, email});
  },
);
