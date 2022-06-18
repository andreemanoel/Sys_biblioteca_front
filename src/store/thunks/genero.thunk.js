import { createAsyncThunk } from '@reduxjs/toolkit';
import instance from '../../services/api';
import { setGeneros } from '../slice/genero.slice';

export const fetchGenero = createAsyncThunk(
  'genero/fechGenero',
  async (_, { dispatch }) => {
    const { data } = await instance.get('/api/genero');
    console.log(data)
    if(data){
      dispatch(
        setGeneros(data),
      );
    }
    return;
  },
);