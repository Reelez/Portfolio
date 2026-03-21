const base = import.meta.env.BASE_URL

export const novaMindDataEs = {
  long_description:
    "EmotionHUB es un sistema inteligente de análisis de clima organizacional enfocado en el bienestar laboral. Procesa retroalimentación anónima de empleados usando modelos transformer optimizados para español, detectando emociones, cuantificando estrés y categorizando problemas en 14 dominios organizacionales. Más allá del análisis de sentimientos genérico, un agente de IA autónomo descubre 'bloqueos organizacionales' — razones estructurales por las que los problemas persisten, como supervisores inaccesibles, procesos rotos, recursos no entregados y problemas culturales sistémicos. El sistema está diseñado para equipos de RRHH con el objetivo de generar insights semanales accionables.",

  architecture:
    "Arquitectura en capas basada en Python con FastAPI gestionando todos los endpoints REST y dos interfaces Streamlit: un portal de envío anónimo para empleados y un panel de análisis de RRHH con autenticación. El pipeline de NLP utiliza HuggingFace Transformers para detección de emociones, cuantificación de estrés y clasificación zero-shot en 14 dominios organizacionales. MySQL con SQLAlchemy ORM almacena respuestas, conversaciones e insights generados. El agente autónomo activa sondeo conversacional profundo cuando los comentarios iniciales muestran alto estrés o patrones críticos — fallos de liderazgo, falta de recursos, disfunción de procesos o barreras culturales.",

  images: [
    `${base}img/projectNovaMind/stats%201.webp`,
    `${base}img/projectNovaMind/stats%202.webp`,
    `${base}img/projectNovaMind/stats%203.webp`,
  ],
}
