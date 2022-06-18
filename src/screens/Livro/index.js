import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Button, Typography } from '@mui/material';
import { setDialog } from '../../store/slice/application.slice';
import MTableHeader from '../../components/MTableHeader';
import { useHistory } from 'react-router-dom';
import { fetchLivros } from '../../store/thunks/livro.thunk';
import MTableBodyLivro from '../../components/MTableBodyLivro';

const columns = [
  { id: 'id', label: 'ID', minWidth: 170, align: 'center' },
  { id: 'name', label: 'Nome', minWidth: 170, align: 'center' },
  { id: 'autor', label: 'Autor', minWidth: 170, align: 'center' },
  { id: 'genero', label: 'Genero', minWidth: 170, align: 'center' },
  { id: 'situacao', label: 'Situação', minWidth: 170, align: 'center' },
  { id: 'opcoes', label: 'Opções', minWidth: 170, align: 'center' }
];

const TableLivro = () => {
  const dispatch = useAppDispatch();

  const history = useHistory();

  const {livros} = useAppSelector(state => state.livro);

  const handleDelete = (id) => {
    dispatch(setDialog({visible: true, acao: 'livro', title: 'Deseja realmente excluir?', id:id}));
  }

  const handleUpdate = (id) => {
    history.push(`/adicionar/livro/${id}`);
  }

  const handleNovoLivro = () => {
    history.push(`/adicionar/livro`);
  }

  React.useEffect(() => {
    dispatch(fetchLivros());
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
        Livros
      </Typography>
      <TableContainer sx={{ maxHeight: 540 }}>
        <Table stickyHeader aria-label="sticky table">
          <MTableHeader columns={columns}/>
          <MTableBodyLivro livros={livros} handleDelete={handleDelete} handleUpdate={handleUpdate}/>
        </Table>
      </TableContainer>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button variant="contained" color="primary" sx={{m: 1}} onClick={handleNovoLivro}>
          Novo livro
        </Button>
      </div>
    </Paper>
  );
}

export default TableLivro;