const base = import.meta.env.BASE_URL

export const novaMindData = {
  long_description:
    "EmotionHUB is an intelligent organizational climate analysis system built for workplace wellness. It processes anonymous employee feedback using Spanish-optimized transformer models to detect emotions, quantify stress, and categorize problems across 14 organizational domains. Beyond generic sentiment analysis, an autonomous AI agent uncovers 'organizational blockages' — structural reasons why problems persist, such as inaccessible supervisors, broken processes, undelivered resources, and systemic cultural issues. The system targets HR departments to generate actionable weekly insights and drive meaningful organizational change.",

  architecture:
    "Python-based layered architecture with FastAPI handling all REST endpoints and two Streamlit interfaces: a public anonymous submission portal for employees and a secured HR analytics dashboard. The NLP pipeline uses HuggingFace Transformers for emotion detection, stress quantification, and zero-shot problem classification across 14 organizational domains. MySQL with SQLAlchemy ORM stores responses, conversations, and generated insights. The autonomous agent activates deeper conversational probing when initial comments show high stress or critical patterns — leadership failure, resource shortfalls, process dysfunction, or cultural barriers.",

  images: [
    `${base}img/projectNovaMind/stats%201.webp`,
    `${base}img/projectNovaMind/stats%202.webp`,
    `${base}img/projectNovaMind/stats%203.webp`,
  ],
}
