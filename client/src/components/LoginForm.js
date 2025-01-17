import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import axiosInstance from "../api/axiosInstance";

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token); // Guarda el token
      onLoginSuccess();
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Iniciar Sesión
      </Typography>
      <TextField
        label="Correo Electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Contraseña"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Iniciar Sesión
      </Button>
    </Box>
  );
};

export default LoginForm;
