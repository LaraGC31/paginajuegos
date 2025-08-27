let aleatorio;
let adivinadas = [];
let intentos = 0;
let maximo = 6;
let GameOver = false;

let letrasIncorrectas = {};

function palabrasAleatorias(){

 const palabrasAleatorias = ["piano", "arbol", "balcon", "cajon", "computadora", "edificio", "nube", "ventana", "balon", "piramide"];

  aleatorio = palabrasAleatorias[Math.floor(Math.random() * palabrasAleatorias.length)].toUpperCase();


 let palabraGuiones = "";
for (let i = 0; i < aleatorio.length; i++) {
    palabraGuiones += "_";
}

document.getElementById("casillas").textContent = palabraGuiones;
}

// Función para mostrar la parte inicial del ahorcado
function mostrarAhorcadoInicial() {
    document.getElementById("ahorcado").textContent =
    "___________\n"+
    "|/         |\n"+
    "|\n"+
    "|\n"+
    "|\n"+
    "|\n"+
    "|\n"+
    "|_______\n";
}

// Función para mostrar la cabeza del ahorcado
function mostrarAhorcadoCabeza() {
    document.getElementById("ahorcado").textContent =
    " ____________\n"+
    "|/           |\n"+
    "|        | (._.)  |\n"+     
    "|        |   -    |\n"+
    "|        |________|\n"+
    "|  \n"+
    "|  \n"+
    "| \n"+
    "|\n"+
    "|\n" +
    "|_______\n";
}

// Función para mostrar el ahorcado con un brazo
function mostrarAhorcadoConCuello() {
    document.getElementById("ahorcado").textContent =
    " ____________\n"+
    "|/          |\n"+
    "|        | (._.)  |\n"+     
    "|        |   -    |\n"+
    "|        |________|\n"+
    "|            |\n"+
    "|            | \n"+
    "|            |\n"+
    "|\n"+
    "|\n"+
    "|_______\n";    
}
function mostrarAhorcadoUnBrazo() {
    document.getElementById("ahorcado").textContent =
    " ____________\n"+
    "|/           |\n"+
    "|        | (._.)  |\n"+     
    "|        |   -    |\n"+
    "|        |________|\n"+
    "|            |\n"+
    "|            | -\n"+
    "|            |\n"+
    "|\n"+
    "|\n"+
    "|_______\n";    
}

// Función para mostrar el ahorcado con dos brazos
function mostrarAhorcadoDosBrazos() {
    document.getElementById("ahorcado").textContent =
    " ___________\n"+
    "|/          |\n"+
    "|        | (._.)  |\n"+     
    "|        |   -    |\n"+
    "|        |________|\n"+
    "|            |\n"+
    "|         -  | -\n"+
    "|            |\n"+
    "|\n"+
    "|\n"+
    "|_______\n";  
}
function mostrarAhorcadoUnPie() {
    document.getElementById("ahorcado").textContent =
    " ____________\n"+
    "|/          |\n"+
    "|        | (._.)  |\n"+     
    "|        |   -    |\n"+
    "|        |________|\n"+
    "|            |\n"+
    "|          - | -\n"+
    "|            |\n"+
    "|            | -\n"+
    "|\n"+
    "|\n"+
    "|_____\n";  
}
// Función para mostrar el ahorcado completo
function mostrarAhorcadoCompleto() {
    document.getElementById("ahorcado").textContent =
    " ___________\n"+
    "|/          |\n"+
    "|        | (._.)  |\n"+     
    "|        |   -    |\n"+
    "|        |________|\n"+
    "|            |\n"+
    "|          - | -\n"+
    "|            |\n"+
    "|          - | -\n"+
    "|\n"+
    "|\n"+
    "|_____\n";
  
}

function comprobar(letra){
 if(GameOver) return;

 if(!aleatorio.includes(letra)){
    if(letrasIncorrectas[letra]){
    letrasIncorrectas[letra]++;
}else{
    letrasIncorrectas[letra] = 1;
}
                intentos++;
                 mostrar();
                errores();
}
   if(!adivinadas.includes(letra)){
        adivinadas.push(letra);
   }

   let nueva = "";
   let palabraCompletada = true;
   for(let i = 0; i < aleatorio.length; i++){
    let ahora = aleatorio[i];
    if(adivinadas.includes(ahora)){
        nueva += ahora + "";
    }else{
        nueva += "_";
        palabraCompletada = false;
    }
   }

   document.getElementById("casillas").textContent = nueva;

  
if(palabraCompletada){
    document.getElementById("mensaje").textContent = "Has ganado, pulsa F5 para volver a cargar la página";
    GameOver = true;
}

if(intentos >= maximo){
    document.getElementById("ahorcado").hidden = false;
    document.getElementById("letras").hidden = true;
    document.getElementById("casillas").hidden = true;
    document.getElementById("mensaje").textContent = "Game Over, la palabra era: " + aleatorio + ", pulsa F5 para volver a cargar la página";
   GameOver = true;

}
}


function mostrar() {
    let letraMalMost = [];
    for (const letra in letrasIncorrectas) {
        letraMalMost.push(letra + ":<span style='color:red'>" + letrasIncorrectas[letra] + "</span>");
    
    }
    document.getElementById("letras").innerHTML = letraMalMost.join(", ");
}

function errores(){
    
    const imagen = document.getElementById("ahorcado");
    imagen.src = `img/ahorcado${intentos}.png`; // cambia según los fallos

}
  // Crear teclado en pantalla SOLO si es móvil

  function crearTeclado() {
      const teclado = document.getElementById("teclado");
      const letras = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ".split("");
      
      letras.forEach(l => {
          const btn = document.createElement("button");
          btn.textContent = l;
          btn.onclick = () => {
              comprobar(l); // llama a tu función de juego
              btn.disabled = true; // desactiva el botón tras usarlo
          };
          teclado.appendChild(btn);
      });
  }
  
 
window.onload = function(){
    palabrasAleatorias();
 mostrarAhorcadoInicial();
  crearTeclado(); 


}




