let select = [];
let contador = 0;
let al = 1;
function nuevo(){
    let array = ["rojo", "azul", "amarillo", "verde"];
    
    while(select.length < al){
   let aleatorio = array[Math.floor(Math.random() * array.length )];
        select.push(aleatorio);

}
    document.getElementById("palabra").textContent = select.join(" , ").toUpperCase();
      
}
function nuevo2(){
    al = 1;
    contador = 0;
    select = [];
    nuevo();
}

function colores(){
    nuevo();

    document.getElementById("rojo").addEventListener("click",function(){
        pinchaColor("rojo");
    });
    document.getElementById("azul").addEventListener("click", function(){
        pinchaColor("azul");
    });
    document.getElementById("amarillo").addEventListener("click", function(){
        pinchaColor("amarillo");
    });
    document.getElementById("verde").addEventListener("click", function(){
        pinchaColor("verde");
    });
}
function pinchaColor(color){

    if(color == select[contador]){
        contador++;
    }else{
        
        nuevo2();
    }

    if(contador == select.length){
        
        al++;
        nuevo();
        contador = 0;
    }
    
}
window.onload = function(){
colores();
}