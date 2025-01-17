from pydantic import BaseModel
from typing import Optional

# Esquemas para Usuarios
class UserBase(BaseModel):
    nombre: str
    email: str
    rol: str
    pais: str
    plataforma: str
    status: Optional[bool] = True

class UserCreate(UserBase):
    pass

class UserUpdate(UserBase):
    pass

class UserResponse(UserBase):
    id: int

    class Config:
        orm_mode = True

# Esquemas para Productos
class ProductBase(BaseModel):
    nombre: str
    tipo: str
    sku: str
    modelo: str
    status: Optional[bool] = True
    fabricante: str
    categoria: str

class ProductCreate(ProductBase):
    pass

class ProductUpdate(ProductBase):
    pass

class ProductResponse(ProductBase):
    id: int

    class Config:
        orm_mode = True
