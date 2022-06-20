import { BorderColor } from '@material-ui/icons';
import { IconButton, TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';

const MTableBodyEmprestimo = ({emprestimos, handleUpdate}) => {
  return (
    <TableBody>
      {emprestimos 
        .map((emprestimo) => {
          return (
            <TableRow tabIndex={-1} key={emprestimo.id} >
              <TableCell key={emprestimo.id} align="center">
                {emprestimo.id}
              </TableCell>
              <TableCell key={emprestimo.usuario_id} align="center">
                {emprestimo.usuario_id}
              </TableCell>
              <TableCell key={emprestimo.livro_id} align="center">
                {emprestimo.livro_id}
              </TableCell>
              <TableCell key={emprestimo.data_devolucao} align="center">
                {emprestimo.data_devolucao}
              </TableCell>
              <TableCell key={emprestimo.status} align="center">
                {emprestimo.status}
              </TableCell>
              <TableCell key={`button${emprestimo.id}`} align="center">
                <IconButton onClick={() => handleUpdate(emprestimo.id)}>
                  <BorderColor color="primary" />
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
    </TableBody>
  )
}

export default MTableBodyEmprestimo;