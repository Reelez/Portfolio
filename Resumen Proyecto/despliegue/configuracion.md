# Configuración y Despliegue

## Archivo `.env` Requerido

Crear en la raíz del proyecto (nunca en el repo):

```env
SECRET_KEY=<clave-django-aleatoria>
DEBUG=True

CLAVE_ENCRIPTACION=<clave-fernet-base64>

DB_NAME=nombre_base_datos
DB_USER=usuario_mysql
DB_PASSWORD=contrasena_mysql
DB_HOST=localhost
DB_PORT=3306

ALLOWED_HOST=localhost,127.0.0.1
```

### Generar clave Fernet

```python
from cryptography.fernet import Fernet
print(Fernet.generate_key().decode())
```

## Desarrollo Local

```bash
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

El servidor corre en `http://127.0.0.1:8000/`

## Producción (Railway / Heroku)

### `procfile`
```
web: gunicorn parque_api.wsgi --log-file -
```

### Variables de entorno en producción

Las mismas del `.env` pero configuradas como variables del servicio (Railway Dashboard o Heroku Config Vars). En producción:
- `DEBUG=False`
- `ALLOWED_HOST=<dominio-del-servicio>`
- `DB_HOST=<host-del-db-en-la-nube>`

## Configuración Django (`parque_api/settings.py`)

| Setting | Valor |
|---|---|
| `LANGUAGE_CODE` | `es-pa` (español Panamá) |
| `TIME_ZONE` | `America/Panama` |
| `USE_TZ` | `True` |
| `DEFAULT_AUTO_FIELD` | `BigAutoField` |
| `MEDIA_URL` | `/media/` |
| `MEDIA_ROOT` | `BASE_DIR/media/` |

## Migraciones

```bash
# Ver estado de migraciones
python manage.py showmigrations

# Crear nueva migración tras cambiar models.py
python manage.py makemigrations

# Aplicar migraciones
python manage.py migrate
```

Archivos de migración en `api/migrations/` (5 archivos existentes, incluyendo un merge).

## Admin Django

```bash
# Crear superusuario Django (independiente del modelo Usuario del proyecto)
python manage.py createsuperuser
```

Panel admin disponible en `/admin/`
