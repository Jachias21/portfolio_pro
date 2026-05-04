# Proyecto: SoundWave - Sistema de Recomendación Musical Basado en Emociones

## El Reto
El objetivo principal fue desarrollar **SoundWave**, una plataforma de streaming y recomendación musical diseñada para combatir la **sobrecarga de información** que sufren los usuarios en las plataformas convencionales[cite: 8]. El reto consistió en crear un ecosistema de **Big Data e Inteligencia Artificial** capaz de gestionar un catálogo masivo y ofrecer recomendaciones hiper-personalizadas[cite: 8]. 

Para lograrlo, establecimos los siguientes objetivos:
* **Retención y Engagement:** Aumentar el tiempo de permanencia en la plataforma mediante la entrega de recomendaciones novedosas y **emocionalmente alineadas** con el estado de ánimo del usuario[cite: 8].
* **Arquitectura Escalable y de Alta Disponibilidad:** Diseñar un sistema distribuido capaz de soportar operaciones masivas sobre más de **1.2 millones de registros musicales**, implementando estrategias de redundancia[cite: 8].
* **Motores Híbridos:** Implementar algoritmos de recomendación avanzados para solucionar problemas técnicos complejos, como el **arranque en frío (Cold-Start)** en usuarios nuevos[cite: 8].

## Mi Rol y tareas realizadas
Como parte fundamental del equipo de desarrollo, mis responsabilidades abarcaron todo el ciclo de vida del dato, desde su extracción hasta su despliegue en la interfaz:
* **Ingeniería de Datos (ETL):** Ante las restricciones de la API de Spotify, me encargué de la ingesta y limpieza de un dataset alternativo de **Kaggle (Spotify 1.2M+ Songs)**[cite: 8]. Desarrollé scripts para clasificar las canciones mediante una **variable heurística de "Emoción"** y enriquecí el catálogo integrando la **API de Deezer** para la popularidad y modelos de **NLP (Procesamiento de Lenguaje Natural)** para la detección de idiomas mediante web scraping[cite: 8].
* **Inteligencia Artificial y Modelado:** Participé en el diseño del sistema de recomendación híbrido[cite: 8]. Entrené modelos de Deep Learning basados en **Neural Collaborative Filtering (NCF)** usando **PyTorch**, y algoritmos de grafos como **Node2Vec**[cite: 8].
* **Desarrollo Full-Stack y MLOps:** Construcción del backend asíncrono y de alto rendimiento utilizando **FastAPI**, y desarrollo de una Single Page Application (SPA) interactiva con **Angular 21**[cite: 8]. Para reducir la latencia, optimicé la inferencia exportando los modelos de IA al estándar industrial **ONNX**[cite: 8].

## Explicación del proyecto
**SoundWave** opera bajo un modelo de **microservicios desacoplados** que separa claramente el frontend, el backend, el motor analítico y la persistencia de datos[cite: 8]. 

Sus pilares tecnológicos y lógicos son:
* **Base de Datos y Caché:** Utiliza **MongoDB** (NoSQL) para almacenar los metadatos[cite: 8]. Para evitar cuellos de botella en la lectura de datos (I/O Bound), el backend carga el catálogo completo en la **memoria RAM** al arrancar, garantizando respuestas en milisegundos durante la inferencia[cite: 8].
* **Pipeline de Procesamiento:** Los datos crudos se transforman en un **vector de características de 21 dimensiones**[cite: 8]. Se aplicaron técnicas de escalado continuo (MinMaxScaler) y codificación binaria (One-Hot Encoding) para que la IA comprendiera equitativamente variables acústicas (como el tempo o la energía) y variables categóricas (como el idioma)[cite: 8].
* **Motor de Recomendación (Graceful Degradation):** El sistema es tolerante a fallos mediante una estrategia en cascada[cite: 8]. Si el modelo principal **NCF** no encuentra patrones, el sistema delega silenciosamente en el motor de grafos **Node2Vec**[cite: 8]. Si este también falla, se ejecuta un cálculo algebraico de **Similitud del Coseno** cruzado con un **filtro emocional**, garantizando que el usuario siempre reciba una lista de reproducción sin tiempos de inactividad[cite: 8].

## Resultado
El resultado es un **prototipo funcional, resiliente y de alto rendimiento**[cite: 8]. Se logró desplegar una arquitectura **Full-Stack MLOps** completa, contenerizada con **Docker**, que procesa de manera eficiente un catálogo a escala industrial[cite: 8].

Gracias a la optimización de los modelos a formato **ONNX** y al diseño de la base de datos, el sistema superó con éxito los cuellos de botella computacionales[cite: 8]. La plataforma demostró que priorizar la **serendipia y la novedad acústica** mediante un motor híbrido, ofrece una experiencia de usuario inmersiva, superando las limitaciones de los sistemas de recomendación tradicionales y resolviendo eficazmente el problema de los usuarios nuevos[cite: 8].