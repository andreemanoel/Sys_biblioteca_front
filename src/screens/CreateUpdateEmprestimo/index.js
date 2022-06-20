import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import TextField from '@mui/material/TextField';
import Alerts from '../../components/Alerts'
import { useParams } from 'react-router-dom';
import { fetchLivros } from '../../store/thunks/livro.thunk';
import { fetchUsuarios } from '../../store/thunks/usuario.thunk';
import { setDataDevolucao, setLivroId, setReset, setStatus, setUsuarioId } from '../../store/slice/emprestimo.slice';
import { createEmprestimo, findEmprestimo, updateEmprestimo } from '../../store/thunks/emprestimo.thunk';

const CreateUpdateEmprestimo = () => {
  const dispatch = useAppDispatch();

  const {usuarios} = useAppSelector(state => state.usuario);
  const {getEmprestimo} = useAppSelector(state => state.emprestimo);
  const {livros} = useAppSelector(state => state.livro);

  const [message, setMessage] = useState();
  const {id} = useParams();

  useEffect(() => {
    dispatch(fetchUsuarios());
    dispatch(fetchLivros());
    if(id){
      dispatch(findEmprestimo(id));
    }

    return () => {
      dispatch(setReset());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleEnviar = () => {
    if(!getEmprestimo.id){
      dispatch(
        createEmprestimo({
          usuario_id: getEmprestimo.usuario_id, 
          livro_id: getEmprestimo.livro_id,
          data_devolucao: getEmprestimo.data_devolucao,
          status: getEmprestimo.status,
        }));
        setMessage('Empréstimo realizado com sucesso!');
    }else {
      dispatch(
        updateEmprestimo({
          id: getEmprestimo.id, 
          usuario_id: getEmprestimo.usuario_id, 
          livro_id: getEmprestimo.livro_id,
          data_devolucao: getEmprestimo.data_devolucao,
          status: getEmprestimo.status,
        }));
        setMessage('Empréstimo atualizado com sucesso!');
    }
    setOpen(true);
    dispatch(setReset());
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  }

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }} >
      <Typography
        style={{ fontWeight: 600 }}
        variant="h4"
        align='left'
        sx={{m: 1}}
      >
        {getEmprestimo.id ? 'Editar Empréstimo' : 'Novo Empréstimo'}
      </Typography>
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <div style={{display: 'flex'}}>
        <FormControl fullWidth sx={{m: 1}}>
          <InputLabel id="usuario">Usuário</InputLabel>
          <Select
            labelId="usuario"
            id="usuario_id"
            value={getEmprestimo.usuario_id}
            label="Usuário"
            onChange={(event) => dispatch(setUsuarioId(event.target.value))}
          >
            {usuarios.map(usuario => (
              <MenuItem value={usuario.id}>{usuario.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth sx={{m: 1}}>
          <InputLabel id="livro">Livro</InputLabel>
          <Select
            labelId="livro"
            id="livro_id"
            value={getEmprestimo.livro_id}
            label="Livro"
            onChange={(event) => dispatch(setLivroId(event.target.value))}
          >
            {livros.map(livro => (
              <MenuItem value={livro.id} disabled={!livro.situacao}>{livro.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        </div>
        <div style={{display: 'flex'}}>
          <TextField
            type="date"
            id="data"
            label="Data Devolução"
            value={getEmprestimo.data_devolucao}
            onChange={(event) => dispatch(setDataDevolucao(event.target.value))}
            sx={{m: 1}}
            InputLabelProps={{
              shrink: true,
            }}
            fullWidth
          />
          {getEmprestimo.id && (

            <FormControl fullWidth sx={{m: 1}}>
              <InputLabel id="status">Status</InputLabel>
              <Select
                labelId="status"
                id="status"
                value={getEmprestimo.status}
                label="Status"
                onChange={(event) => dispatch(setStatus(event.target.value))}
              >
                  <MenuItem value="Emprestado">Emprestado</MenuItem>
                  <MenuItem value="Devolvido">Devolvido</MenuItem>
                  <MenuItem value="Atrasado">Atrasado</MenuItem>
              </Select>
            </FormControl>
          )}
        </div>
      </Box>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button variant="contained" color="primary" sx={{m: 1}} onClick={handleEnviar}>
        {`${getEmprestimo.id ? 'Atualizar' : 'Cadastrar'}`}
        </Button>
      </div>
      <Alerts message={message} open={open} setOpen={setOpen}/>
    </Paper>
  );
}

export default CreateUpdateEmprestimo;