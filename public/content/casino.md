# Proyecto: Fondo Casino Royale

## Reto
El objetivo principal de este proyecto fue el desarrollo de una plataforma de casino virtual denominada **Fondo Casino Royale**. El desafío consistió en diseñar un ecosistema completo que replicara la emoción de los juegos de azar pero bajo un modelo ético y responsable.

Para cumplir con las normativas y evitar fomentar la ludopatía, nos propusimos los siguientes objetivos técnicos y funcionales:
* **Eliminar el riesgo financiero:** El sistema opera exclusivamente con monedas virtuales. No se permite el uso de dinero real en ninguna parte de la aplicación.
* **Sistema de economía controlada:** Los usuarios reciben una cantidad fija de monedas diariamente. Una vez agotadas, deben esperar al día siguiente para recibir más, limitando así el tiempo de juego compulsivo.
* **Gamificación y progresión:** Implementar un sistema de niveles basado en puntos de experiencia (XP). Las victorias permiten al usuario subir de nivel, lo cual es requisito indispensable para desbloquear juegos más avanzados que inicialmente están bloqueados.
* **Desarrollo Full-Stack:** Crear una infraestructura robusta que conecte una aplicación móvil nativa con un servidor centralizado y una base de datos en la nube.

## Mi Rol y tareas realizadas
Como desarrollador en este proyecto, mis responsabilidades abarcaron tanto la lógica del servidor como la experiencia de usuario en el dispositivo móvil:
* **Desarrollo del Backend:** Implementación de la API REST utilizando **Spring Boot**. Me encargué de la gestión de la persistencia de datos con **MySQL**, definiendo las entidades de Usuario, Sesiones de Juego y Recompensas.
* **Lógica de Juegos en el Frontend:** Programación en **Kotlin** de la lógica matemática y visual de los distintos juegos (Ruleta, Blackjack y Tragaperras), asegurando que los resultados fueran aleatorios y coherentes con las reglas de cada modalidad.
* **Gestión de Estado y Conectividad:** Integración de la arquitectura **MVVM** para comunicar la aplicación con el servidor, gestionando en tiempo real el balance de monedas y la progresión de nivel del jugador tras cada partida.
* **Seguridad:** Implementación de sistemas de encriptación para las contraseñas de los usuarios y validación de sesiones para proteger la integridad de los datos almacenados.

## Explicación del proyecto
**Fondo Casino Royale** es una aplicación multiplataforma diseñada para dispositivos Android que simula la experiencia de un casino real sin apuestas de valor monetario. El proyecto se sustenta en tres pilares tecnológicos:

1. **Arquitectura del Servidor:** Un backend desarrollado en **Java/Spring Boot** que centraliza toda la lógica de negocio. Este servidor se comunica con una base de datos **MySQL** alojada en **Railway**, permitiendo que el progreso del usuario se mantenga sincronizado independientemente del dispositivo.
2. **Interfaz Móvil:** La aplicación fue construida de forma nativa en **Kotlin**. Se puso especial énfasis en la fluidez de las pantallas de juego y en la integración de animaciones para mejorar la experiencia inmersiva del usuario.
3. **Ciclo de Usuario:** El flujo comienza con el registro de usuarios (solo mayores de 18 años). Al entrar, el jugador accede a una sala principal donde puede elegir juegos disponibles según su nivel. El sistema registra cada sesión de juego, actualizando el balance de "Fondo Coins" y la experiencia acumulada en la base de datos de forma segura.

El desarrollo se llevó a cabo siguiendo una metodología de **Sprints**, donde primero se consolidó la base del sistema y el juego de la Ruleta, para posteriormente escalar a juegos más complejos como el Blackjack y las máquinas tragaperras en una segunda fase.

## Resultado
El resultado es una herramienta de entretenimiento digital funcional y escalable. Se logró integrar con éxito una aplicación móvil nativa con un sistema de backend distribuido, cumpliendo con los requisitos de un proyecto DAM de alta complejidad.

La plataforma no solo es visualmente atractiva, sino que demuestra ser un modelo viable de entretenimiento responsable, donde la retención del usuario se logra mediante la **gamificación y el desbloqueo de contenido** en lugar del incentivo económico. El sistema de niveles y el límite de monedas diarias garantizan un entorno de juego seguro y controlado.