import * as React from 'react';
import {Box} from "@mui/material";
import Header from "../components/Header";


export function Dashboard() {
  return (
    <Box>
      <Box display="flex" justifyContent='space-between' alignItems="center">
        <Header title="Dashboard" subtitle='Welcome to your dashboard'/>
      </Box>
    </Box>
  );
}