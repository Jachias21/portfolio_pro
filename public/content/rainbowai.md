# Proyecto: Rainbow AI - Plataforma de Predicción Meteorológica

## Reto
El objetivo principal de este proyecto fue diseñar y desarrollar **Rainbow AI**, una plataforma integral de predicción meteorológica impulsada por Inteligencia Artificial y Big Data. El desafío consistió en procesar décadas de datos climáticos históricos para entrenar modelos de aprendizaje automático capaces de predecir con alta precisión variables meteorológicas, calcular la sensación térmica y alertar a los usuarios sobre condiciones extremas de manera automatizada.

Para lograrlo, nos propusimos los siguientes objetivos técnicos y de negocio:
* **Predicción Avanzada:** Superar las limitaciones de los pronósticos tradicionales mediante el uso de algoritmos de Machine Learning.
* **Gestión de Big Data:** Consolidar, limpiar y procesar volúmenes masivos de datos históricos (algunos registros datan de 1950) provenientes de múltiples estaciones meteorológicas.
* **Alertas Tempranas:** Implementar un sistema de notificaciones en tiempo real para mantener informados a los usuarios sobre situaciones de riesgo (como frío extremo o alto índice de calor).
* **Auditoría y Transparencia:** Crear una plataforma donde los usuarios y administradores puedan visualizar de forma transparente el rendimiento y la precisión de los modelos matemáticos.

## Mi Rol y tareas realizadas
Como miembro del equipo de desarrollo, mi trabajo se fundamentó en la aplicación de la metodología CRISP-DM, abarcando todo el ciclo de vida del dato:
* **Ingeniería de Datos (ETL):** Desarrollo de pipelines automáticos en Python para la ingesta y extracción de datos desde fuentes oficiales como AEMET OpenData y la API de Open-Meteo. Posteriormente, diseñé los flujos de transformación y limpieza de datos.
* **Ciencia de Datos y Machine Learning:** Implementación de la arquitectura de modelado dividida en dominios (atmósfera, precipitación y temperatura). Utilicé frameworks como **LightGBM** y **Scikit-learn**, aplicando técnicas de optimización de hiperparámetros mediante **Optuna**.
* **Desarrollo Frontend:** Creación de una aplicación web interactiva utilizando **Streamlit**, construyendo dashboards dinámicos para visualizar métricas, predicciones y herramientas analíticas.
* **Integración de Servicios:** Configuración y programación del sistema de alertas push automatizadas integrado directamente con la **API de Telegram**.

## Explicación del proyecto
**Rainbow AI** es una solución de software altamente modular construida principalmente en Python. El sistema separa eficientemente la lógica de adquisición de datos, el modelado matemático y la interfaz de usuario, garantizando un código escalable y mantenible.

Sus componentes principales son:
1. **Pipelines de Datos Automatizados:** El sistema cuenta con secuencias de comandos dedicadas (ingestión, procesamiento y reportes) que actualizan la base de conocimientos diariamente con lecturas sobre humedad, viento, temperatura y precipitación de diversas estaciones geográficas.
2. **Motor de Inteligencia Artificial:** Se diseñaron múltiples "trainers" específicos para cada variable climática. Estos modelos no solo generan predicciones a corto plazo (One-Step Forecast), sino también proyecciones recursivas a largo plazo (Recursive Forecast). Además, incluye módulos de física matemática para calcular el "Wind Chill" (sensación térmica por viento) y el "Heat Index".
3. **Centro de Control Web:** La interfaz se divide en áreas funcionales:
   * *Rainbow Hunter & Weather Forecast:* Herramientas para la consulta del pronóstico meteorológico detallado.
   * *Model Audit:* Un panel técnico que despliega métricas de evaluación de calidad (ROC-AUC, MAE, R²) y gráficas de rendimiento (matrices de confusión, scatter plots) para certificar la fiabilidad de las predicciones.
4. **Módulo de Notificaciones:** Un bot de Telegram acoplado al backend que cruza las predicciones térmicas con un umbral de riesgo, enviando avisos inmediatos a los usuarios suscritos para prevenir riesgos derivados del clima.

## Resultado
El resultado es una plataforma de inteligencia artificial meteorológica completamente funcional y robusta. Se logró orquestar un ecosistema capaz de digerir de forma eficiente grandes repositorios de información histórica y convertirlos en conocimiento útil y predictivo.

El proyecto destaca por su integración integral (End-to-End): desde la extracción de datos brutos en formato JSON hasta el despliegue de una interfaz visual atractiva y un canal de comunicación directo con el usuario final. Rainbow AI demuestra cómo la aplicación conjunta del Big Data y el Machine Learning puede generar un impacto positivo en la anticipación y prevención de contingencias climáticas.