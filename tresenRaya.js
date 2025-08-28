let jugador1 = "X";
let jugador2 = "O";
let turno = jugador1;
let inicio = true;

let combinacion = [
  [0,3,6], // fila izquierda
  [1,4,7], // fila centro
  [2,5,8], // fila derecha
  [0,1,2], // columna arriba
  [3,4,5], // columna medio
  [6,7,8], // columna abajo
  [0,4,8], // diagonal ↘
  [2,4,6]  // diagonal ↙
];

function poner(i){
    if(!inicio) return;
    let cell = i.target;

    if(cell.textContent === ""){
        cell.textContent = turno;

        // Quitar clases previas por si acaso
        cell.classList.remove("jugador1", "jugador2");

        // Aplicar color según el jugador
        if(turno === jugador1){
            cell.classList.add("jugador1");
        } else {
            cell.classList.add("jugador2");
        }

        let id = document.getElementsByClassName("posicion");
        if(!verificar(id)){
            turno = turno === jugador1 ? jugador2 : jugador1;
        }
    }
}

function iniciar(id){
    for(let i = 0; i < id.length; i++){
        id[i].textContent = "";
    }
        inicio = true;
       turno = jugador1;
}
function verificar(id){
    for(let combo of combinacion){
        let [a,b,c] = combo;
        if(id[a].textContent && id[a].textContent === id[b].textContent && id[a].textContent === id[c].textContent){
            
            id[a].classList.toggle("color");
            id[b].classList.toggle("color");
            id[c].classList.toggle("color");
            document.getElementById("ganador").textContent = `¡🏆 El jugador ${id[a].textContent} ha ganado!🥇`;
            inicio = false;
            return true;
        }
    }
    let casillasLlenas = true;
    for (let i = 0; i < id.length; i++) {
        if (id[i].textContent == "") {
            casillasLlenas = false;
            break;
        }
    }
    if (casillasLlenas) {
        document.getElementById("ganador").textContent = 'Ha habido un empate🎀🎈';
        inicio = false;
        return true;
        
    }
    return false;
}
function jugar(){
    let ju = document.getElementsByClassName("posicion");
    for (let i = 0; i < ju.length; i++) {
        ju[i].addEventListener("click", poner);
        
    }
}

window.onload = function(){
  
    jugar();
    document.getElementById("resetear").addEventListener("click", function(){
        window.location.reload();
    });
    
}