# appgpt.

Prompt para la Aplicación Web

Título: Sistema de Administración de Usuarios y Productos

Descripción General:
Desarrollar una aplicación web basada en React para el frontend, utilizando Material-UI (MUI) como biblioteca de diseño, y Python para el backend. El backend expondrá una API REST desarrollada con frameworks como FastAPI o Flask. La base de datos será PostgreSQL, que almacenará los datos de usuarios y productos.

La aplicación tendrá las siguientes funcionalidades:

    Login de Usuario
        Autenticación basada en tokens (por ejemplo, JWT).
        Validación de credenciales y manejo de sesiones.

    Dashboard
        Una interfaz principal con un diseño limpio y moderno.
        Dos opciones principales en el menú:
            Administración de Usuarios.
            Administración de Productos.

    Administración de Usuarios
        Un formulario para registrar y actualizar datos de usuarios:
            Campos: nombre, email, rol (Administrador, Usuario Regular), país, plataforma, status (Activo/Inactivo).
        Listado de usuarios con opciones de editar y eliminar.
        Paginación y búsqueda.

    Administración de Productos
        Un formulario para registrar y actualizar datos de productos:
            Campos: nombre, tipo, sku, modelo, status (Disponible/No Disponible), fabricante, categoría.
        Listado de productos con opciones de editar y eliminar.
        Paginación y búsqueda.

Requisitos Técnicos:
Frontend:

    Framework: React.js
    Librerías:
        Material-UI (MUI) para componentes y diseño.
        React Router para navegación.
        Axios o Fetch para comunicación con la API.
    Arquitectura:
        Componentes reutilizables para formularios, tablas y modal dialogs.
        Gestión de estado: React Context o Redux.
    Características:
        Validación de formularios (utilizando React Hook Form o Formik).
        Diseño responsivo y accesible.

Backend:

    Lenguaje: Python
    Framework: FastAPI o Flask.
    Base de datos: PostgreSQL.
    ORM: SQLAlchemy o Tortoise ORM para interactuar con la base de datos.
    Endpoints REST:
        Usuarios:
            GET /users: Obtener lista de usuarios.
            POST /users: Crear un nuevo usuario.
            PUT /users/{id}: Actualizar un usuario existente.
            DELETE /users/{id}: Eliminar un usuario.
        Productos:
            GET /products: Obtener lista de productos.
            POST /products: Crear un nuevo producto.
            PUT /products/{id}: Actualizar un producto existente.
            DELETE /products/{id}: Eliminar un producto.
    Seguridad:
        Autenticación con JWT.
        Middleware para autorización y protección de rutas.

Base de Datos:

    Esquema para usuarios:
        id (Primary Key).
        nombre (String).
        email (Unique, String).
        rol (Enum: Administrador, Usuario Regular).
        país (String).
        plataforma (String).
        status (Boolean).
    Esquema para productos:
        id (Primary Key).
        nombre (String).
        tipo (String).
        sku (Unique, String).
        modelo (String).
        status (Boolean).
        fabricante (String).
        categoría (String).

Interacción Frontend-Backend:

    El frontend se conectará al backend mediante llamadas API REST usando Axios o Fetch.
    Las respuestas del backend incluirán paginación para listas largas de datos.

Extras:

    Logs para el monitoreo del backend.
    Unit tests para asegurar la calidad del código.
    Dockerización de toda la aplicación para facilitar el despliegue.
    Documentación de la API generada automáticamente (si se usa FastAPI).