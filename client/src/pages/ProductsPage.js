import React, { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import DataTable from "../components/DataTable";
import ProductForm from "../components/ProductForm";
import axiosInstance from "../api/axiosInstance";

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchProducts = async () => {
    try {
      const response = await axiosInstance.get("/products", {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Error al cargar productos:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleFormSubmit = () => {
    setShowForm(false);
    fetchProducts();
  };

  return (
    <Box p={2}>
      <Typography variant="h4" gutterBottom>
        Administración de Productos
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? "Cerrar Formulario" : "Agregar Producto"}
      </Button>
      {showForm && <ProductForm onSubmitSuccess={handleFormSubmit} />}
      <DataTable
        data={products}
        columns={[
          "nombre",
          "tipo",
          "sku",
          "modelo",
          "status",
          "fabricante",
          "categoría",
        ]}
      />
    </Box>
  );
};

export default ProductsPage;
