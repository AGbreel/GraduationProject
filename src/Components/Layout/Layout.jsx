import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom'
import { Box, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import { getDesignTokens } from '../../theme';
import MyDrawer from '../MyDrawer/MyDrawer';
import Navbar from '../Navbar/Navbar';
import style from './Layout.module.css'
import Chat from '../Chat/Chat';
import { UserContext } from '../../Context/userContext';


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

export default function Layout() {

  const [open, setOpen] = React.useState(false);
  
  let { userData } = useContext(UserContext);

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
          {userData && (
            <Navbar open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />
          )}
          {userData && (
            <MyDrawer open={open} handleDrawerClose={handleDrawerClose} />
          )}

          <Box component="main" sx={{ width: "100%", flexGrow: 1 }}>
            {userData ?
              <DrawerHeader1 open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />
              : <DrawerHeader2 open={open} handleDrawerOpen={handleDrawerOpen} setMode={setMode} />
            }

            <Outlet></Outlet>

            {userData && <Chat />}

          </Box>
        </Box>
      </ThemeProvider>
    </>
  )
}
