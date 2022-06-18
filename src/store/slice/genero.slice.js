import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  generos: [],
}

export const generos = createSlice({
  name: 'generos',
  initialState,
  reducers: {
    setLoading(state, {payload}){
      state.loading = payload;
    },
    setGeneros(state, {payload}){
      state.generos = payload;
    },
  }
});

export const {
  setLoading,
  setGeneros
} = generos.actions;

export default generos.reducer;