import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Button, Typography } from '@mui/material';
import MTableHeader from '../../components/MTableHeader';
import { useHistory } from 'react-router-dom';
import { fetchLivros } from '../../store/thunks/livro.thunk';
import MTableBodyEmprestimo from '../../components/MTableBodyEmprestimo';
import { fetchEmprestimo } from '../../store/thunks/emprestimo.thunk';

const columns = [
  { id: 'id', label: 'ID', minWidth: 170, align: 'center' },
  { id: 'usuario_id', label: 'Usuário', minWidth: 170, align: 'center' },
  { id: 'livro_id', label: 'Livro', minWidth: 170, align: 'center' },
  { id: 'data_devolucao', label: 'Data Devolução', minWidth: 170, align: 'center' },
  { id: 'status', label: 'Status', minWidth: 170, align: 'center' },
  { id: 'opcoes', label: 'Opções', minWidth: 170, align: 'center' }
];

const TableEmprestimo = () => {
  const dispatch = useAppDispatch();

  const history = useHistory();

  const {emprestimos} = useAppSelector(state => state.emprestimo);

  const handleUpdate = (id) => {
    history.push(`/adicionar/emprestimo/${id}`);
  }

  const handleNovoEmprestimo = () => {
    history.push(`/adicionar/emprestimo`);
  }

  React.useEffect(() => {
    dispatch(fetchEmprestimo());
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
        Empréstimos realizados
      </Typography>
      <TableContainer sx={{ maxHeight: 540 }}>
        <Table stickyHeader aria-label="sticky table">
          <MTableHeader columns={columns}/>
          <MTableBodyEmprestimo emprestimos={emprestimos} handleUpdate={handleUpdate}/>
        </Table>
      </TableContainer>
      <div style={{display: 'flex', justifyContent: 'flex-end'}}>
        <Button variant="contained" color="primary" sx={{m: 1}} onClick={handleNovoEmprestimo}>
          Novo empréstimo
        </Button>
      </div>
    </Paper>
  );
}

export default TableEmprestimo;