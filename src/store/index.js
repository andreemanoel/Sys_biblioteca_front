import {configureStore} from '@reduxjs/toolkit';
import usuario from './slice/usuario.slice';
import livro from './slice/livro.slice';
import genero from './slice/genero.slice';
import application from './slice/application.slice';

export default configureStore({
  reducer: {
    usuario,
    livro,
    genero,
    application
  }
})