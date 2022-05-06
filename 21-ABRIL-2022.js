const pantSup = document.getElementById("pantSup");
const pantInf = document.getElementById("pantInf");

let resultado = 0;
var contPantalla = 0;
let contOperador = 0;
let contPunto = 0;
let arregloPantalla = "";
let arregloAuxiliar = "";
let pantalla = "";
let ultimoValor;
let ultOperador = "";
let numero = [0, 0, 0];
let operador = false;
let lastNumber;

function inserta(tecla) {
    if (tecla==='/') {
        if (contOperador === 0) {
            numero[0] = Number(arregloPantalla);
            ultOperador = 1;
            lastNumber = ++arregloPantalla.length;
            contPunto = 0;
            operador = true;
          }
          contOperador++;
    } else if (tecla==='x') {
        if (contOperador === 0) {
            numero[0] = Number(arregloPantalla);
            ultOperador = 2;
            lastNumber = ++arregloPantalla.length;
            contPunto = 0;
            operador = true;
          }
          contOperador++;
    } else if (tecla==='-') {
        if (contOperador === 0) {
            numero[0] = Number(arregloPantalla);
            ultOperador = 3;
            lastNumber = ++arregloPantalla.length;
            contPunto = 0;
            operador = true;
          }
          contOperador++;
    } else if (tecla==='+') {
        if (contOperador === 0) {
            numero[0] = Number(arregloPantalla);
            ultOperador = 4;
            lastNumber = ++arregloPantalla.length;
            contPunto = 0;
            operador = true;
          }
          contOperador++;
    } else if (tecla==='.') {
        contPunto++;
    } 
    
  if (contPunto <= 1 && contOperador <= 1 && contPantalla < 22) {
    arregloPantalla += ("" + tecla);
    pantSup.innerHTML = arregloPantalla;
    contPantalla++;
  }
  ultimoValor = tecla;
}

function borraPantalla() {
  contPantalla = 0;
  contPunto = 0;
  contOperador = 0;
  operador = false;
  arregloPantalla = "";
  pantSup.innerHTML = arregloPantalla;
  pantInf.innerHTML = arregloPantalla;
}

function imprimeResultado() {
  if (operador) {
    for (let i = lastNumber; i < arregloPantalla.length; i++) {
      arregloAuxiliar += arregloPantalla[i];
    }
    numero[1] = Number(arregloAuxiliar);
    arregloAuxiliar = "";
    let result;
    if (ultOperador === 1) {
        result = divi(numero[0], numero[1]);
    }
    if (ultOperador === 2) {
        result = multi(numero[0], numero[1]);
    }
    if (ultOperador === 3) {
        result = resta(numero[0], numero[1]);
    }
    if (ultOperador === 4) {
        result = suma(numero[0], numero[1]);
    }
    borraPantalla();
    pantInf.innerHTML = result;
  }
}

function elimina() {
  contPantalla -= 1;
  contPunto = 0;
  contOperador = 0;
  let copiaPantalla = "";
  for (let index = 0; index < arregloPantalla.length - 1; index++) {
    copiaPantalla += arregloPantalla[index];
    if (arregloPantalla[index] === ".") contPunto--;
    if (
      arregloPantalla[index] === "/" ||
      arregloPantalla[index] === "x" ||
      arregloPantalla[index] === "-" ||
      arregloPantalla[index] === "+"
    ) {
      ultOperador="";
      contOperador--;
      operador = false;
    }
  }
  arregloPantalla = copiaPantalla;
  pantSup.innerHTML = arregloPantalla;
}

function suma(a, b) {
  return a + b;
};

function resta(b, c) {
  return b - c;
};

function multi(c, d) {
  return c * d;
};

function divi(d, e) {
  return d / e;
};
