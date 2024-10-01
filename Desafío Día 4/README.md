# Desafío: Mas loops y randomización

## Descripción

Este desafío consiste en crear un juego de adivinanza de números en JavaScript, donde el usuario intentará adivinar un número que la computadora ya ha definido. El programa comenzará con un número predefinido entre 0 y 10 (por ejemplo, 7). El usuario tendrá 3 intentos para adivinar el número correcto. Si acierta, el programa lo felicitará, pero si no, al agotarse los intentos, el número correcto será revelado. Posteriormente, se mejora el programa utilizando un número aleatorio generado con Math.random() en lugar de uno predefinido.

## Objetivo

Los objetivos principales son:

* Implementar un juego de adivinanza donde el usuario tenga hasta 3 intentos para adivinar un número.
* Utilizar estructuras de repetición para manejar el número de intentos del jugador.
* Mejorar el juego generando el número de forma aleatoria usando Math.random().
* Informar al usuario si ha acertado o fallado, y mostrar el número correcto si no acierta en los 3 intentos.

## Detalles

El juego sigue las siguientes fases:

1. Inicio con número predefinido: Se define un número fijo entre 0 y 10 (como el 7) que el usuario debe adivinar.
2. Captura de intentos: El usuario ingresa su suposición mediante prompt, y el programa verifica si el número es correcto.
3. Estructura de repetición: Se utiliza un bucle para permitir hasta 3 intentos. Si el usuario acierta antes de agotar los intentos, el programa termina.
4. Respuesta final: Si el usuario no acierta en los 3 intentos, el programa revela cuál era el número correcto.
5. Uso de número aleatorio: En la versión mejorada, el número a adivinar será generado aleatoriamente utilizando Math.random().