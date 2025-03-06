import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCourse } from '../../../../../redux/coursesSlice';
import Header from '../../../../../Components/Header/Header';
import { Box, Typography, Drawer, IconButton, CssBaseline, AppBar, Toolbar } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';


const drawerWidth = 700;

export default function Courses() {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses.courses);
  const selectedCourse = useSelector(state => state.courses.selectedCourse);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Course Title', width: 150, flex: 1 },
  ];

  const rows = courses.map(course => ({
    id: course.id,
    title: course.title,
  }));

  const handleRowClick = (params) => {
    dispatch(selectCourse(params.id));
    if (!drawerOpen) {
      setDrawerOpen(true);
    }
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <div className="p-6 space-y-6">
      <Header title="Courses" subTitle="View all your enrolled courses" />

      <Box>
        <Box sx={{ height: 'auto', width: "40%" }}>
          <DataGrid
            sx={{
              '& .MuiDataGrid-toolbarContainer': {
                backgroundColor: '#3da58a',
                color: 'white',
              }
            }}
            // checkboxSelection
            slots={{ toolbar: GridToolbar }}
            rows={rows}
            columns={columns}
            onRowClick={handleRowClick}
          />
        </Box>

        <Drawer
          variant="persistent"
          anchor="right"
          open={drawerOpen}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          PaperProps={{
            sx: {
              p: 2,
              backgroundColor: '#f4f4f4',
            }
          }}
        >
          <Box sx={{ p: 2 }}>
            <IconButton onClick={handleDrawerToggle} sx={{ mb: 2, mt: 7 }}>
              <CloseIcon />
            </IconButton>
            {selectedCourse ? (
              <div>
                <Typography variant="h6" component="h2">
                  {selectedCourse.title}
                </Typography>
                <Typography variant="body1">{selectedCourse.content}</Typography>
              </div>
            ) : (
              <Typography variant="body1">Please select a course to view its content.</Typography>
            )}
          </Box>
        </Drawer>
      </Box>
    </div>
  );
}
