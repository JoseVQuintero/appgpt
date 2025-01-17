import React, { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import DataTable from "../components/DataTable";
import UserForm from "../components/UserForm";
import axiosInstance from "../api/axiosInstance";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchUsers = async () => {
    try {
      const response = await axiosInstance.get("/users", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setUsers(response.data);
    } catch (error) {
      console.error("Error al cargar usuarios:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleFormSubmit = () => {
    setShowForm(false);
    fetchUsers();
  };

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Administración de Usuarios
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Cerrar Formulario" : "Agregar Usuario"}
      </Button>
      {showForm && <UserForm onSubmitSuccess={handleFormSubmit} />}
      <DataTable
        data={users}
        columns={["nombre", "email", "rol", "país", "plataforma", "status"]}
      />
    </Box>
  );
};

export default UsersPage;
