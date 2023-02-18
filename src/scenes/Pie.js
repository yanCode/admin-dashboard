import * as React from "react";
import {Box} from "@mui/material";
import Header from "../components/Header";
import PieChart from "../components/PieChart";

export function Pie() {
  return (
    <Box m='20px'>
      <Header title="Bar Chart" subtitle="A demo of Simple Bar Chart"/>
      <Box height="75vh">
        <PieChart/>
      </Box>
    </Box>
  );
}