import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../../../../Components/Header/Header";
import { AdminPanelSettingsOutlined, LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";

export default function AdminLecturers() {

  const theme = useTheme();
  // field ==> Reqird
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 33,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "name",
      headerName: "name",
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    { field: "age", headerName: "age", align: "center", headerAlign: "center" },
    {
      field: "phone",
      headerName: "phone",
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "access",
      headerName: "access",
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              p: "5px",
              width: "99px",
              borderRadius: "3px",
              marginInline: "auto",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              textAlign: "center",

              backgroundColor:
                access === "Admin"
                  ? theme.palette.primary.dark
                  : access === "Manager"
                    ? theme.palette.secondary.dark
                    : "#3da58a",
            }}
          >
            {access === "Admin" && (
              <AdminPanelSettingsOutlined
                sx={{ color: "#fff" }}
                fontSize="small"
              />
            )}

            {access === "Manager" && (
              <SecurityOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}

            {access === "User" && (
              <LockOpenOutlined sx={{ color: "#fff" }} fontSize="small" />
            )}

            <Typography sx={{ fontSize: "13px", color: "#fff" }}>
              {access}
            </Typography>
          </Box>
        );
      },
    },
  ];


  return (
    <>
      <Box sx={{ m: "20px" }}>
        <Header title={"TEAM"} subTitle={"Managing the Team Members"} />

        <Box sx={{ height: 600, width: "98%", mx: "auto" }}>
          <DataGrid
            sx={{
              '& .MuiDataGrid-toolbarContainer': {
                backgroundColor: '#3da58a',
                color: 'white',
              }
            }}
            checkboxSelection
            slots={{ toolbar: GridToolbar }}
            rows={rows}
            columns={columns}
          />
        </Box>
      </Box>
    </>
  );
}
