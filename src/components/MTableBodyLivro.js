import { BorderColor, DeleteForever } from '@material-ui/icons';
import { IconButton, TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';

const MTableBodyLivro = ({livros, handleDelete, handleUpdate}) => {
  return (
    <TableBody>
      {livros 
        .map((livro) => {
          return (
            <TableRow tabIndex={-1} key={livro.id} >
              <TableCell key={livro.id} align="center">
                {livro.id}
              </TableCell>
              <TableCell key={livro.name} align="center">
                {livro.name}
              </TableCell>
              <TableCell key={livro.autor} align="center">
                {livro.autor}
              </TableCell>
              <TableCell key={livro.genero} align="center">
                {livro.genero}
              </TableCell>
              <TableCell key={`situacao_${livro.siatuacao}`} align="center">
                {livro.situacao ? 'Disponível' : 'Emprestado'}
              </TableCell>
              <TableCell key={`button${livro.id}`} align="center">
                <IconButton onClick={() => handleUpdate(livro.id)}>
                  <BorderColor color="primary" />
                </IconButton>
                <IconButton onClick={() => handleDelete(livro.id)}>
                  <DeleteForever color="secondary" />
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
    </TableBody>
  )
}

export default MTableBodyLivro;