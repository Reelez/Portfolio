# Endpoints del API

Base URL: `/api/`
Archivo de rutas: `api/urls.py`

## Usuarios

| Método | Ruta | Vista | Descripción |
|---|---|---|---|
| POST | `/api/registro/` | `registro_usuario` | Registrar nuevo usuario |
| GET | `/api/usuario/<id>/` | `obtener_usuario` | Obtener usuario por ID |
| POST | `/api/login/` | `login_usuario` | Login → retorna JWT token |

## Visitantes (ViewSet CRUD completo)

| Método | Ruta | Descripción |
|---|---|---|
| GET | `/api/visitantes/` | Listar todos los visitantes |
| POST | `/api/visitantes/` | Crear visitante |
| GET | `/api/visitantes/<id>/` | Obtener visitante específico |
| PUT | `/api/visitantes/<id>/` | Actualizar visitante |
| PATCH | `/api/visitantes/<id>/` | Actualizar parcialmente |
| DELETE | `/api/visitantes/<id>/` | Eliminar visitante |
| GET | `/api/visitante/cedula/<cedula>/` | Buscar visitante por cédula/pasaporte |

## Registro de Visita

| Método | Ruta | Vista | Descripción |
|---|---|---|---|
| POST | `/api/registrar_visitante_y_visita/` | `registrar_visitante_y_visita` | Registrar visitante nuevo + visita en un solo paso |
| POST | `/api/registro-visita/` | `registrar_visita` | Registrar visita de visitante existente |
| POST | `/api/registrar-visita-id/` | `registrar_visita_por_id` | Registrar visita buscando visitante por ID |

## Senderos

| Método | Ruta | Vista | Descripción |
|---|---|---|---|
| GET | `/api/sendero/<id>/` | `mostrar_sendero` | Obtener sendero por ID |
| GET | `/api/senderos/` | `listar_senderos` | Listar todos los senderos |
| GET | `/api/foto-sendero/<id>/` | `mostrar_foto_sendero` | Obtener foto de un sendero |
| GET | `/api/fotos-senderos/` | `listar_fotos_senderos` | Listar todas las fotos |

## Comentarios

| Método | Ruta | Vista | Descripción |
|---|---|---|---|
| POST | `/api/comentarios/agregar/` | `agregar_comentario` | Agregar comentario a un sendero |
| GET | `/api/comentarios/sendero/<id>/` | `comentarios_por_sendero` | Listar comentarios de un sendero |

## Valoraciones

| Método | Ruta | Vista | Descripción |
|---|---|---|---|
| GET | `/api/valoracion-promedio/<sendero_id>/` | `valoracion_promedio` | Promedio de valoración del sendero |
| GET | `/api/comentarios/<sendero_id>/valoraciones/` | `valoraciones_por_sendero` | Distribución de valoraciones (1-5) |

## Encuestas

| Método | Ruta | Vista | Descripción |
|---|---|---|---|
| POST | `/api/encuestas/registrar/` | `registrar_encuesta_view` | Registrar encuesta post-visita |

## Dashboard

| Método | Ruta | Vista | Descripción |
|---|---|---|---|
| GET | `/api/dashboard/visitas-recientes/` | `visitas_recientes` | Últimas 50 visitas con detalle completo |
| GET | `/api/dashboard/visitantes-hoy/` | `visitantes_hoy` | Conteo de visitantes del día |
| GET | `/api/dashboard/encuestas-hoy/` | `encuestas_hoy` | Encuestas completadas hoy |
| GET | `/api/dashboard/visitantes-por-pais/` | `visitantes_por_pais` | Visitantes agrupados por nacionalidad |
| GET | `/api/dashboard/visitantes-por-sendero/` | `visitantes_por_sendero` | Popularidad por sendero |
| GET | `/api/reporte-excel/` | `reporte_excel` | Descargar reporte Excel completo (.xlsx) |

## Total: 27 endpoints
