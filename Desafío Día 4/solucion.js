const numeroSecreto = Math.floor(Math.random() * 11);

let intentos = 3;

while (intentos > 0) {
    const intento = parseInt(prompt("Adivina el número entre 0 y 10:"));

    if (intento === numeroSecreto) {
        alert("¡Felicidades! Adivinaste el número.");
        return;
    } else {
        intentos--;
        alert("Incorrecto. Te quedan " + intentos + " intentos.");
    }
}

alert("Lo siento, no adivinaste el número. El número era " + numeroSecreto + ".");
