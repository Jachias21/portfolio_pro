// ─── Extended project metadata ────────────────────────────────────────────────

export const PROJECT_DETAILS: Record<number, {
  year: string;
  role: string;
  timeline: string;
  client: string;
  longDesc: string;
  features: { title: string; desc: string; icon: string }[];
  images: string[];
  accentColor: string;
}> = {
  1: {
    year: '2025',
    role: 'Lead Mobile Engineer',
    timeline: '4 meses',
    client: 'Proyecto Académico',
    longDesc: 'Aplicación nativa Android que recrea la experiencia de un casino de lujo con Ruleta y Blackjack en tiempo real. Arquitectura MVVM con Spring Boot como backend para gestión de sesiones y transacciones. UI con animaciones físicas y sistema de fondos dinámico.',
    features: [
      { title: 'Arquitectura MVVM', desc: 'Capa de datos desacoplada de la UI para máxima testabilidad y mantenibilidad.', icon: '⬡' },
      { title: 'Backend Spring Boot', desc: 'API REST con Spring Security y gestión de sesiones de juego en tiempo real.', icon: '⬡' },
    ],
    images: [
      'https://picsum.photos/seed/casino1/800/500',
      'https://picsum.photos/seed/casino2/400/300',
    ],
    accentColor: '#5b7fff',
  },
  2: {
    year: '2025',
    role: 'AI & Data Engineer',
    timeline: '3 meses',
    client: 'Proyecto Académico IA',
    longDesc: 'Sistema inteligente de logística para productos perecederos que optimiza rutas de reparto usando algoritmos de IA. Predicción de demanda, optimización de rutas y dashboard en tiempo real con Streamlit.',
    features: [
      { title: 'Optimización de rutas', desc: 'Algoritmos de búsqueda heurística para minimizar tiempos y costes logísticos.', icon: '⬡' },
      { title: 'Predicción de demanda', desc: 'Modelos de regresión entrenados sobre histórico de ventas para forecast de stock.', icon: '⬡' },
    ],
    images: [
      '/images/aidelivery/aidelivery1.png',
      '/images/aidelivery/aidelivery2.png',
    ],
    accentColor: '#34d399',
  },
  3: {
    year: '2025',
    role: 'Data Scientist & Developer',
    timeline: '2 meses',
    client: 'Proyecto Académico IA',
    longDesc: 'Plataforma meteorológica que combina datos climáticos históricos y actuales para predecir la probabilidad de avistamiento de arcoíris. Análisis de variables como humedad, lluvia reciente y ángulo solar.',
    features: [
      { title: 'Modelo predictivo', desc: 'Clasificador entrenado con datos AEMET para estimar probabilidad por zona y hora.', icon: '⬡' },
      { title: 'Dashboard interactivo', desc: 'Interfaz Streamlit con mapas de calor y series temporales de datos climáticos.', icon: '⬡' },
    ],
    images: [
      '/images/rainbowai/LOGO_RainbowAI.png',
      '/images/rainbowai/rainbow2.png',
    ],
    accentColor: '#a78bfa',
  },
  4: {
    year: '2026',
    role: 'Full Stack & ML Engineer',
    timeline: '3 meses',
    client: 'Proyecto Académico IA',
    longDesc: 'Sistema de recomendación musical basado en estado de ánimo. El usuario selecciona su estado emocional y el sistema sugiere canciones usando PyTorch y la Spotify API. Frontend Angular con visualizaciones de audio.',
    features: [
      { title: 'Modelo de emociones', desc: 'Red neuronal PyTorch que clasifica el estado de ánimo y mapea a géneros musicales.', icon: '⬡' },
      { title: 'Integración Spotify', desc: 'OAuth 2.0 con Spotify API para crear playlists dinámicas personalizadas.', icon: '⬡' },
    ],
    images: [
      '/images/soundwave/soundwave1.png',
      '/images/soundwave/soundwave2.png',
    ],
    accentColor: '#fb923c',
  },
  5: {
    year: '2026',
    role: 'AI & Computer Vision Engineer',
    timeline: '2 meses',
    client: 'Proyecto Académico IA',
    longDesc: 'Sistema de diagnóstico asistido por IA para detección de cáncer de colon a partir de imágenes histológicas. Red neuronal convolucional con TensorFlow/Keras entrenada sobre dataset público de biopsias.',
    features: [
      { title: 'CNN de diagnóstico', desc: 'Arquitectura ResNet fine-tuned para clasificación binaria de tejido canceroso.', icon: '⬡' },
      { title: 'Métricas médicas', desc: 'Precisión >90% con análisis de falsos negativos optimizado para uso clínico.', icon: '⬡' },
    ],
    images: [
      'https://picsum.photos/seed/aicolon1/800/500',
      'https://picsum.photos/seed/aicolon2/400/300',
    ],
    accentColor: '#f472b6',
  },
};

export const PROJECT_EMOJIS: Record<number, string> = {
  1: '🎰',
  2: '🚚',
  3: '🌈',
  4: '🎵',
  5: '🔬',
};
