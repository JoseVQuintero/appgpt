import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axiosInstance from "../api/axiosInstance";

const UserForm = ({ onSubmitSuccess }) => {
  const [user, setUser] = useState({
    nombre: "",
    email: "",
    rol: "",
    pais: "",
    plataforma: "",
    status: true,
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/users", user, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      onSubmitSuccess();
    } catch (error) {
      console.error("Error al guardar usuario:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Nombre"
        name="nombre"
        value={user.nombre}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Correo Electrónico"
        name="email"
        value={user.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Rol"
        name="rol"
        value={user.rol}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="País"
        name="pais"
        value={user.pais}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Plataforma"
        name="plataforma"
        value={user.plataforma}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Guardar Usuario
      </Button>
    </Box>
  );
};

export default UserForm;
