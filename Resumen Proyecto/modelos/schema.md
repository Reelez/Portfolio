# Esquema de Base de Datos

Archivo fuente: `api/models.py`
Motor: MySQL via `mysql.connector.django`

## Diagrama de Relaciones

```
Visitante ──────────────── RegistroVisita ──── Encuesta
  (cedula_pasaporte)         (FK: visitante)    (FK: visita)
                             (FK: sendero_visitado [texto])

Sendero ─────────────────── SenderoFoto (OneToOne)
  │
  └──── Comentario ─────────── Usuario
          (FK: sendero)         (FK: usuario)
          (valoracion 1-5)
```

## Modelos

### `Visitante`
| Campo | Tipo | Notas |
|---|---|---|
| `id` | BigAutoField | PK automático |
| `cedula_pasaporte` | CharField(255) | **unique**, no encriptado (clave de búsqueda) |
| `nombre_visitante` | CampoEncriptado | Fernet encryption |
| `nacionalidad` | CampoEncriptado | Fernet encryption |
| `adulto_nino` | CharField(255) | "adulto" o "nino" |
| `telefono` | CampoEncriptado | Fernet encryption |
| `genero` | CharField(255) | |

### `Sendero`
| Campo | Tipo | Notas |
|---|---|---|
| `id` | BigAutoField | PK |
| `nombre_sendero` | CharField(50) | |
| `distancia` | DecimalField(6,2) | En kilómetros |
| `dificultad` | CharField(50) | Ej: "fácil", "moderado", "difícil" |

### `SenderoFoto`
| Campo | Tipo | Notas |
|---|---|---|
| `id_sendero` | OneToOneField(Sendero) | PK y FK, CASCADE |
| `ref_foto` | CharField(255) | URL o referencia de la foto |

### `RegistroVisita`
| Campo | Tipo | Notas |
|---|---|---|
| `id` | BigAutoField | PK |
| `visitante` | FK(Visitante) | CASCADE |
| `razon_visita` | TextField | |
| `sendero_visitado` | TextField | Nombre del sendero (texto libre) |
| `fecha_visita` | DateTimeField | Default: hora actual Panamá |
| `hora_entrada` | TimeField | Default: hora actual Panamá |

### `Encuesta`
| Campo | Tipo | Notas |
|---|---|---|
| `id` | BigAutoField | PK |
| `visita` | FK(RegistroVisita) | CASCADE |
| `formulario` | JSONField | Esquema flexible de preguntas/respuestas |
| `fecha_visita` | DateTimeField | Default: fecha visita + 1 día |

### `Usuario`
| Campo | Tipo | Notas |
|---|---|---|
| `id` | BigAutoField | PK |
| `email` | EmailField | **unique**, NO encriptado |
| `nombre` | CampoEncriptado | Fernet encryption |
| `apellido` | CampoEncriptado | Fernet encryption |
| `contraseña` | CharField(255) | Hasheada con bcrypt |
| `rol` | CharField(5) | `"admin"` o `"user"` |

### `Comentario`
| Campo | Tipo | Notas |
|---|---|---|
| `id` | BigAutoField | PK |
| `usuario` | FK(Usuario) | CASCADE |
| `sendero` | FK(Sendero) | CASCADE |
| `foto_comentario` | URLField(500) | Opcional (blank, null) |
| `comentario` | TextField | |
| `valoracion` | PositiveSmallIntegerField | Rango 1-5 |

## Campo Personalizado: `CampoEncriptado`

Extiende `models.TextField`. Encripta automáticamente al escribir (`get_prep_value`) y desencripta al leer (`from_db_value`) usando Fernet (clave en variable de entorno `CLAVE_ENCRIPTACION`).

**Campos encriptados:** `Visitante.nombre_visitante`, `Visitante.nacionalidad`, `Visitante.telefono`, `Usuario.nombre`, `Usuario.apellido`
