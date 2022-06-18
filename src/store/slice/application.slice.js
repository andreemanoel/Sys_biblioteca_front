import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dialog: {
    acao: '',
    visible: false,
    title: '',
    id: null
  },
  authenticaded: false
}

export const application = createSlice({
  name: 'application',
  initialState,
  reducers: {
    setDialog(state, {payload}){
      state.dialog = payload;
    },
    setAuthenticated(state, {payload}) {
      state.authenticaded = payload;
    },
  }
});

export const {setDialog, setAuthenticated} = application.actions;

export default application.reducer;