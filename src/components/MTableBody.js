import { BorderColor, DeleteForever } from '@material-ui/icons';
import { IconButton, TableBody, TableCell, TableRow } from '@mui/material';
import React from 'react';

const MTableBody = ({usuarios, handleDelete, handleUpdate}) => {
  return (
    <TableBody>
      {usuarios 
        .map((user) => {
          return (
            <TableRow tabIndex={-1} key={user.id} >
              <TableCell key={user.id} align="center">
                {user.id}
              </TableCell>
              <TableCell key={user.name} align="center">
                {user.name}
              </TableCell>
              <TableCell key={user.email} align="center">
                {user.email}
              </TableCell>
              <TableCell key={`button${user.id}`} align="center">
                <IconButton onClick={() => handleUpdate(user.id)}>
                  <BorderColor color="primary" />
                </IconButton>
                <IconButton onClick={() => handleDelete(user.id)}>
                  <DeleteForever color="secondary" />
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
    </TableBody>
  )
}

export default MTableBody;