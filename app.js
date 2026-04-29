let resultadoFinal = 0;
let numero1 = 0;
let numero2 = 0;

function sumar() {
  numero1 = parseFloat(document.getElementById("num1").value);
  numero2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(numero1) || isNaN(numero2)) {
    document.getElementById("resultado").innerText = "Por favor ingresa dos números";
    return;
  }

  resultadoFinal = numero1 + numero2;

  document.getElementById("resultado").innerText =
    "Resultado: " + resultadoFinal;
}

function descargarPDF() {
  if (isNaN(numero1) || isNaN(numero2)) {
    alert("Primero debes sumar dos números");
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Resultado de la suma", 20, 20);

  doc.setFontSize(12);
  doc.text("Primer número: " + numero1, 20, 40);
  doc.text("Segundo número: " + numero2, 20, 50);
  doc.text("Resultado: " + resultadoFinal, 20, 65);

  doc.save("resultado-suma.pdf");
}