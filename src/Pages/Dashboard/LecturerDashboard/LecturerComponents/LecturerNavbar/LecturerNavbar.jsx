'use client';

import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { Badge, Box, IconButton, Menu, MenuItem, Stack, Typography, useTheme } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import React, { useState } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useLocation } from 'react-router-dom';



const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    variants: [
        {
            // @ts-ignore
            props: ({ open }) => open,
            style: {
                marginLeft: drawerWidth,
                width: `calc(100% - ${drawerWidth}px)`,
                transition: theme.transitions.create(['width', 'margin'], {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.enteringScreen,
                }),
            },
        },
    ],
}));



export default function LecturerNavbar({ open, handleDrawerOpen, setMode }) {
    const location = useLocation();
  
    // استخراج آخر جزء من المسار ليكون اسم الصفحة الحالية
    const currentPage = location.pathname.split("/").pop() || "Home";

    const theme = useTheme();

    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const pushToLogin = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={pushToLogin}>Login</MenuItem>
            <MenuItem onClick={pushToLogin}>Logout</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed"
                    // @ts-ignore
                    open={open}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={[
                                {
                                    marginRight: 5,
                                },
                                open && { display: 'none' },
                            ]}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Typography sx={{ color: '#4b5e4b', fontWeight: 'bold'}} variant="h6" gutterBottom> UniHub › {currentPage}</Typography>

                        <Box flexGrow={1} />

                        <Stack direction="row" spacing={1}>
                            {theme.palette.mode === "light" ?
                                <IconButton onClick={() => {
                                    localStorage.setItem("currentMode", theme.palette.mode === 'dark' ? "light" : "dark")
                                    setMode((prevMode) =>
                                        prevMode === 'light' ? 'dark' : 'light',);
                                }} color="inherit" aria-label="add an alarm">
                                    <LightModeOutlinedIcon />
                                </IconButton>

                                : <IconButton onClick={() => {
                                    localStorage.setItem("currentMode", theme.palette.mode === 'dark' ? "light" : "dark")
                                    setMode((prevMode) =>
                                        prevMode === 'light' ? 'dark' : 'light',);
                                }} color="inherit" aria-label="delete">
                                    <DarkModeOutlinedIcon />
                                </IconButton>}


                            <IconButton color="inherit" aria-label="add to shopping cart">
                                <NotificationsOutlinedIcon />
                            </IconButton>

                            <IconButton color="inherit" aria-label="add to shopping cart">
                                <SettingsOutlinedIcon />
                            </IconButton>

                            <IconButton onClick={handleProfileMenuOpen} color="inherit" aria-label="delete">
                                <Person2OutlinedIcon />
                            </IconButton>
                        </Stack>
                    </Toolbar>
                </AppBar>

                {renderMobileMenu}
                {renderMenu}
            </Box>
        </>
    );
}
