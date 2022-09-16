import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Search from "./components/Search";
import AddItem from "./components/AddItem";
import './App.css'
import Steps from "./components/Steps";
import { useSelector } from 'react-redux';

function App() {
  const task = useSelector((state) => state.reducers);
  return (
    <div className="app">
      <Box sx={{ width: '100%' }}>
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={3}>
            <Search />
          </Grid>

          <Grid item xs={3}>
            <AddItem />
          </Grid>
        </Grid>
      </Box>
      {/* <Box height="100vh" sx={{ display: 'flex', justifyContent: 'center' }}>
        <Steps />
      </Box> */}
      <Box sx={{ display: 'flex', justifyContent: 'stretch' }}>
        <Steps step={1} taskStep={task['addItem_1']} />
        <Steps step={2} taskStep={task['addItem_2']} />
        <Steps step={3} taskStep={task['addItem_3']} />
        <Steps step={4} taskStep={task['addItem_4']} />
      </Box>
    </div>
  );
};

export default App;
