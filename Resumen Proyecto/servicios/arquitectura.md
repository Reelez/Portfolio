# Arquitectura de Servicios

Directorio: `api/services/`

## Patrón de Diseño

Las vistas (`views.py`) son delgadas: validan la request, delegan al service, y retornan Response. Toda la lógica de negocio, queries y cálculos viven en la capa de servicios.

```python
# Ejemplo en views.py
@api_view(['POST'])
def registro_usuario(request):
    usuario = usuario_service.registrar_usuario(request.data)
    serializer = UsuarioSerializer(usuario)
    return Response(serializer.data, status=status.HTTP_201_CREATED)
```

## Servicios Disponibles

### `usuario_service.py` (~57 líneas)
- `registrar_usuario(data)` — crea usuario hasheando contraseña
- `obtener_usuario(id)` — busca por ID
- `autenticar_usuario(email, contraseña)` — valida credenciales y genera JWT

### `sendero_service.py` (~16 líneas)
- `obtener_sendero(id)` — busca sendero por ID
- `listar_todos_los_senderos()` — retorna todos los senderos

### `foto_sendero_service.py` (~16 líneas)
- `obtener_foto_sendero(id)` — foto de sendero por ID de sendero
- `obtener_todas_fotos_sendero()` — lista todas las fotos

### `comentario_service.py` (~14 líneas)
- Operaciones CRUD de comentarios vinculados a sendero + usuario

### `valoracion_service.py` (~20 líneas)
- `calcular_promedio(sendero_id)` — promedio de valoraciones
- `distribucion_valoraciones(sendero_id)` — conteo por estrella (1-5)

### `encuesta_service.py` (~16 líneas)
- `registrar_encuesta(data)` — crea encuesta vinculada a una visita

### `dashboard_service.py` (~280 líneas) ← más grande
- `visitas_recientes()` — últimas 50 visitas con datos del visitante
- `visitantes_hoy()` — conteo de visitas del día actual
- `encuestas_hoy()` — encuestas del día
- `visitantes_por_pais()` — agrupación por nacionalidad (desencripta PII)
- `visitantes_por_sendero()` — popularidad de senderos

### `reporte_excel.py` (~346 líneas) ← más largo
- `generar_reporte_completo()` — crea workbook con múltiples hojas
- Optimizado para datasets grandes (+10,000 filas)
- Retorna `HttpResponse` con el archivo `.xlsx` para descarga directa

## Importación en `views.py`

```python
from .services import (
    usuario_service, sendero_service, foto_sendero_service,
    dashboard_service, comentario_service, valoracion_service, encuesta_service
)
from .services.reporte_excel import generar_reporte_completo
```
