import * as React from 'react';
import {Box, Button, useTheme} from "@mui/material";
import Header from "../components/Header";
import {tokens} from "../theme";
import {DownloadOutlined, Email} from "@mui/icons-material";
import StatBox from "../components/StatBox";

export function Dashboard() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <Box m="20px">
      <Box display="flex" justifyContent='space-between' alignItems="center">
        <Header title="Dashboard" subtitle='Welcome to the dashboard'/>
        <Box>
          <Button sx={{
            backgroundColor: colors.blueAccent[700],
            fontSize: "14px", fontWeight: 'bold',
            color: colors.grey[100],
            padding: '10px 20px'
          }}><DownloadOutlined sx={{mr: "10px"}}/>Download Reports</Button>
        </Box>
      </Box>
      {/*The Grid System*/}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12,1fr)"
        gridAutoRows="140px" gap="20px">
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center">
          <StatBox title='12,361' subtitle="Elio Uks" progress="0.75" increase="+14%" icon={<Email sx={{
            color: colors.greenAccent[600],
            fontSize: "26px"
          }}/>}/>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center">
          <StatBox title='12,361' subtitle="Elio Uks" progress="0.75" increase="+14%" icon={<Email sx={{
            color: colors.greenAccent[600],
            fontSize: "26px"
          }}/>}/>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center">
          <StatBox title='12,361' subtitle="Elio Uks" progress="0.75" increase="+14%" icon={<Email sx={{
            color: colors.greenAccent[600],
            fontSize: "26px"
          }}/>}/>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center">
          <StatBox title='12,361' subtitle="Elio Uks" progress="0.75" increase="+14%" icon={<Email sx={{
            color: colors.greenAccent[600],
            fontSize: "26px"
          }}/>}/>
        </Box>

      </Box>
    </Box>
  );
}