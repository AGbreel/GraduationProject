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
import { styled, useTheme, Typography, Box, Avatar, Alert } from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import { ApartmentOutlined, AssignmentOutlined, AutoStoriesOutlined, ChatOutlined, ClassOutlined, FactCheckOutlined, GroupOutlined, HelpOutlineOutlined, HomeOutlined, InsightsOutlined, LiveHelpOutlined, LogoutOutlined, ManageAccountsOutlined, MenuBookOutlined, NotificationImportantOutlined, PersonOutline, QuizOutlined, ScheduleOutlined, SchoolOutlined, SettingsSuggestOutlined } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';

import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleChat } from "../../redux/chatSlice";
import Chat from "../Chat/Chat";
import { SpaceContext } from "../../Context/spaceContext";
import { useFormik } from "formik";
import * as Yup from 'yup'
import style from './MyDrawer.module.css'



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
  // const [role, setRole] = useState('student');
  const [role, setRole] = useState('user');

  const dispatch = useDispatch();
  const theme = useTheme();
  const location = useLocation();
  const navigete = useNavigate()
  const { spaceData, createSpace, getSpaces } = useContext(SpaceContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredSpaces, setFilteredSpaces] = useState(spaceData);
  useEffect(() => {
    const filtered = spaceData.filter(space =>
      space.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      space.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSpaces(filtered);
  }, [searchTerm, spaceData]);



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
    // { 'text': 'Logout', 'icon': <LogoutOutlined />, 'path': '/login', },
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
    // { 'text': 'Logout', 'icon': <LogoutOutlined />, 'path': '/login', },
  ];

  const userArr1 = [
    { 'text': 'Home', 'icon': <HomeOutlined />, 'path': '/home', },
    { 'text': 'Courses', 'icon': <MenuBookOutlined />, 'path': '/courses', },
    // { 'text': 'Profile', 'icon': <PersonOutline />, 'path': '/profile', },
    // { 'text': 'Resources', 'icon': <AutoStoriesOutlined />, 'path': '/resources', },
    // { 'text': 'Classrooms', 'icon': <ClassOutlined />, 'path': '/classrooms', },
    // { 'text': 'FAQ', 'icon': <LiveHelpOutlined />, 'path': '/faq', },
    // { 'text': 'Chat', 'icon': <ChatOutlined />, 'path': '/chat', },
    { 'text': 'Assignments', 'icon': <AssignmentOutlined />, 'path': '/assignments', },
    { 'text': 'Exams', 'icon': <QuizOutlined />, 'path': '/exams', },
    { 'text': 'Calender', 'icon': <ScheduleOutlined />, 'path': '/calender', },

  ];

  const userArr2 = [
    { 'text': 'Logout', 'icon': <LogoutOutlined />, 'path': '/login', },
    { 'text': 'Settings', 'icon': <ManageAccountsOutlined />, 'path': '/settings', },
    { 'text': 'Help', 'icon': <HelpOutlineOutlined />, 'path': '/help', },
  ]

  if (role == 'admin') {
    pageArr = adminArr;
  } else if (role == 'lecturer') {
    pageArr = lecturerArr;
  } else if (role == 'student') {
    pageArr = studentArr;
  } else {
    pageArr = userArr1;
  }


  //? ==============  Dropdown  ===============
  const [modelSpaceIsOpen, setModelSpaceIsOpen] = useState(false);
  const [modelCreateSpaceIsOpen, setModelCreateSpaceIsOpen] = useState(false);
  const [spaceId, setSpaceId] = useState(null);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedSpace, setSelectedSpace] = useState("My Space");
  const toggleDropdown = () => {
    setIsOpen(prev => !prev);
    getSpaces();
  };
  const dropdownRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  //? ==============  Dropdown  ===============

  //! Function to handle form submission
  const handleCrateSpace = async (values) => {
    try {
      createSpace(values);
      setModelCreateSpaceIsOpen(false);

    } catch (error) {
      console.log("Error Occured: ", error);
    }
  }

  //! Validation schema for form inputs
  let validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Space name must be at least 3 characters').max(20, 'Space name must be at most 20 characters').required('Space name is required'),
    description: Yup.string().min(3, 'Description must be at least 3 characters').max(50, 'Description must be at most 50 characters').required('Description is required'),
  })

  //! Formik configuration
  let formik = useFormik({
    initialValues: {
      name: '',
      description: '',
    },
    validationSchema: validationSchema,
    onSubmit: handleCrateSpace
  })


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
                { item.path == "/chat" ? dispatch(toggleChat()) : navigete(item.path) }
              }}

              sx={[
                {
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor: location.pathname == item.path ? "gray" : null,
                },
              ]}>

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

      <Divider sx={{ flexGrow: 1 }} />
      <List>
        {userArr2.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => {
                { item.path == "/chat" ? dispatch(toggleChat()) : navigete(item.path) }
              }}

              sx={[
                {
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                  bgcolor: location.pathname == item.path ? "gray" : null,
                },
              ]}>

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

      <Divider />

      {/* Dropdown */}
      <Box sx={{ mx: "auto", p: 0, position: 'relative' }}>
        <button onClick={toggleDropdown}
          className={`my-2 py-2 bg-purple-600 text-white rounded-md shadow hover:bg-purple-700 flex items-center justify-between ${open ? "w-[180px] px-4" : "w-[50px] px-2"}  `}
        >
          <div className="flex items-center">
            <span className={`flex items-center justify-center w-6 h-6 rounded-full bg-white text-purple-600 text-xs font-bold ${open ? "mr-2" : "mr-0"}`}>
              {selectedSpace.charAt(0)}
            </span>
            {open && selectedSpace}
          </div>
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={dropdownRef}
              key="dropdown"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-16 left-2 right-2 bg-white rounded-md shadow-lg z-50 border" >

              <ul className="py-1 text-sm text-gray-700">
                {spaceData.map((space) => (
                  <li key={space._id}
                    onClick={() => {
                      setSelectedSpace(space.name);
                      setIsOpen(false);
                      setSpaceId(space._id);
                      console.log(space);
                    }}
                    className="flex items-center px-4 py-2 hover:bg-purple-100 cursor-pointer" >

                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-purple-500 text-white text-xs font-bold mr-3">
                      {space.name.charAt(0)}
                    </span>
                    {space.name}
                  </li>
                ))}
              </ul>

              <div className="border-t"></div>
              <button onClick={() => setModelSpaceIsOpen(true)} className="px-4 py-2 text-sm text-gray-900 hover:bg-gray-100 cursor-pointer">
                Manage Spaces
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </Box>

      {/* MODEL Space */}
      {modelSpaceIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50" onClick={() => setModelSpaceIsOpen(false)}>
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-semibold text-purple-600 mb-4"> Manage Spaces </h2>
              <button onClick={() => { setModelCreateSpaceIsOpen(true); setModelSpaceIsOpen(false); }} className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 cursor-pointer">Create Space</button>
            </div>

            <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search spaces" className="w-full px-4 py-2 border rounded-md mb-4" />

            <div className="space-y-4 my-4">
              {filteredSpaces.length > 0 ? (
                filteredSpaces.map((space, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-purple-600 text-white flex items-center justify-center rounded-full text-lg font-semibold">
                      {space.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium">{space.name}</div>
                      <div className="text-sm text-gray-500">{space.description}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500">No results found.</div>
              )}
            </div>


            <button onClick={() => setModelSpaceIsOpen(false)} className="absolute bottom-4 right-4 text-purple-600 font-semibold hover:underline" >
              Close
            </button>
          </div>
        </div>
      )}

      {/* MODEL Create Space */}
      {modelCreateSpaceIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/60 z-50" onClick={() => setModelCreateSpaceIsOpen(false)}>
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 relative" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-semibold text-purple-600 mb-4"> Create New Space </h2>

            <form onSubmit={formik.handleSubmit}>
              <div className="spaceName">
                <div className={style.inputBox}>
                  <div className="relative">
                    <input className={style.input} placeholder="Space Name" id="name" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="normal" variant="outlined" label="Space Name" type="name" />
                    <label className={style.label} htmlFor="name">Space Name</label>
                  </div>
                  {formik.touched.name && formik.errors.name && <Alert sx={{ mt: 1, py: 0, borderRadius: "40px" }} severity="error">{formik.errors.name}</Alert>}
                </div>
              </div>

              <div className="SpaceDescription my-4">
                <div className={style.inputBox}>
                  <div className="relative">
                    <input className={style.input} placeholder="Space Description" id="description" name="description" value={formik.values.description} onChange={formik.handleChange} onBlur={formik.handleBlur} margin="normal" variant="outlined" label="Space Description" type="text" />
                    <label className={style.label} htmlFor="description">Space Description</label>
                  </div>
                  {formik.touched.description && formik.errors.description && <Alert sx={{ mt: 1, py: 0, borderRadius: "40px" }} severity="error">{formik.errors.description}</Alert>}
                </div>
              </div>

              <div className="flex space-x-4 justify-end items-center mt-5">
                <button onClick={() => setModelCreateSpaceIsOpen(false)} className="cursor-pointer text-purple-600 font-semibold hover:underline" >
                  Cancle
                </button>

                <button type="submit" className="cursor-pointer text-white bg-purple-600 py-2 px-4 rounded-md font-semibold hover:underline" >
                  Create
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </Drawer>
  );
}
