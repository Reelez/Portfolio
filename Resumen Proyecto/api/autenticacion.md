# Autenticación y Roles

## Tecnología

- **JWT** via `djangorestframework-simplejwt`
- **Expiración del token:** 1 día (`ACCESS_TOKEN_LIFETIME = timedelta(days=1)`)
- **Header:** `Authorization: Bearer <token>`
- Configurado en `parque_api/settings.py`

## Flujo de Autenticación

```
1. POST /api/login/
   Body: { "email": "...", "contraseña": "..." }

2. El servidor valida email + contraseña (con check_password del hash bcrypt)
   Implementado en: api/services/usuario_service.py → autenticar_usuario()

3. Respuesta exitosa:
   {
     "access": "<JWT token>",
     "usuario": { "id": 1, "email": "...", "rol": "admin" }
   }

4. Para rutas protegidas:
   Header: Authorization: Bearer <JWT token>
```

## Roles

| Rol | Valor en BD | Descripción |
|---|---|---|
| Administrador | `"admin"` | Acceso completo al sistema |
| Usuario | `"user"` | Acceso básico (default al registrarse) |

Definido como `TextChoices` en el modelo `Usuario`:
```python
class Rol(models.TextChoices):
    ADMIN = "admin", "Administrador"
    USER = "user", "Usuario"
```

## Registro de Usuarios

```
POST /api/registro/
Body: { "email": "...", "nombre": "...", "apellido": "...", "contraseña": "..." }
```

- La contraseña se hashea con `make_password()` de Django (bcrypt)
- El email **no** está encriptado (por razones de rendimiento en login)
- Nombre y apellido sí están encriptados con Fernet en la BD

## Nota sobre Modelos de Usuario

El proyecto usa un modelo `Usuario` **propio** (en `api/models.py`), **no** el `AbstractUser` de Django. Esto significa que el sistema de autenticación del admin de Django es independiente.
