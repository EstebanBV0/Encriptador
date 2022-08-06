
let textoencript ="";
function borrartexto(){
    document.getElementById("cuadrotexto").value = ""; /* funcion de borrar el texto con darle clic */
}
function encript() { /* funcion de encriptar */
  document.getElementById("muñ").style.display = "none";
  let textoaencript = document.getElementById("cuadrotexto").value;
  let  encriptado = textoaencript.replace(/e/g, "enter");
  encriptado = encriptado.replace(/i/g, "imes");   /* la funcion replace, remplaza determinado caracter por otro */
  encriptado = encriptado.replace(/a/g, "ai");
  encriptado = encriptado.replace(/o/g, "ober");
  encriptado = encriptado.replace(/u/g, "ifat");
  document.getElementById("resp").style.display = "block"; /* se muestra el textarea*/
  document.getElementById("btoncopiar").style.display = "block"; /* no fue posible por el nombre de clase. Se muestra el boton copiar */
  let textarea = document.getElementById('resp'); 
  textarea.innerHTML = encriptado; /* se escribe en el textarea */
}
function desencrip() {
    document.getElementById("muñ").style.display = "none";
    let textoaencriptado = document.getElementById("cuadrotexto").value;
    let decodificado = textoaencriptado.replace(/enter/g, "e");
    decodificado = decodificado.replace(/imes/g, "i");
    decodificado = decodificado.replace(/ai/g, "a");
    decodificado = decodificado.replace(/ober/g, "o");
    decodificado = decodificado.replace(/ifat/g, "u");
    document.getElementById("resp").style.display = "block";
    document.getElementById("btoncopiar").style.display = "block";
    let textarea = document.getElementById('resp'); 
    textarea.innerHTML = decodificado;        /* muestra el mensaje decodificado en el text area */              
}
function copiartexto(){ /* funcion para copiar con el boton "copiar text" lo que hay en el text area */
    var aux = document.createElement("input"); /* creamos un elemento auxiliar */
    aux.setAttribute("value", document.getElementById("resp").innerHTML); /* leemos lo que hay en el textarea */
    document.body.appendChild(aux); 
    aux.select();
    document.execCommand("copy");/* usamos la funcion excComand para copiar al porta papeles */
    document.body.removeChild(aux); /* borramos el elemento auxiliar */
}