
let turno = 0;
let tablero = [];

let j1;
let j2;

function pregunta(){
    j1 = document.getElementById('jugador1').value;
    j2 = document.getElementById('jugador2').value;


    document.getElementById("ocultado").hidden = true;
    document.getElementById('jugador').hidden = false;
document.getElementById('jugadors').hidden = false;
document.getElementById('uno').hidden = false;
document.getElementById('dos').hidden = false;
document.getElementById('tres').hidden = false;
document.getElementById("jugador3").textContent = j1;
document.getElementById("jugador4").textContent = j2;


} 


function pulsando(ev, pos){


        turno++;
        const btn = ev.target;
        const juego = turno % 2 ? 'red' : 'green';
        btn.style.backgroundColor = juego;
        tablero[pos] = juego;
        const juego2 = turno % 2 ? j1 : j2;

    if(haGanado()){
        alert("Enorabuena has ganado " + juego2);
    }
}
function haGanado(){
    if(tablero[0] == tablero[1] && tablero[0] == tablero[2] && tablero[0]){
        return true;
    }else if(tablero[3] == tablero[4] && tablero[3] == tablero[5] && tablero[3]){
        return true;
    }else if(tablero[6] == tablero[7] && tablero[6] == tablero[8] && tablero[6]){
        return true;
    }else if(tablero[0] == tablero[3] && tablero[0] === tablero[6] && tablero[0]){
        return true;
    }else if(tablero[1] == tablero[4] && tablero[1] === tablero[7] && tablero[1]){
        return true;
    }else if(tablero[2] == tablero[5] && tablero[2] === tablero[8] && tablero[2]){
        return true;
    }else if(tablero[0] == tablero[4] && tablero[0] === tablero[8] && tablero[0]){
        return true;
    }else if(tablero[2] == tablero[4] && tablero[2] === tablero[6] && tablero[2]){
        return true;
    }
    return false;
}


window.onload = function() {
    
    document.querySelectorAll('#button').forEach((elem, i) => elem.addEventListener("click", (ev) => pulsando(ev, i)));
 
    document.getElementById('jugador').hidden = true;
    document.getElementById('jugadors').hidden = true;
document.getElementById('uno').hidden = true;
document.getElementById('dos').hidden = true;
document.getElementById('tres').hidden = true;

document.getElementById("register").addEventListener("click", pregunta);

} 