// Simulador Boliche

// Precio de entrada por persona
const precioEntrada = 9000;

// Bebidas como objetos individuales
const cerveza = { nombre: "Cerveza", precio: 7000 };
const agua = { nombre: "Agua", precio: 3500 };
const caipiFrutosRojos = { nombre: "Caipi Frutos Rojos", precio: 10000 };
const caipiMaracuya = { nombre: "Caipi Maracuya", precio: 10000 };
const caipiAbsolut = { nombre: "Caipi Absolut", precio: 10000 };
const caipiSmirnoff = { nombre: "Caipi Smirnoff", precio: 10000 };
const fernetConCoca = { nombre: "Fernet con Coca", precio: 8500 };
const vodkaConSpeed = { nombre: "Vodka con Speed", precio: 6790 };
const botellaDeFernet = { nombre: "Botella de Fernet", precio: 90000 };
const caipiroskaAbsolutConMaracuya = { nombre: "Caipiroska Absolut con Maracuya", precio: 14000 };
const caipiroskaAbsolutConFrutosRojos = { nombre: "Caipiroska Absolut con Frutos Rojos", precio: 14000 };
const caipiroskaAbsolut = { nombre: "Caipiroska Absolut", precio: 14000 };
const caipiroskaSmirnoff = { nombre: "Caipiroska Smirnoff", precio: 14000 };

// Array con los objetos de bebidas
const bebidas = [
    cerveza, agua, caipiFrutosRojos, caipiMaracuya, caipiAbsolut, caipiSmirnoff, 
    fernetConCoca, vodkaConSpeed, botellaDeFernet, caipiroskaAbsolutConMaracuya, 
    caipiroskaAbsolutConFrutosRojos, caipiroskaAbsolut, caipiroskaSmirnoff
];

// Función para filtrar todas las bebidas que son caipis
function filtrarCaipis() {
    const caipis = bebidas.filter(bebida => bebida.nombre.toLowerCase().includes("caipi") && !bebida.nombre.toLowerCase().includes("caipiroska"));
    console.log("Sabores de Caipi disponibles:");
    caipis.forEach(caipi => {
        console.log(`${caipi.nombre}: $${caipi.precio}`);
    });
}

// Función para filtrar todas las bebidas que son caipiroskas
function filtrarCaipiroskas() {
    const caipiroskas = bebidas.filter(bebida => bebida.nombre.toLowerCase().includes("caipiroska"));
    console.log("Sabores de Caipiroska disponibles:");
    caipiroskas.forEach(caipiroska => {
        console.log(`${caipiroska.nombre}: $${caipiroska.precio}`);
    });
}

// Función que muestra los sabores según la elección del usuario
function mostrarSabores() {
    let inputUsuario = prompt("¿Qué querés ver, caipi o caipiroska?").toLowerCase();
    
    if (inputUsuario === "caipi") {
        alert("Mostrando sabores de Caipi. Mira la consola para los detalles.");
        filtrarCaipis(); // Muestra sabores de caipi en la consola
    } else if (inputUsuario === "caipiroska") {
        alert("Mostrando sabores de Caipiroska. Mira la consola para los detalles.");
        filtrarCaipiroskas(); // Muestra sabores de caipiroska en la consola
    } else {
        alert("Opción no válida. Por favor ingresa 'caipi' o 'caipiroska'.");
    }
}

// Función para calcular el total de entradas
function totalEntrada(cantidadEntradas) {
    return cantidadEntradas * precioEntrada;
}

// Función para calcular el total de bebidas
function seleccionarBebida() {
    let totalBebidas = 0;
    let continuar = true;

    while (continuar) {
        let mensajeBebidas = "Selecciona una bebida:\n";
        bebidas.forEach((bebida, index) => {
            mensajeBebidas += `${index + 1}. ${bebida.nombre} - $${bebida.precio}\n`;
        });
        
        let seleccion = parseInt(prompt(mensajeBebidas)) - 1;
        if (bebidas[seleccion]) {
            let cantidad = parseInt(prompt(`¿Cuántas ${bebidas[seleccion].nombre} querés?`)) || 0;
            totalBebidas += bebidas[seleccion].precio * cantidad;
        }

        continuar = prompt("¿Querés agregar otra bebida? (si/no)").toLowerCase() === "si";
    }

    return totalBebidas;
}

// Función principal para calcular y mostrar el total
function calcularTotal() {
    const cantidadEntradas = parseInt(document.getElementById('cantidad-entradas').value) || 0;
    const totalEntradasHTML = totalEntrada(cantidadEntradas);

    // Calcular el total de bebidas
    const totalBebidasHTML = seleccionarBebida();
    const totalFinalHTML = totalEntradasHTML + totalBebidasHTML;

    // Mostrar el total a pagar en la página
    document.getElementById('resultado-entradas').textContent = `Total a pagar por las entradas: $${totalEntradasHTML}`;
    document.getElementById('resultado-bebidas').textContent = `Total a pagar por las bebidas: $${totalBebidasHTML}`;
    document.getElementById('resultado-total').textContent = `El total a pagar por entradas y bebidas es: $${totalFinalHTML}`;

    // Mostrar detalles en un alert
    alert(`Detalles de la selección:\n` +
          `Cantidad de entradas: ${cantidadEntradas}\n` +
          `Total a pagar por las entradas: $${totalEntradasHTML}\n` +
          `Total a pagar por las bebidas: $${totalBebidasHTML}\n` +
          `El total a pagar por entradas y bebidas es: $${totalFinalHTML}`);
}

// Añadir evento para el botón de calcular
document.getElementById('calcular').addEventListener('click', calcularTotal);

// Llamada a la función para mostrar sabores de caipi o caipiroska
mostrarSabores();
