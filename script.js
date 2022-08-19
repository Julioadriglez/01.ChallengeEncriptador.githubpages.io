var copia;
var texto = document.querySelector('.input-principal');
var mensajeEncriptado = document.querySelector(".mensajeEncriptado");
texto.focus();

function encriptarTexto(){
    var encriptadoE = texto.value.replace(/e/gi,"enter");
    var encriptadoI = encriptadoE.replace(/i/gi,"imes");
    var encriptadoA = encriptadoI.replace(/a/gi,"ai");
    var encriptadoO = encriptadoA.replace(/o/gi,"ober");
    var encriptado = encriptadoO.replace(/u/gi,"ufat");
    mensajeEncriptado.value = encriptado;
    texto.value = "";
}

function desencriptarTexto(){

    var desencriptadoU = texto.value.replace(/ufat/gi,"u");
    var desencriptadoO = desencriptadoU.replace(/ober/gi,"o");
    var desencriptadoA = desencriptadoO.replace(/ai/gi,"a");
    var desencriptadoI = desencriptadoA.replace(/imes/gi,"i");
    var desencriptado = desencriptadoI.replace(/enter/gi,"e");
    mensajeEncriptado.value = desencriptado;
    texto.value = "";
}
        
function copiarTextoEncriptado(){
    mensajeEncriptado.select();
    navigator.clipboard.writeText(mensajeEncriptado.value)
    mensaje.value = "";
    alert("Texto Copiado")
}

