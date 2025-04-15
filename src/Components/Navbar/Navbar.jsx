'use client';

import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Badge, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemText, Menu, Stack, Typography } from '@mui/material';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import React, { useContext, useState } from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Context/userContext';
import { Add, DarkModeOutlined, GroupOutlined, LightModeOutlined, SearchOutlined } from '@mui/icons-material';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';



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



export default function Navbar({ open, handleDrawerOpen, setMode }) {
    const theme = useTheme();
    const location = useLocation();
    const navigete = useNavigate()

    let { setUserData, userInfo } = useContext(UserContext);
    const relatedPath = location.pathname.split("/").join(" › ");
    // const currentPage = location.pathname.split("/").pop() || "Home";


    const [anchorEl, setAnchorEl] = useState(null);
    const oopen = Boolean(anchorEl);
    const handleOpen = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    const handleLogout = () => {
        try {
            localStorage.removeItem("userToken");
            setUserData(null);

            setAnchorEl(null);

            navigete('/login');

        } catch (error) {
            console.log(error);
        }
    };

    const pushToProfile = () => {
        setAnchorEl(null);
        navigete('/profile');
    };

    const [openNotificationDrawer, setOpenNotificationDrawer] = useState(false);
    const [openMemberDrawer, setOpenMemberDrawer] = useState(false);

    const notifications = [
        "New assignment in Web Development",
        "Your attendance for Database Systems is marked",
        "Upcoming quiz in Data Structures",
    ];

    const toggleNotificationDrawer = () => {
        setOpenNotificationDrawer(!openNotificationDrawer);
    };

    const toggleMemberDrawer = () => {
        setOpenMemberDrawer(!openMemberDrawer);
    };

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

                        <Typography sx={{ color: '#4b5e4b', fontWeight: 'bold' }} variant="h6" gutterBottom> UniHub {relatedPath}</Typography>

                        <Box flexGrow={1} />

                        <Stack direction="row" spacing={1}>
                            {theme.palette.mode === "light" ?
                                <IconButton onClick={() => {
                                    localStorage.setItem("currentMode", theme.palette.mode === 'dark' ? "light" : "dark")
                                    setMode((prevMode) =>
                                        prevMode === 'light' ? 'dark' : 'light',);
                                }} color="inherit" aria-label="add an alarm">
                                    <LightModeOutlined />
                                </IconButton>
                                : <IconButton onClick={() => {
                                    localStorage.setItem("currentMode", theme.palette.mode === 'dark' ? "light" : "dark")
                                    setMode((prevMode) =>
                                        prevMode === 'light' ? 'dark' : 'light',);
                                }} color="inherit" aria-label="delete">
                                    <DarkModeOutlined />
                                </IconButton>}

                            <IconButton onClick={toggleMemberDrawer} color="inherit">
                                <GroupOutlined />
                            </IconButton>

                            {/* Member Drawer */}
                            <Drawer
                                anchor="right"
                                open={openMemberDrawer}
                                onClose={toggleMemberDrawer}
                                PaperProps={{
                                    sx: {
                                        "& .MuiListItemText-primary": { color: "black" },
                                        "& .MuiListItemText-secondary": { color: "black" },
                                        "& .MuiListItemIcon-root": { color: "black" },
                                        backgroundColor: "#fff",
                                        color: "#000",
                                        width: "300px",
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        padding: "16px",
                                    },
                                }} >
                                <Box sx={{ textAlign: "center", width: "100%", color: "#000", pt: 10 }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Typography variant="h6" fontWeight="bold" gutterBottom> Members </Typography>

                                        <Add sx={{ cursor: "pointer" }} />
                                    </Box>

                                    <div className="Search mt-4">
                                        <div>
                                            <div className="relative">
                                                <input className="ps-10 py-2 w-full rounded-md border border-gray" placeholder="Search Members" name="search" margin="normal" variant="outlined" label="Search Members" type="text" />
                                                <label htmlFor="email"> Search </label>
                                                <SearchOutlined sx={{ color: "gray", mr: 1, position: "absolute", top: "50%", left: "10px", transform: "translateY(-50%)" }} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* <List sx={{ width: "100%" }}>
                                        {notifications.length > 0 ? (
                                            notifications.map((notification, index) => (
                                                <ListItem key={index} divider sx={{ textAlign: "center" }}>
                                                    <ListItemText primary={<Typography component="span">{notification}</Typography>} />
                                                </ListItem>
                                            ))
                                        ) : (
                                            <Typography fontWeight="bold" variant='h6' color="primary">( No new notifications )</Typography>
                                        )}
                                    </List> */}
                                </Box>
                            </Drawer>

                            <IconButton color="inherit" onClick={toggleNotificationDrawer}>
                                <Badge badgeContent={notifications.length} color="error">
                                    <NotificationsOutlinedIcon />
                                </Badge>
                            </IconButton>
                            {/* Notification Drawer */}
                            <Drawer
                                anchor="right"
                                open={openNotificationDrawer}
                                onClose={toggleNotificationDrawer}
                                PaperProps={{
                                    sx: {
                                        "& .MuiListItemText-primary": { color: "white" },
                                        "& .MuiListItemText-secondary": { color: "white" },
                                        "& .MuiListItemIcon-root": { color: "white" },
                                        height: "auto",
                                        maxHeight: "90vh",
                                        width: "300px", // ضبط العرض
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center", // توسيط أفقي
                                        justifyContent: "center", // توسيط رأسي
                                        padding: "16px",
                                    },
                                }}
                            >
                                <Box sx={{ textAlign: "center", width: "100%", color: "#fff", pt: 10 }}>
                                    <Typography variant="h6" fontWeight="bold" color="primary" gutterBottom>
                                        ( Notifications )
                                    </Typography>

                                    <List sx={{ width: "100%" }}>
                                        {notifications.length > 0 ? (
                                            notifications.map((notification, index) => (
                                                <ListItem key={index} divider sx={{ textAlign: "center" }}>
                                                    <ListItemText primary={<Typography component="span">{notification}</Typography>} />
                                                </ListItem>
                                            ))
                                        ) : (
                                            <Typography fontWeight="bold" variant='h6' color="primary">( No new notifications )</Typography>
                                        )}
                                    </List>
                                </Box>
                            </Drawer>

                            <IconButton onClick={(e) => { handleOpen(e) }} size="small">
                                <Avatar src="../../../public/Me.jpg" sx={{ width: 32, height: 32, border: "2px solid gray" }} />
                            </IconButton>

                            <Menu
                                anchorEl={anchorEl}
                                open={oopen}
                                onClose={handleClose}
                                PaperProps={{
                                    elevation: 5,
                                    sx: {
                                        width: 320,
                                        mt: 1.5,
                                        overflow: "visible",
                                        borderRadius: 3,
                                        p: 2,
                                        backgroundColor: "white",
                                        color: "black",
                                    },
                                }}
                                transformOrigin={{ horizontal: "right", vertical: "top" }}
                                anchorOrigin={{ horizontal: "right", vertical: "bottom" }} >

                                <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
                                    <Avatar src="../../../public/Me.jpg" sx={{ width: 56, height: 56, mb: 1 }} />
                                    <Typography variant="h6" fontWeight="bold"> Hi, {userInfo.username?.split(" ")[0]}! </Typography>
                                    <Typography variant="body2" color="text.secondary"> {userInfo.email} </Typography>
                                </Box>

                                <Stack sx={{ width: "100%", alignItems: "center", justifyContent: "between" }} direction="row" spacing={1} my={3}>
                                    <Button onClick={() => pushToProfile()} sx={{
                                        py: 0.5, color: "black", textTransform: "capitalize", width: "100%", borderColor: "gray", whiteSpace: 'nowrap', '&:hover': { backgroundColor: 'gray', color: 'white' }
                                    }} variant="outlined" size="small" startIcon={<SettingsIcon sx={{ fontSize: 16 }} />}>
                                        Manage account
                                    </Button>

                                    <Button onClick={handleLogout} sx={{
                                        py: 0.5, color: "black", textTransform: "capitalize", width: "100%", borderColor: "gray", whiteSpace: 'nowrap', '&:hover': { backgroundColor: 'gray', color: 'white' }
                                    }} variant="outlined" size="small" startIcon={<LogoutIcon sx={{ fontSize: 16 }} />}>
                                        Sign out
                                    </Button>
                                </Stack>
                                <Divider />
                            </Menu>
                        </Stack>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}
