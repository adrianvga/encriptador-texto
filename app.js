document.getElementById("texto").value = "";

function validarTexto(texto) {
  // Expresión regular para verificar si hay mayúsculas o caracteres especiales
  const regex = /[A-Z!@#$%^&*(),.?":{}|<>]/;
  
  return !regex.test(texto); // Retorna true si no hay mayúsculas ni caracteres especiales
}

function encriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");
  
  //si no encuentra mayusculas o caracteres encripta el mensaje
  if (validarTexto(texto)) {
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("nuevo-texto").innerHTML = textoCifrado;
      tituloMensaje.textContent = "Texto encriptado con éxito";
    } else {
      tituloMensaje.textContent = "Ningún mensaje fue encontrado";
      parrafo.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
      alert("Debes ingresar un texto");
    }
  } else {
    alert("no se permiten mayusculas ni caracteres especiales");
  }
}

function desencriptar() {
  let texto = document.getElementById("texto").value;
  let tituloMensaje = document.getElementById("titulo-mensaje");

  if (validarTexto(texto)) {
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("nuevo-texto").innerHTML = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
      } else {
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        swal("Ooops!", "Debes ingresar un texto", "warning");
      }
  } else {
    alert("no se permiten mayusculas ni caracteres especiales");
  }
}
