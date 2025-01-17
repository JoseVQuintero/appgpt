from sqlalchemy import Column, Integer, String, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from .database import Base

# Modelo de Usuario
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, index=True)
    email = Column(String, unique=True, index=True)
    rol = Column(String)
    pais = Column(String)
    plataforma = Column(String)
    status = Column(Boolean, default=True)

# Modelo de Producto
class Product(Base):
    __tablename__ = "products"

    id = Column(Integer, primary_key=True, index=True)
    nombre = Column(String, index=True)
    tipo = Column(String)
    sku = Column(String, unique=True, index=True)
    modelo = Column(String)
    status = Column(Boolean, default=True)
    fabricante = Column(String)
    categoria = Column(String)
