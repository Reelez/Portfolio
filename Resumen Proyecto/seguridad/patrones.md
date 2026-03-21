# Seguridad y Protección de Datos

## Encriptación de PII (Datos Personales)

**Librería:** `cryptography` (Fernet — encriptación simétrica AES-128)

### Implementación
Definida en `api/models.py` como campo personalizado `CampoEncriptado`:

```python
class CampoEncriptado(models.TextField):
    def get_prep_value(self, value):   # Encripta antes de guardar en BD
        return encriptar(value)

    def from_db_value(self, value, expression, connection):  # Desencripta al leer
        return desencriptar(value)
```

La clave Fernet se carga desde la variable de entorno `CLAVE_ENCRIPTACION`.

### Campos Encriptados en BD

| Modelo | Campo |
|---|---|
| `Visitante` | `nombre_visitante`, `nacionalidad`, `telefono` |
| `Usuario` | `nombre`, `apellido` |

### Campos NO encriptados (por diseño)

| Modelo | Campo | Razón |
|---|---|---|
| `Visitante` | `cedula_pasaporte` | Necesita ser único y buscable |
| `Usuario` | `email` | Necesario para login eficiente sin cargar tabla completa |

## Hashing de Contraseñas

- **Función:** `make_password()` de Django (bcrypt internamente)
- **Verificación:** `check_password(plain, hashed)`
- Implementado en `api/services/usuario_service.py`

## Autenticación JWT

- **Librería:** `djangorestframework-simplejwt`
- **Tipo de header:** `Bearer`
- **Expiración:** 1 día
- Configurado en `parque_api/settings.py`:
  ```python
  SIMPLE_JWT = {
      "ACCESS_TOKEN_LIFETIME": timedelta(days=1),
      "AUTH_HEADER_TYPES": ("Bearer",),
  }
  ```

## Variables de Entorno Sensibles

Gestionadas con `python-decouple` desde archivo `.env`:

| Variable | Descripción |
|---|---|
| `SECRET_KEY` | Clave secreta de Django |
| `DEBUG` | Modo debug (False en producción) |
| `CLAVE_ENCRIPTACION` | Clave Fernet para campos PII |
| `DB_NAME` | Nombre de la base de datos MySQL |
| `DB_USER` | Usuario MySQL |
| `DB_PASSWORD` | Contraseña MySQL |
| `DB_HOST` | Host MySQL (default: localhost) |
| `DB_PORT` | Puerto MySQL (default: 3306) |
| `ALLOWED_HOST` | Hosts permitidos (separados por coma) |

## Consideraciones

- El archivo `.env` **no debe** incluirse en el repositorio (está en `.gitignore`)
- La clave Fernet debe generarse una sola vez y mantenerse consistente; cambiarla invalida todos los datos encriptados en la BD
- Los datos del dashboard desencriptan PII en memoria (en Python), nunca en SQL
