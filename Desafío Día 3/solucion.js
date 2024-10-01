const area = prompt("¿Te gustaría seguir en el área de Front-End o Back-End?");

let tecnologia;
if (area === "Front-End") {
    tecnologia = prompt("¿Te gustaría aprender React o Vue?");
} else if (area === "Back-End") {
    tecnologia = prompt("¿Te gustaría aprender C# o Java?");
} else {
    alert("Opción inválida. Por favor elige entre Front-End o Back-End.");
}
const camino = prompt("¿Te gustaría especializarte en " + area + " o convertirte en Fullstack?");

if (camino === "especializarte") {
    alert("¡Genial! Sigue especializándote en " + tecnologia + " para dominar " + area + ".");
} else if (camino === "Fullstack") {
    alert("¡Increíble! Convertirse en Fullstack te dará muchas oportunidades en el desarrollo.");
} else {
    alert("Opción inválida.");
}

let continuar = true;
while (continuar) {
    const nuevaTecnologia = prompt("¿Hay alguna otra tecnología que te gustaría aprender?");
    alert("¡Genial! " + nuevaTecnologia + " es una gran elección.");
    continuar = confirm("¿Hay alguna otra tecnología que te gustaría aprender?");
}

alert("¡Gracias por jugar! Sigue aprendiendo y mejorando en tu carrera.");