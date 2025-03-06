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
import { styled, useTheme, Typography, Box, Avatar } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { ApartmentOutlined, AssignmentOutlined, AutoStoriesOutlined, ChatOutlined, ClassOutlined, FactCheckOutlined, GroupOutlined, HelpOutlineOutlined, HomeOutlined, InsightsOutlined, LiveHelpOutlined, LogoutOutlined, ManageAccountsOutlined, MenuBookOutlined, NotificationImportantOutlined, PersonOutline, QuizOutlined, ScheduleOutlined, SchoolOutlined, SettingsSuggestOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleChat } from "../../redux/chatSlice";
import Chat from "../Chat/Chat";



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


export default function MyDrawer({ open, handleDrawerClose }) {

  // const [role, setRole] = useState('admin');
  // const [role, setRole] = useState('lecturer');
  const [role, setRole] = useState('student');

  const theme = useTheme();
  const location = useLocation();
  const navigete = useNavigate()
  let pageArr = []

  const adminArr = [
    { 'text': 'Home', 'icon': <HomeOutlined />, 'path': '/home', },
    { 'text': 'Profile', 'icon': <PersonOutline />, 'path': '/profile', },
    { 'text': 'Lecturers', 'icon': <GroupOutlined />, 'path': '/lecturers', },
    { 'text': 'Students', 'icon': <GroupOutlined />, 'path': '/students', },
    { 'text': 'Departments', 'icon': <ApartmentOutlined />, 'path': '/departments', },
    { 'text': 'Schedule', 'icon': <ScheduleOutlined />, 'path': '/schedule', },
    { 'text': 'Courses', 'icon': <MenuBookOutlined />, 'path': '/courses', },
    { 'text': 'Attendance', 'icon': <FactCheckOutlined />, 'path': '/attendance', },
    { 'text': 'Analysis', 'icon': <InsightsOutlined />, 'path': '/analysis', },
    { 'text': 'Chat', 'icon': <ChatOutlined />, 'path': '/chat', },
    { 'text': 'Announce', 'icon': <NotificationImportantOutlined />, 'path': '/announce', },
    { 'text': 'System', 'icon': <SettingsSuggestOutlined />, 'path': '/system', },
    { 'text': 'Settings', 'icon': <ManageAccountsOutlined />, 'path': '/settings', },
    // { 'text': 'Logout', 'icon': <LogoutOutlined />, 'path': '/login', },
  ];

  const lecturerArr = [
    { 'text': 'Home', 'icon': <HomeOutlined />, 'path': '/home', },
    { 'text': 'Profile', 'icon': <PersonOutline />, 'path': '/profile', },
    { 'text': 'Timetable', 'icon': <ScheduleOutlined />, 'path': '/timetable', },
    { 'text': 'Courses', 'icon': <MenuBookOutlined />, 'path': '/courses', },
    { 'text': 'Tasks', 'icon': <AssignmentOutlined />, 'path': '/tasks', },
    { 'text': 'Students', 'icon': <GroupOutlined />, 'path': '/students', },
    { 'text': 'Attendance', 'icon': <FactCheckOutlined />, 'path': '/attendance', },
    { 'text': 'Analysis', 'icon': <InsightsOutlined />, 'path': '/analysis', },
    { 'text': 'Chat', 'icon': <ChatOutlined />, 'path': '/chat', },
    { 'text': 'Settings', 'icon': <ManageAccountsOutlined />, 'path': '/settings', },
    { 'text': 'Logout', 'icon': <LogoutOutlined />, 'path': '/login', },
  ];

  const studentArr = [
    { 'text': 'Home', 'icon': <HomeOutlined />, 'path': '/home', },
    { 'text': 'Profile', 'icon': <PersonOutline />, 'path': '/profile', },
    { 'text': 'Calender', 'icon': <ScheduleOutlined />, 'path': '/calender', },
    { 'text': 'Courses', 'icon': <MenuBookOutlined />, 'path': '/courses', },
    { 'text': 'Resources', 'icon': <AutoStoriesOutlined />, 'path': '/resources', },
    { 'text': 'Classrooms', 'icon': <ClassOutlined />, 'path': '/classrooms', },
    { 'text': 'Assignments', 'icon': <AssignmentOutlined />, 'path': '/assignments', },
    { 'text': 'Exams', 'icon': <QuizOutlined />, 'path': '/exams', },
    { 'text': 'Chat', 'icon': <ChatOutlined />, 'path': '/chat', },
    { 'text': 'FAQ', 'icon': <LiveHelpOutlined />, 'path': '/faq', },
    { 'text': 'Help', 'icon': <HelpOutlineOutlined />, 'path': '/help', },
    { 'text': 'Settings', 'icon': <ManageAccountsOutlined />, 'path': '/settings', },
    { 'text': 'Logout', 'icon': <LogoutOutlined />, 'path': '/login', },
  ];

  if (role == 'admin') {
    pageArr = adminArr;
  } else if (role == 'lecturer') {
    pageArr = lecturerArr;
  } else if (role == 'student') {
    pageArr = studentArr;
  }


  const dispatch = useDispatch();

  return (
    <Drawer variant="permanent" open={open}
      sx={{
        "& .MuiListItemText-primary": { color: "white" },
        "& .MuiListItemText-secondary": { color: "white" },
        "& .MuiListItemIcon-root": { color: "white" },
      }}>
      <DrawerHeader>
        <Typography align="center" sx={{ fontSize: open ? 18 : 0, transition: "0.25s", color: theme.palette.primary.main }} > <SchoolOutlined fontSize='large' sx={{ mr: 1 }} />  UniHub </Typography>

        <IconButton onClick={handleDrawerClose} sx={{ color: theme.palette.primary.main }}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>

      <Divider />

      <Box sx={{ my: 2 }}>
        <Avatar sx={{ mx: "auto", width: open ? 80 : 45, height: open ? 80 : 45, mb: 1, border: "2px solid gray", transition: "0.25s" }} alt="Cindy Baker" src="../../../public/Me.jpg" />
        <Typography align="center" sx={{ fontSize: open ? 18 : 0, transition: "0.25s", color: theme.palette.primary.main }} > Gbreel </Typography>
        <Typography align="center" sx={{ fontSize: open ? 15 : 0, transition: "0.25s", color: theme.palette.info.main }} > {role} </Typography>
      </Box>

      <Divider />

      <List>
        {pageArr.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => {
                {item.path == "/chat" ? dispatch(toggleChat()) : navigete(item.path)}
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

            {/* <Chat /> */}
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
