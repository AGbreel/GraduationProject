'use client';

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Avatar, styled, useTheme, Typography, Box, colors } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { AssignmentTurnedInOutlined, CloudUploadOutlined, EventNoteOutlined, ExitToAppOutlined, LogoutOutlined, QrCode2Outlined, SchoolOutlined } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";

import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import ScheduleIcon from '@mui/icons-material/Schedule';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupIcon from '@mui/icons-material/Group';
import FactCheckIcon from '@mui/icons-material/FactCheck';
import InsightsIcon from '@mui/icons-material/Insights';
import ChatIcon from '@mui/icons-material/Chat';



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);


export default function LecturerDrawer({ open, handleDrawerClose }) {
  const theme = useTheme();
  const location = useLocation();
  const navigete = useNavigate()

  const arr1 = [
    { 'text': 'Home', 'icon': <HomeIcon />, 'path': '/home', },
    { 'text': 'Profile', 'icon': <PersonIcon />, 'path': '/profile', },
    { 'text': 'Timetable', 'icon': <ScheduleIcon />, 'path': '/timetable', },
    { 'text': 'Courses', 'icon': <MenuBookIcon />, 'path': '/courses', },
    { 'text': 'Tasks', 'icon': <AssignmentIcon />, 'path': '/tasks', },
    { 'text': 'Students', 'icon': <GroupIcon />, 'path': '/students', },
    { 'text': 'Attendance', 'icon': <FactCheckIcon />, 'path': '/attendance', },
    { 'text': 'Analysis', 'icon': <InsightsIcon />, 'path': '/analysis', },
    { 'text': 'Chat', 'icon': <ChatIcon />, 'path': '/chat', },
    { 'text': 'Logout', 'icon': <LogoutOutlined />, 'path': '/login', },
  ];



  return (
    <Drawer variant="permanent" open={open}
      sx={{
        "& .MuiListItemText-primary": { color: "white" }, // جعل نصوص القائمة بيضاء
        "& .MuiListItemText-secondary": { color: "white" }, // جعل النصوص الثانوية بيضاء أيضًا
        "& .MuiListItemIcon-root": { color: "white" }, // جعل الأيقونات بيضاء أيضًا
      }}>
      <DrawerHeader>
        <Typography align="center" sx={{ fontSize: open ? 18 : 0, transition: "0.25s", color: theme.palette.primary.main }} > <SchoolOutlined fontSize='large' sx={{ mr: 1 }} />  UniHub </Typography>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>



      {/* <Divider />

      <Box sx={{ my: 2 }}>
        <Link to="/">
          <Avatar sx={{ mx: "auto", cursor: "pointer", width: open ? 80 : 45, height: open ? 80 : 45, mb: 1, border: "2px solid gray", transition: "0.25s" }} alt="Cindy Baker" src="../../Gbreel.jpg" />
        </Link>

        <Typography align="center" sx={{ fontSize: open ? 18 : 0, transition: "0.25s", color: theme.palette.primary.main }} > GBREEl </Typography>
        <Typography align="center" sx={{ fontSize: open ? 15 : 0, transition: "0.25s", color: theme.palette.info.light }} > Lecturer </Typography>
      </Box> */}

      <Divider />

      <List>
        {arr1.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => {
                navigete(item.path)
              }}
              sx={[
                {
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor: location.pathname == item.path ? "gray" : null,
                },
              ]}
            >
              <ListItemIcon primary={item.text}
                sx={[
                  {
                    minWidth: 0,
                    justifyContent: 'center',
                  },
                  open
                    ? {
                      mr: 3,
                    }
                    : {
                      mr: 'auto',
                    },
                ]}>
                {item.icon}
              </ListItemIcon>

              <ListItemText primary={item.text}
                sx={[
                  open
                    ? {
                      opacity: 1,
                    }
                    : {
                      opacity: 0,
                    },
                ]}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
