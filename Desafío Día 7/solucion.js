function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function multiplicacion(a, b) {
    return a * b;
}

function division(a, b) {
    if (b === 0) {
        return "No se puede dividir entre cero";
    } else {
        return a / b;
    }
}

let operacion;
do {
    operacion = prompt("Elige una operación: suma, resta, multiplicacion, division, o salir.");

    if (operacion === "salir") {
        console.log("Hasta la próxima.");
        break;
    }

    let num1 = parseFloat(prompt("Ingresa el primer número:"));
    let num2 = parseFloat(prompt("Ingresa el segundo número:"));

    switch (operacion) {
        case "suma":
            console.log(`El resultado es: ${suma(num1, num2)}`);
            break;
        case "resta":
            console.log(`El resultado es: ${resta(num1, num2)}`);
            break;
        case "multiplicacion":
            console.log(`El resultado es: ${multiplicacion(num1, num2)}`);
            break;
        case "division":
            console.log(`El resultado es: ${division(num1, num2)}`);
            break;
        default:
            console.log("Operación no válida.");
    }

} while (operacion !== "salir");
