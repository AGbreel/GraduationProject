import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Typography, Drawer, IconButton } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import CloseIcon from '@mui/icons-material/Close';
import { selectCourse } from '../../../../../redux/coursesSlice';
import Header from '../../../../../Components/Header/Header';

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
    setDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setDrawerOpen(false);
  };

  return (
    <div className="p-6 space-y-6">
      <Header title="Courses" subTitle="View all your enrolled courses" />

      <Box>
        <Box sx={{ height: 'auto', width: "40%",  }}>
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
          anchor="right"
          open={drawerOpen}
          onClose={handleCloseDrawer}
          sx={{ backgroundColor: 'transparent' }}
        >
          <Box sx={{ width: 700, p: 2, pt: 10 }}>
            <IconButton onClick={handleCloseDrawer} sx={{ mb: 2 }}> <CloseIcon /> </IconButton>

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
