import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Button, Typography } from '@mui/material';
import { setDialog } from '../../store/slice/application.slice';
import MTableHeader from '../../components/MTableHeader';
import MTableBody from '../../components/MTableBody';
import { useHistory } from 'react-router-dom';
import { fetchUsuarios } from '../../store/thunks/usuario.thunk';

const columns = [
  { id: 'id', label: 'ID', minWidth: 170, align: 'center' },
  { id: 'name', label: 'Nome', minWidth: 170, align: 'center' },
  { id: 'email', label: 'Email', minWidth: 170, align: 'center' },
  { id: 'opcoes', label: 'Opções', minWidth: 170, align: 'center' }
];

const TableUsuario = (props) => {
  const dispatch = useAppDispatch();

  const history = useHistory();

  const {usuarios} = useAppSelector(state => state.usuario);

  const handleDelete = (id) => {
    dispatch(setDialog({visible: true, title: 'Deseja realmente excluir?', id:id}));
  }

  const handleUpdate = (id) => {
    history.push(`/adicionar/user/${id}`);
  }

  const handleNovoUser = () => {
    history.push(`/adicionar/user`);
  }

  React.useEffect(() => {
    dispatch(fetchUsuarios());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <Typography 
        style={{ fontWeight: 600 }}
        variant="h4"
        align='left'
        sx={{m: 1}}
      >
        Usuários
      </Typography>
      <TableContainer sx={{ maxHeight: 540 }}>
        <Table stickyHeader aria-label="sticky table">
          <MTableHeader columns={columns}/>
          <MTableBody usuarios={usuarios} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
        </Table>
      </TableContainer>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button variant="contained" color="primary" sx={{m: 1}} onClick={handleNovoUser}>
          Novo usuario
        </Button>
      </div>
    </Paper>
  );
}

export default TableUsuario;