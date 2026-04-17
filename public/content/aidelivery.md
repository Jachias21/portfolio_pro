# Proyecto: IA Delivery - Sistema de Optimización Logística

## Reto
El objetivo principal de este proyecto fue el desarrollo de una Plataforma de Optimización Logística basada en Inteligencia Artificial para la empresa de manufactura de alimentos perecederos IA DELIVERY SL. El desafío consistió en permitir a la compañía transicionar de un modelo de distribución externalizado a una gestión de flota propia, minimizando los costes logísticos y garantizando estrictamente que ningún producto se entregue caducado.

Para lograrlo, nos propusimos los siguientes objetivos técnicos y funcionales:
* Minimización de Flota: Determinar la cantidad mínima y el tipo de vehículos necesarios para cubrir la demanda diaria, reduciendo el gasto de inversión (CAPEX) y los costes operativos.
* Garantía de Frescura: Resolver el problema logístico cumpliendo con la restricción dura de que el tiempo de llegada sea estrictamente menor a la fecha de caducidad del producto más perecedero de cada pedido.
* Desarrollo Algorítmico Propio: Modelar y resolver el problema de rutas (CVRP-TW) implementando algoritmos desde cero en Python, evitando el uso de solvers comerciales o cajas negras para mantener un control total sobre la heurística de optimización.

## Mi Rol y tareas realizadas
Como parte del equipo de desarrollo, mi participación abarcó la ingeniería de datos, el diseño del modelo matemático y el desarrollo del frontend:
* Desarrollo del Pipeline ETL: Construcción del proceso de ingesta de datos y un sistema híbrido de geocodificación que combina caché local y consultas a la API de Nominatim para transformar direcciones postales en coordenadas GPS de forma eficiente.
* Lógica de Optimización e Inteligencia Artificial: Implementación de la arquitectura algorítmica utilizando K-Means (Scikit-Learn) para la agrupación geográfica de los pedidos y el desarrollo de una heurística constructiva voraz para secuenciar las paradas.
* Desarrollo de la Interfaz Web: Creación de un panel de control interactivo (Single Page Application) utilizando el framework Streamlit, integrando la librería Folium para el renderizado de mapas geoespaciales interactivos.

## Explicación del proyecto
**IA Delivery** es un sistema inteligente de optimización de rutas operado bajo una arquitectura Modelo-Vista-Controlador (MVC) y construido en Python 3.13. La aplicación desacopla el motor de optimización matemática de la interfaz gráfica.

A nivel funcional, el núcleo del proyecto utiliza una estrategia "Cluster-First, Route-Second" dividida en dos fases:
1. Agrupación Estratégica (Clustering): Emplea un algoritmo K-Means adaptativo que itera para agrupar pedidos en clústeres geográficos. El algoritmo evalúa el peso total de los pedidos para asegurar que no se exceda la capacidad de carga del vehículo seleccionado y respeta un límite máximo de 20 paradas por ruta.
2. Enrutamiento Táctico (Routing): Para cada clúster, un solver local calcula la secuencia óptima de entregas evaluando el cliente más cercano y verificando restricciones en tiempo real. Este proceso simula el cumplimiento normativo del tacógrafo, insertando descansos obligatorios tras 8 horas de conducción, y rechaza paradas que superen la fecha límite de caducidad del producto.
3. Plataforma Interactiva: El sistema cuenta con un dashboard donde el Jefe de Tráfico puede cargar los archivos del día, simular escenarios de asignación manual de flota y visualizar las rutas resultantes en un mapa codificado por colores con información detallada por cliente.

## Resultado
El resultado es un Producto Mínimo Viable (MVP) altamente eficiente y escalable, capaz de procesar 100 pedidos y generar la planificación completa de rutas en aproximadamente 3 segundos.

El sistema demostró una mejora significativa en la optimización de recursos logísticos mediante pruebas comparativas (A/B testing). La inteligencia artificial logró corregir la tendencia al sobredimensionamiento de flota que suele ocurrir en la planificación manual, seleccionando siempre el vehículo más económico posible sin comprometer la ventana temporal de los envíos. Como producto final, la plataforma exporta hojas de ruta detalladas que garantizan un 100% de tasa de servicio dentro de los márgenes de caducidad requeridos.