import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Bienvenido al backend de la aplicación"}

def test_get_users():
    response = client.get("/users")
    assert response.status_code == 200
    assert isinstance(response.json(), list)  # Verificar que retorna una lista

def test_create_user():
    payload = {
        "nombre": "Usuario de prueba",
        "email": "prueba@example.com",
        "rol": "Administrador",
        "país": "México",
        "plataforma": "Web",
        "status": True,
    }
    response = client.post("/users", json=payload)
    assert response.status_code == 201
    assert response.json()["email"] == "prueba@example.com"
