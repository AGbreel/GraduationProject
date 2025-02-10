import React from 'react';
import { Outlet } from 'react-router-dom'
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import LecturerNavbar from '../LecturerNavbar/LecturerNavbar';
import LecturerDrawer from '../LecturerDrawer/LecturerDrawer';
import { getDesignTokens } from '../../../../../theme';


const DrawerHeader1 = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const DrawerHeader2 = styled("div")(({ theme }) => ({
  display: "block",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function LecturerLayout() {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = React.useState(localStorage.getItem('currentMode') ? localStorage.getItem('currentMode') : 'light');
  // @ts-ignore
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          {localStorage.getItem('userToken') && (
            <LecturerNavbar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />
          )}
          {localStorage.getItem('userToken') && (
            <LecturerDrawer open={open} handleDrawerClose={handleDrawerClose} />
          )}

          <Box component="main" sx={{ flexGrow: 30 }}>
            {localStorage.getItem('userToken') ?
              <DrawerHeader1 open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />
              : <DrawerHeader2 open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />
            }
             
            <Outlet></Outlet>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}
