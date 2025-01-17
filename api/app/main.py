import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes import user_routes, product_routes

# Configuración de logs
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    handlers=[
        logging.FileHandler("app.log"),  # Logs en archivo
        logging.StreamHandler()  # Logs en consola
    ]
)
logger = logging.getLogger("BackendLogger")

# Instancia de la aplicación
app = FastAPI(
    title="Sistema de Administración de Usuarios y Productos",
    description="API REST para gestionar usuarios y productos.",
    version="1.0.0",
)

# Middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Inclusión de rutas
app.include_router(user_routes.router, prefix="/users", tags=["Users"])
app.include_router(product_routes.router, prefix="/products", tags=["Products"])

# Event handlers
@app.on_event("startup")
async def startup_event():
    logger.info("La aplicación se ha iniciado.")

@app.on_event("shutdown")
async def shutdown_event():
    logger.info("La aplicación se ha detenido.")

# Ejemplo de endpoint con logs
@app.get("/")
async def root():
    logger.info("Endpoint raíz solicitado.")
    return {"message": "Bienvenido al backend de la aplicación"}

