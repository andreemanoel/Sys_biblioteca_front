import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Paper, Typography } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { createUser, findUsuario, updateUser } from '../../store/thunks/usuario.thunk';
import Alerts from '../../components/Alerts'
import { setEmail, setName, setReset } from '../../store/slice/usuario.slice';
import { useHistory, useParams } from 'react-router-dom';

const CreateUpdateUser = (props) => {
  const dispatch = useAppDispatch();

  const history = useHistory();

  const {getUsuario} = useAppSelector(state => state.usuario);

  const [message, setMessage] = useState();
  const {id} = useParams();

  useEffect(() => {
    if(id){
      dispatch(findUsuario(id));
    }
    return () => {
      dispatch(setName(''));
      dispatch(setEmail(''));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [erros, setErros] = React.useState({
    name: false,
    email: false,
  });

  const [open, setOpen] = React.useState(false);

  const verificarErro = () => {
    let flag = false;
    if(getUsuario.name === '') {setErros({...erros, name: true}); flag = true;}
    if(getUsuario.email === '') {setErros({...erros, email: true}); flag = true;}

    console.log(erros);
    if(flag){
      return true;
    }else {
      return false;
    }
  }

  const handleEnviar = () => {
    if(!verificarErro()){
      if(!getUsuario.id){
        dispatch(
          createUser({
            name: getUsuario.name, 
            email: getUsuario.email, 
          }));
          setMessage('Usuário cadastrado com sucesso!');
      }else {
        dispatch(
          updateUser({
            id: getUsuario.id, 
            name: getUsuario.name, 
            email: getUsuario.email
          }));
          setMessage('Usuário atualizado com sucesso!');
      }
      setOpen(true);
      dispatch(setReset());
      // history.push(`/adicionar/user`);
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
        {getUsuario.id ? 'Editar funcionário' : 'Novo funcionário'}
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
            value={getUsuario.name}
            onChange={(event) => {dispatch(setName(event.target.value)); setErros({...erros, nome: false});}}
            sx={{m: 1}}
            fullWidth
          />
          <TextField
            error={erros.email}
            id="email"
            label="Email"
            value={getUsuario.email}
            onChange={(event) => {dispatch(setEmail(event.target.value)); setErros({...erros, email: false})}}
            sx={{m: 1}}
            fullWidth
          />
        </div>
      </Box>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button variant="contained" color="primary" sx={{m: 1}} onClick={handleEnviar}>
        {`${getUsuario.id ? 'Atualizar' : 'Cadastrar'}`}
        </Button>
      </div>
      <Alerts message={message} open={open} setOpen={setOpen}/>
    </Paper>
  );
}

export default CreateUpdateUser;