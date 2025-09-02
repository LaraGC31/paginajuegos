let tablero = [];
let valorNum = 10;
let puntuacion = 100;
let juegoComenzado = false;
function devolverNumero(minimo,maximo){
    minimo = parseInt(minimo);
    maximo = parseInt(maximo);
    return  parseInt(Math.random() * ((maximo+1)-minimo)+ minimo);
}

function construir(){
for(let i = 0; i < valorNum; i++){
    for(let j = 0; j < valorNum; j++){
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
        for(let j  = 0; j < valorNum; j++){
            tablero[i][j] = "🌊";
        }
    }
}

function descubrir(i,j){
    juegoComenzado = true;
    let cell = document.getElementById("ba" + (i+1) + "_" + j);
    if(tablero[i][j] === "🌊"){
             cell.textContent = "🌊";
        document.getElementById("caracter").textContent = "Agua";
        puntuacion -= 1;
       
    }else if(typeof tablero[i][j] === "number"){
        let long = tablero[i][j];
        cell.textContent = "🚢"
       document.getElementById("caracter").textContent = "Barco de longitud:" + long;
       puntuacion -= 1;
       
       tablero[i][j] = "🚢";
    }
    document.getElementById("puntos").textContent = "Puntuacion Inicial: " +  puntuacion + " puntos";
    }
function rellenar(n){
 let posVert;
let posHor;
let dir;
let coincidencia = true;

do{
    posHor = devolverNumero(0, valorNum-1);
    posVert = devolverNumero(0,valorNum-1);
    dir = devolverNumero(0,1);
    coincidencia = true;

    for(let i = 0; i < n; i++){
        let newHor = dir === 0 ? posHor + i : posHor;
        let newVer = dir === 1 ? posVert + i : posVert;
    if(newHor >= valorNum || newVer >= valorNum || tablero[newVer][newHor] !== "🌊"){
        coincidencia = false;
        break;
    }
    
    }
}while(!coincidencia);
for(let i = 0; i < n; i++){
    let newHorr = dir === 0 ? posHor + i : posHor;
    let newVerr = dir === 1 ? posVert + i : posVert;

    tablero[newVerr][newHorr] = n;
   
}
}

function relleno(){
    rellenar(3);
    rellenar(4);
    rellenar(5);
}
function ocultarTodo(){
    if(juegoComenzado){
        alert("NO PUEDES OCULTAR EL TABLERO EL JUEGO YA HA COMENZADO");
      }else{
    
    for (let i = 0; i < valorNum; i++) {
        for (let j = 0; j < valorNum; j++) {
            let cell = document.getElementById("ba" + (i + 1) + "_" + j);
           cell.textContent = "";
        }
    }
}
}
function mostrarBarcoAgua(){
    if(juegoComenzado){
        alert("NO PUEDES MOSTRAR EL TABLERO EL JUEGO YA HA COMENZADO");
    }else{
    for(let i = 0; i < valorNum; i++){
        for(let j = 0; j < valorNum; j++){
            let cell = document.getElementById("ba" + (i+1) + "_" + j);
            if(!cell.textContent){
            if(tablero[i][j] === "🌊"){
                cell.textContent = "🌊";
            }else if(typeof tablero[i][j] === "number"){
                let long = tablero[i][j];
                cell.textContent = "🚢";
            }
        }else{
            alert("No puedes acceder el ya se ha empezado el juego");
          }
        }
    }
}
}
window.onload = function(){
    ini();
   construir();
   relleno();
   document.getElementById("mostrar").addEventListener("click",mostrarBarcoAgua);
   document.getElementById("ocultar").addEventListener("click", ocultarTodo);
   document.getElementById("cargar").addEventListener("click",function(){
    location.reload();
   });

}
