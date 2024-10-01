# Desafío: Estructuras de control de flujo

## Descripción

Este desafío consiste en desarrollar un juego interactivo en JavaScript, donde el usuario tomará decisiones que afectarán el destino del personaje, tal como en algunos juegos. El juego ofrece opciones de camino hacia el área de Front-End o Back-End, y a partir de ahí, otras decisiones llevarán al usuario por diferentes rutas de aprendizaje. El objetivo es implementar estructuras de control de flujo, como if, else, for, y while, para generar diferentes escenarios y finales según las decisiones del usuario. Además, el usuario podrá ingresar múltiples tecnologías que le gustaría aprender, generando mensajes personalizados para cada elección.

## Objetivo

Los objetivos principales son:

* Crear una historia interactiva que se adapta a las elecciones del usuario.
* Utilizar estructuras condicionales (if, else if, else) para manejar las diferentes ramas del juego.
* Implementar bucles (while) para permitir que el usuario ingrese varias tecnologías hasta que desee detenerse.
* Personalizar los mensajes mostrados según las decisiones tomadas por el usuario.

## Detalles

El juego realiza las siguientes acciones:

1. Elección inicial del camino: El usuario elige si quiere seguir hacia Front-End o Back-End.

* Si elige Front-End, deberá decidir si quiere aprender React o Vue.
* Si elige Back-End, podrá optar entre aprender C# o Java.

2. Elección de especialización: Después de la primera decisión, el usuario elegirá si quiere especializarse en esa área o desarrollarse como Fullstack.

3. Elección de tecnologías adicionales: El juego permite que el usuario ingrese tantas tecnologías como desee aprender. Se utiliza un bucle while que continúa solicitando nuevas tecnologías hasta que el usuario indique que no quiere agregar más.

4. Mensajes personalizados: Para cada elección, se muestra un mensaje específico, tanto para las elecciones principales como para las tecnologías adicionales que el usuario ingrese.
