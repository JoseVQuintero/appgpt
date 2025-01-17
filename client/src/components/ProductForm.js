import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import axiosInstance from "../api/axiosInstance";

const ProductForm = ({ onSubmitSuccess }) => {
  const [product, setProduct] = useState({
    nombre: "",
    tipo: "",
    sku: "",
    modelo: "",
    status: true,
    fabricante: "",
    categoría: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/products", product, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      onSubmitSuccess();
    } catch (error) {
      console.error("Error al guardar producto:", error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
      <TextField
        label="Nombre"
        name="nombre"
        value={product.nombre}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Tipo"
        name="tipo"
        value={product.tipo}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="SKU"
        name="sku"
        value={product.sku}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Modelo"
        name="modelo"
        value={product.modelo}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Fabricante"
        name="fabricante"
        value={product.fabricante}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Categoría"
        name="categoría"
        value={product.categoría}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Guardar Producto
      </Button>
    </Box>
  );
};

export default ProductForm;
