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
let resultado=0;
var contPantalla=0;
let contOperador=0;
let contPunto=0;
let arregloPantalla="";
let pantalla="";
var ultimovalor;
let numero=[0,0,0];
let operador=false;

function inserta(tecla) {
    switch (tecla) {
        case '/':
        case 'x':
        case '-':
        case '+':
            contOperador++;
            operador=true;
            contPunto=0;
            break;

        case '.':
            contPunto;
            break;
    
        default:
            break;
    }
    if (contPunto<=1 && contOperador<=1 && contPantalla<15) {
        arregloPantalla=arregloPantalla+""+tecla;
        document.getElementById("pantSup").innerHTML=arregloPantalla;
        contPantalla++;
    }
    ultimovalor=tecla;
};

function borraPantalla() {
    contPantalla=0;
    contPunto=0;
    contOperador=0;
    operador=false;
    arregloPantalla="";
    document.getElementById("pantSup").innerHTML=arregloPantalla;
    document.getElementById("pantInf").innerHTML=arregloPantalla;
};

function imprimeResultado() {
    borraPantalla();
};

function invierte() {};

function elimina() {
    contPantalla-=1;
    contPunto=0;
    contOperador=0;
    let copiaPantalla="";
    for (let index = 0; index < arregloPantalla.length-1; index++) {
        copiaPantalla+=arregloPantalla[index];
        if (arregloPantalla[index]==='.') contPunto++;
        if (arregloPantalla[index]==='%' || arregloPantalla[index]==='1/x' ||
            arregloPantalla[index]=='x^2' || arregloPantalla[index]=='RAIZ' ||
            arregloPantalla[index]=='/' || arregloPantalla[index]=='x' ||
            arregloPantalla[index]=='-' || arregloPantalla[index]=='+') {
                contOperador++;
            }
    }
    arregloPantalla=copiaPantalla;
    document.getElementById("pantSup").innerHTML=arregloPantalla;
};

function expone() {};

function raiz() {};

