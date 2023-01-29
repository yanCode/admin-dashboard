import {Box, IconButton, InputBase, useTheme, Light} from "@mui/material";
import {ColorModeContext, tokens} from "../../theme";
import {useContext, useMemo} from "react";
import {GridSearchIcon} from "@mui/x-data-grid";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";


export function Topbar() {
  const theme = useTheme()

  const colorMode = useContext(ColorModeContext)
  const colors = useMemo(() => {
    return tokens(theme.palette.mode)
  }, [theme.palette.mode])
  return (
    <Box display='flex' justifyContent='space-between' p={2}>
      <Box
        display="flex"
        width='16rem'
        backgroundColor={colors.primary[400]}
        borderRadius='3px'
      >
        <InputBase sx={{ml: 2, flex: 1}} placeholder="Search"/>
        <IconButton type="button" sx={{p: 1}}>
          <GridSearchIcon/>
        </IconButton>
      </Box>
      <Box display='flex'>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === 'light' ? (
            <DarkModeOutlinedIcon/>) : (<LightModeOutlinedIcon/>)}

        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon/>
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon/>
        </IconButton>
      </Box>
    </Box>
  );
}