'use client';

import { Box, Button, TextField, Typography, Avatar, Paper, Container } from "@mui/material";
import { PersonOutlined, LockOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";


export default function Login() {
  return (
    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "80vh", flexDirection: "column" }}>
      <Avatar sx={{ bgcolor: "#4b5e4b", width: 70, height: 70, mb: 2 }}>
        📖
      </Avatar>

      <Typography variant="h5" sx={{ fontWeight: "bold", color: "#4b5e4b" }}>
        UniHub
      </Typography>
      
      <Typography variant="body2" sx={{ color: "#4b5e4b", mb: 3 }}>
        Growing Minds, Nurturing Knowledge
      </Typography>

      <Container maxWidth="sm" >
        <Paper elevation={3} sx={{ padding: 4, borderRadius: 2, textAlign: "center", bgcolor: "#ffffff", width: "100%" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "#4b5e4b", mb: 2, textAlign: "left" }}>
            Welcome back
          </Typography>
          <Box component="form" sx={{ mt: 1 }}>
            <TextField fullWidth margin="normal" variant="outlined" label="Username" InputProps={{ startAdornment: <PersonOutlined sx={{ color: "gray", mr: 1 }} /> }} />
            <TextField fullWidth margin="normal" variant="outlined" label="Password" type="password" InputProps={{ startAdornment: <LockOutlined sx={{ color: "gray", mr: 1 }} /> }} />

            <Button fullWidth variant="contained" sx={{ bgcolor: "#4b5e4b", color: "#eeede9", mt: 2, '&:hover': { bgcolor: "#3d4d3d" } }}>Sign in</Button>
          </Box>

          <Typography variant="body2" sx={{ mt: 2, color: "#4b5e4b" }}>
            Need your credentials? <Link to="/verification" style={{ color: "#4b5e4b", textDecoration: "none", fontWeight: "bold" }}>Get them here</Link>
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
