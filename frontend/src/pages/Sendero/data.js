const base = import.meta.env.BASE_URL

export const senderoData = {
  long_description:
    "Backend system built for Panama's National Park Camino de Cruces. The system manages visitor registration with Fernet-encrypted PII (name, nationality, phone number), full CRUD for trails with photo uploads, flexible post-visit survey forms, star-rated comments with optional photos, real-time dashboard statistics for park administrators, and an optimized Excel report generator capable of handling large datasets (+10,000 rows) across multiple sheets.",

  architecture:
    "Layered Django REST Framework architecture. HTTP requests flow through urls.py → views.py (thin layer: validates request, delegates to service, returns Response) → services/ (all business logic, queries, and calculations) → models.py (Django ORM → MySQL). Key services: visitor management, trail handling, survey processing, comment/rating system, real-time dashboard stats, and Excel report generation. Authentication uses JWT tokens via djangorestframework-simplejwt.",

  images: [
    `${base}img/projectSendero/Sendero.png`,
    `${base}img/projectSendero/Inicio.png`,
    `${base}img/projectSendero/Sign in.png`,
    `${base}img/projectSendero/Registro de visitantes.png`,
    `${base}img/projectSendero/Admin Encuestas.png`,
  ],
}
