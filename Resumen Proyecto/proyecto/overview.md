# Visión General del Proyecto

## Propósito

Sistema backend para el **Parque Nacional Camino de Cruces (Panamá)**. Permite registrar visitantes con datos encriptados, gestionar senderos, recolectar encuestas de satisfacción, administrar comentarios/valoraciones y generar reportes estadísticos para el personal del parque.

## Arquitectura en Capas

```
HTTP Request
    ↓
urls.py          ← enrutamiento
    ↓
views.py         ← recibe request, llama al service, retorna Response
    ↓
services/        ← lógica de negocio (queries, cálculos, validaciones)
    ↓
models.py        ← ORM Django → MySQL
```

## Módulos Principales

| Módulo | Descripción |
|---|---|
| **Visitantes** | Registro con PII encriptado (nombre, nacionalidad, teléfono) |
| **Senderos** | CRUD de rutas del parque con fotos |
| **Registro de Visita** | Vincula visitante + sendero + fecha/hora (zona Panamá) |
| **Encuestas** | Formulario JSON flexible post-visita |
| **Comentarios** | Comentarios con foto opcional + valoración 1-5 estrellas |
| **Valoraciones** | Promedio y distribución de valoraciones por sendero |
| **Dashboard** | Estadísticas en tiempo real para el panel de administración |
| **Reporte Excel** | Exportación completa de datos en .xlsx (múltiples hojas) |

## Usuarios del Sistema

- **admin** — acceso completo, puede ver reportes y gestionar datos
- **user** — acceso básico, puede agregar comentarios y ver senderos

## Documentación Existente

La carpeta `docs/` contiene markdown detallado por módulo:
- `docs/dashboard.md`, `docs/registro_visita.md`, `docs/usuarios.md`
- `docs/senderos.md`, `docs/encuestas.md`, `docs/comentarios.md`, `docs/valoraciones.md`
