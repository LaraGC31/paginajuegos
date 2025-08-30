let tablero = [];
let filas = 5;
let columnas = 6;
let g = 0; // bombas a colocar
let bomba = "💣";
let descubiertas = 0;
let totalSeguras = 0;
let v = "💧";

function devolverNumero(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function construir() {
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            let div = document.getElementById("ba" + (i + 1) + "_" + j);
            div.textContent = "";
            div.addEventListener("click", function () {
                descubrir(i, j);
            });
        }
    }
}

function ini() {
    for (let i = 0; i < filas; i++) {
        tablero[i] = new Array(columnas);
        for (let j = 0; j < columnas; j++) {
            tablero[i][j] = v;
        }
    }
}

function descubrir(i, j) {
    let cell = document.getElementById("ba" + (i + 1) + "_" + j);

    if (tablero[i][j] === bomba) {
        cell.textContent = bomba;
        alert("💥 BOOM! Has perdido.");
        return;
    }

    // solo contar si aún no estaba descubierta
    if (tablero[i][j] !== "✓") {
        cell.textContent = v;
        tablero[i][j] = "✓";
        descubiertas++;
    }

    if (descubiertas === totalSeguras) {
        alert("🎉 ¡Felicidades! Has ganado el juego 🎉");
    }
}

function rellenar(n) {
    let colocar = 0;
    while (colocar < n) {
        let posHor = devolverNumero(0, columnas - 1);
        let posVert = devolverNumero(0, filas - 1);
        if (tablero[posVert][posHor] !== bomba) {
            tablero[posVert][posHor] = bomba;
            colocar++;
        }
    }
}

function relleno() {
    g = 5; // nº de bombas
    rellenar(g);
    totalSeguras = (filas * columnas) - g; // 30 - g
}

window.onload = function () {
    ini();
    construir();
    relleno();

    document.getElementById("resetear").addEventListener("click", function () {
        window.location.reload();
    });
}
