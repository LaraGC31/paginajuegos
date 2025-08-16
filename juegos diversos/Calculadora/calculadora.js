

    
function suma(){
    let num1 = document.getElementById("num1").value;
    let  num2 = document.getElementById("num2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let valor = parseInt(num1+num2);

    document.getElementById("resultado").textContent = valor;
}
function resta(){
    let num1 = document.getElementById("num1").value;
    let  num2 = document.getElementById("num2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let valor = parseInt(num1-num2);

    document.getElementById("resultado").textContent = valor;
}
function multiplicacion(){
    let num1 = document.getElementById("num1").value;
    let  num2 = document.getElementById("num2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let valor = parseInt(num1*num2);

    document.getElementById("resultado").textContent = valor;
}
function division(){
    let num1 = document.getElementById("num1").value;
    let  num2 = document.getElementById("num2").value;

    num1 = parseInt(num1);
    num2 = parseInt(num2);

    let valor = parseInt(num1/num2);

    document.getElementById("resultado").textContent = valor;
}
window.onload = function(){
    document.getElementById("suma").addEventListener("click", suma);
    document.getElementById("resta").addEventListener("click", resta);
    document.getElementById("multiplicacion").addEventListener("click", multiplicacion);
    document.getElementById("division").addEventListener("click", division);
    document.getElementById("reset").addEventListener("click",()=>{location.reload()});


}