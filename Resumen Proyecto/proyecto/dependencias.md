# Dependencias del Proyecto

Archivo fuente: `requirements.txt`

## Core

| Librería | Versión | Rol |
|---|---|---|
| `Django` | 5.2.4 | Framework web principal |
| `djangorestframework` | 3.16.0 | API REST (serializers, viewsets, decorators) |
| `asgiref` | 3.9.1 | Soporte ASGI/WSGI, requerido por Django |

## Base de Datos

| Librería | Versión | Rol |
|---|---|---|
| `mysql-connector-python` | 8.4.0 | Driver MySQL para Django (`mysql.connector.django`) |
| `sqlparse` | 0.5.3 | Parsing SQL, dependencia interna de Django |

## Autenticación y Seguridad

| Librería | Versión | Rol |
|---|---|---|
| `djangorestframework_simplejwt` | 5.5.1 | Generación y validación de tokens JWT |
| `PyJWT` | 2.10.1 | Manejo de JWT a bajo nivel |
| `cryptography` | 45.0.5 | Encriptación Fernet para campos PII en BD |
| `cffi` | 1.17.1 | Dependencia de `cryptography` |
| `pycparser` | 2.22 | Dependencia de `cffi` |

## Configuración y Entorno

| Librería | Versión | Rol |
|---|---|---|
| `python-decouple` | 3.8 | Lee variables desde `.env` con `config('VAR')` |

## Tiempo y Zona Horaria

| Librería | Versión | Rol |
|---|---|---|
| `pytz` | 2025.2 | Manejo de zona horaria America/Panama |
| `tzdata` | 2025.2 | Base de datos de zonas horarias |

## Archivos y Medios

| Librería | Versión | Rol |
|---|---|---|
| `Pillow` | 11.3.0 | Procesamiento de imágenes (fotos de senderos) |
| `openpyxl` | 3.1.5 | Generación de archivos Excel (.xlsx) para reportes |

## Producción

| Librería | Versión | Rol |
|---|---|---|
| `gunicorn` | 21.2.0 | Servidor WSGI para producción (Railway/Heroku) |
