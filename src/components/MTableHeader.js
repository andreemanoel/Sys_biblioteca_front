import { TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react';

const MTableHeader = ({columns}) => {
  return (
    <TableHead>
      <TableRow style={{color: 'red'}}>
        {columns.map((column) => (
          <TableCell
            key={column.id}
            align={column.align}
            style={{ minWidth: column.minWidth }}
          >
            {column.label}
          </TableCell>
        ))}
      </TableRow>
  </TableHead>
  )
}

export default MTableHeader;