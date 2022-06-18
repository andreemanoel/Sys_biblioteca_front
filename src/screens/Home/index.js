import React from "react";
import Paper from '@material-ui/core/Paper';
import {
  ArgumentAxis,
  ValueAxis,
  Chart,
  BarSeries,
} from '@devexpress/dx-react-chart-material-ui';
import { Typography } from "@mui/material";
  
  
const Home = () => {
  
// Sample data
const data = [
  { argument: 'Segunda', value: 30 },
  { argument: 'Terça', value: 20 },
  { argument: 'Quarta', value: 10 },
  { argument: 'Quinta', value: 50 },
  { argument: 'Sexta', value: 60 },
];
return (
    <Paper>
      <Typography 
        style={{ fontWeight: 600 }}
        variant="h4"
        align='left'
        sx={{m: 1}}
      >
        Atendimentos
      </Typography>
      <Chart
        data={data}
      >
        <ArgumentAxis />
        <ValueAxis />

        <BarSeries valueField="value" argumentField="argument"/>
      </Chart>
  </Paper>
);
}
  
export default Home;