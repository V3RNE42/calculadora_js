function ascensor(sumaresta) {
    let valor = document.getElementById("numero").innerHTML;
    valor=Number(valor)+sumaresta;
    document.getElementById("numero").innerHTML=valor;
}
function sumar() {
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let valor=Number(num1)+Number(num2);
    document.getElementById("resultado").innerHTML=Number(valor);
    document.getElementById("resultado").style.color="red";
    document.getElementById("resultado").style.backgroundColor="blue";
}
