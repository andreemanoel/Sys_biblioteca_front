import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import Alerts from '../../components/Alerts'
import { useParams } from 'react-router-dom';
import { setAutor, setGenero, setName, setReset, setSituacao } from '../../store/slice/livro.slice';
import { fetchGenero } from '../../store/thunks/genero.thunk';
import { createLivro, findLivro, updateLivro } from '../../store/thunks/livro.thunk';

const CreateUpdateLivro = () => {
  const dispatch = useAppDispatch();

  const {getLivro} = useAppSelector(state => state.livro);
  const {generos} = useAppSelector(state => state.genero);

  const [message, setMessage] = useState();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchGenero());
    if(id){
      dispatch(findLivro(id));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [erros, setErros] = React.useState({
    name: false,
    autor: false,
    genero_id: false,
  });

  const [open, setOpen] = React.useState(false);

  const verificarErro = () => {
    let flag = false;
    if(getLivro.name === '') {setErros({...erros, name: true}); flag = true;}
    if(getLivro.autor === '') {setErros({...erros, autor: true}); flag = true;}
    if(getLivro.genero_id === '') {setErros({...erros, genero_id: true}); flag = true;}

    console.log(erros);
    if(flag){
      return true;
    }else {
      return false;
    }
  }

  const handleEnviar = () => {
    if(!verificarErro()){
      if(!getLivro.id){
        dispatch(
          createLivro({
            name: getLivro.name, 
            autor: getLivro.autor,
            situacao: getLivro.situacao,
            genero_id: getLivro.genero_id,
          }));
          setMessage('Livro cadastrado com sucesso!');
      }else {
        dispatch(
          updateLivro({
            id: getLivro.id, 
            name: getLivro.name, 
            autor: getLivro.autor,
            situacao: getLivro.situacao,
            genero_id: getLivro.genero_id,
          }));
          setMessage('Livro atualizado com sucesso!');
      }
      setOpen(true);
      dispatch(setReset());
      setTimeout(() => {
        setOpen(false);
      }, 3000);
    }
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }} >
      <Typography
        style={{ fontWeight: 600 }}
        variant="h4"
        align='left'
        sx={{m: 1}}
      >
        {getLivro.id ? 'Editar livro' : 'Novo livro'}
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <div style={{display: 'flex'}}>
          <TextField
            error={erros.name}
            id="nome"
            label="Nome"
            value={getLivro.name}
            onChange={(event) => {dispatch(setName(event.target.value)); setErros({...erros, nome: false});}}
            sx={{m: 1}}
            fullWidth
          />
          <TextField
            error={erros.autor}
            id="autor"
            label="Autor"
            value={getLivro.autor}
            onChange={(event) => {dispatch(setAutor(event.target.value)); setErros({...erros, email: false})}}
            sx={{m: 1}}
            fullWidth
          />
        </div>
        <div style={{display: 'flex'}}>
        <FormControl fullWidth sx={{m: 1}}>
          <InputLabel id="genero">Genêro</InputLabel>
          <Select
            error={erros.genero_id}
            labelId="genero"
            id="genero_id"
            value={getLivro.genero_id}
            label="Genêro"
            onChange={(event) => dispatch(setGenero(event.target.value))}
          >
            {generos.map(genero => (
              <MenuItem value={genero.id}>{genero.description}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{m: 1}}>
          <InputLabel id="situacao">Situação</InputLabel>
          <Select
            labelId="situacao"
            id="situacao_id"
            value={Boolean(getLivro.situacao)}
            label="Situação"
            onChange={(event) => dispatch(setSituacao(event.target.value))}
          >
            <MenuItem value={true}>Disponível</MenuItem>
            <MenuItem value={false}>Emprestado</MenuItem>
          </Select>
        </FormControl>
        </div>
      </Box>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button variant="contained" color="primary" sx={{m: 1}} onClick={handleEnviar}>
        {`${getLivro.id ? 'Atualizar' : 'Cadastrar'}`}
        </Button>
      </div>
      <Alerts message={message} open={open} setOpen={setOpen}/>
    </Paper>
  );
}

export default CreateUpdateLivro;