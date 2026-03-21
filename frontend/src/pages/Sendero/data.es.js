const base = import.meta.env.BASE_URL

export const senderoDataEs = {
  long_description:
    "Sistema backend construido para el Parque Nacional Camino de Cruces de Panamá. El sistema gestiona el registro de visitantes con PII cifrada mediante Fernet (nombre, nacionalidad, número de teléfono), CRUD completo de senderos con carga de fotos, formularios flexibles de encuesta post-visita, comentarios con calificación por estrellas y fotos opcionales, estadísticas en tiempo real para administradores del parque y un generador de reportes Excel optimizado capaz de manejar grandes volúmenes de datos (+10,000 filas) en múltiples hojas.",

  architecture:
    "Arquitectura en capas con Django REST Framework. Las solicitudes HTTP fluyen a través de urls.py → views.py (capa delgada: valida la solicitud, delega al servicio, retorna Response) → services/ (toda la lógica de negocio, consultas y cálculos) → models.py (Django ORM → MySQL). Servicios clave: gestión de visitantes, manejo de senderos, procesamiento de encuestas, sistema de comentarios y calificaciones, estadísticas del dashboard en tiempo real y generación de reportes Excel. La autenticación utiliza tokens JWT mediante djangorestframework-simplejwt.",

  images: [
    `${base}img/projectSendero/Sendero.png`,
    `${base}img/projectSendero/Inicio.png`,
    `${base}img/projectSendero/Sign in.png`,
    `${base}img/projectSendero/Registro de visitantes.png`,
    `${base}img/projectSendero/Admin Encuestas.png`,
  ],
}
