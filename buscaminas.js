let tablero = [];
let valorNum = 5;
let g = 0; // bombas a colocar
let bomba = "💣";
let descubiertas = 0;
let totalSeguras = 0;
let v = "💧";

function construir(){
for(let i = 0; i < valorNum; i++){
    for(let j = 0; j <= valorNum; j++){
       let div = document.getElementById("ba"+(i+1)+ "_"+j);
       div.textContent = "";
       div.addEventListener("click", function(){
        descubrir(i,j);
       });

    }
}
}
function ini(){
    for(let i = 0; i < valorNum; i++){
        tablero[i] = new Array(valorNum);
        for(let j  = 0; j <= valorNum; j++){
            tablero[i][j] = v;
        }
    }
}

function descubrir(i,j){
    let cell = document.getElementById("ba" + (i + 1) + "_" + j);
    
        cell.textContent = v;
        tablero[i][j] = "✓"; // marcar como descubierta para no contar dos veces
        descubiertas++;
        
        if (descubiertas === totalSeguras) {
            alert("🎉 ¡Felicidades! Has ganado el juego 🎉");
            location.reload();
        }
        
    } else if (tablero[i][j] == bomba) {
        cell.textContent = bomba;
        alert("💥 BOOM! Has perdido.");
        location.reload();
}   
    }

function rellenar(n){
    let colocar = 0;
  

while(colocar < n){
  let   posHor = devolverNumero(0, valorNum-1);
  let  posVert = devolverNumero(0,valorNum-1);
    if(tablero[posVert][posHor] !== bomba){
        tablero[posVert][posHor] = bomba;
        colocar++;
    }
}

}
function relleno(){
  g = 5;
    rellenar(g);
    totalSeguras = (valorNum * (valorNum + 1))-g;
}
window.onload = function(){
    ini();
   construir();
   relleno();
}