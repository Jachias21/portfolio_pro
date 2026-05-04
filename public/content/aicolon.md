# Proyecto: AiColon Diagnosis - Detector de Cáncer de Colon mediante IA

## El Reto
El objetivo principal de este proyecto fue diseñar y desarrollar **AiColon Diagnosis**, una solución integral de salud digital (e-Health) orientada a optimizar el flujo de trabajo clínico en la **detección precoz del cáncer colorrectal**[cite: 11]. El reto consistió en crear una herramienta que no buscara sustituir al médico, sino actuar como un **Sistema de Soporte a la Decisión Clínica (CDSS)**, priorizando revisiones y documentando evidencias visuales de manera fiable[cite: 11].

Para lograrlo, nos propusimos los siguientes objetivos técnicos y clínicos:
*   **Triaje Inteligente (Fase 1):** Construir un modelo tabular que respetara la lógica biológica humana, evitando atajos matemáticos mediante el uso de restricciones monotónicas y pesos clínicos[cite: 11].
*   **Análisis de Vídeo en Tiempo Real (Fase 2):** Lograr una detección robusta de pólipos en colonoscopias, reduciendo falsos positivos por reflejos y añadiendo **memoria temporal** para no sobrecontar lesiones[cite: 11].
*   **Confirmación Histológica (Fase 3):** Clasificar muestras de tejido con alta precisión y proporcionar **explicaciones visuales** (mapas de calor) para interpretar la decisión del modelo[cite: 11].
*   **Trazabilidad y UX:** Proveer una interfaz de usuario fluida donde las evidencias no se perdieran, permitiendo guardar el historial por paciente[cite: 11].

## Mi Rol y tareas realizadas
Como parte del equipo de desarrollo, mi trabajo abarcó múltiples capas del ecosistema de datos e inteligencia artificial:
*   **Data Understanding y Preparación:** Diseño de un pipeline ETL estricto para fusionar y balancear datasets de Kaggle, generando un grupo de control sintético con **coherencia biológica**[cite: 11]. Además, me encargué de la limpieza de imágenes médicas, implementando hashes (SHA-256 y perceptual) para evitar la contaminación de datos (Data Leakage) entre los conjuntos de entrenamiento y test[cite: 11].
*   **Modelado e Inteligencia Artificial:** Al igual que en arquitecturas complejas (como las referenciadas en el archivo Documentación_técnica_SoundWave_P4G4.pdf o en el repositorio jachias21/music_recommendation_system), el enfoque aquí fue multimodal. Implementé y evalué algoritmos de **Gradient Boosting** para datos tabulares y redes neuronales convolucionales (**UNet3+** y **DenseNet-121**) utilizando **PyTorch**[cite: 11].
*   **Explicabilidad (XAI):** Integración de librerías como **SHAP** para desglosar el impacto de los biomarcadores en el riesgo total, y algoritmos **Grad-CAM** para resaltar clústeres celulares malignos en las biopsias[cite: 11].
*   **Despliegue y UI:** Desarrollo de la interfaz gráfica de escritorio interactiva utilizando **PySide6 (Qt for Python)**, gestionando la concurrencia con `QThread` para evitar que la interfaz se congelara durante el procesamiento de vídeo[cite: 11].

## Explicación del proyecto
**AiColon Diagnosis** es un ecosistema tecnológico estructurado en un pipeline de tres fases secuenciales, diseñado bajo una lógica clínica estricta[cite: 11]:

1.  **Fase 1 (Detección Tabular):** Actúa como un triaje inteligente. Utiliza el modelo **CatBoost** (elegido sobre XGBoost por su manejo nativo de variables categóricas) para procesar el historial médico, factores hereditarios y estilo de vida[cite: 11]. Genera un porcentaje de riesgo calibrado y un gráfico **SHAP** que explica la decisión[cite: 11].
2.  **Fase 2 (Análisis de Imagen):** Si la Fase 1 arroja un riesgo elevado, se pasa a la colonoscopia. Aquí, un modelo **UNet3+ EfficientNet** preentrenado segmenta pólipos en tiempo real[cite: 11]. La clave de esta fase es su **lógica de persistencia temporal**: las detecciones se asocian entre frames para evitar contar el mismo pólipo dos veces debido a cambios de cámara o reflejos[cite: 11].
3.  **Fase 3 (Confirmación Histológica):** Si se detectan pólipos, se analizan imágenes estáticas de biopsias. El modelo **DenseNet-121** clasifica el tejido como benigno o maligno, alcanzando una precisión (Accuracy) del **99.73%** en el conjunto de test[cite: 11]. La interfaz muestra la imagen original, la predicción y el mapa **Grad-CAM** superpuesto[cite: 11].

## Resultado
El resultado es un ecosistema de salud digital completamente funcional que consolida el flujo de revisión asistida punta a punta[cite: 11]. La solución logró superar limitaciones críticas: en la Fase 1 se evitó el efecto de discretización mediante restricciones biológicas; en la Fase 2 se mitigaron los falsos positivos transicionando de cajas delimitadoras (YOLO) a **máscaras de segmentación con tracking temporal**; y en la Fase 3 se logró una precisión casi perfecta con un solo falso negativo en test[cite: 11]. 

**AiColon Diagnosis** demuestra con éxito cómo la Inteligencia Artificial, cuando está respaldada por métricas sólidas y trazabilidad total (XAI), puede empoderar al médico entregándole los datos correctos, la visión precisa y la confirmación explicada[cite: 11].