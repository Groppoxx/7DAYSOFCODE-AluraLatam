let listaCompras = {
    frutas: [],
    lacteos: [],
    congelados: [],
    dulces: []
};

let agregar = prompt("¿Deseas agregar un alimento a la lista de compras? (sí/no)");

while (agregar.toLowerCase() === 'sí') {
    let alimento = prompt("¿Qué alimento deseas agregar?");
    let categoria = prompt("¿En qué categoría encaja ese alimento? (frutas, lacteos, congelados, dulces)");

    if (listaCompras[categoria]) {
        listaCompras[categoria].push(alimento);
    } else {
        alert("Categoría no válida. Inténtalo de nuevo.");
    }

    agregar = prompt("¿Deseas agregar otro alimento a la lista de compras? (sí/no)");
}

console.log("Lista de compras:");
for (let categoria in listaCompras) {
    if (listaCompras[categoria].length > 0) {
        console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: ${listaCompras[categoria].join(', ')}`);
    } else {
        console.log(`${categoria.charAt(0).toUpperCase() + categoria.slice(1)}: `);
    }
}
