var list = []; //Defino lista vacía para almacenar los numeros agregados.
var sum = 0;

const resultsDiv = document.getElementById("results");
function updateResults() {
  if (list.length != 0) {
    let prom = sum / list.length; //Calculo promedio
    let max = Math.max(...list); //Calculo mayor
    let min = Math.min(...list); // Calculo menor
    // Retorno HTMl
    resultsDiv.innerHTML =
      "<b>Cantidad:</b> " +
      list.length +
      " <br> <b> Promedio:</b>" +
      prom +
      " <br> <b> Mayor:</b>" +
      max +
      " <br> <b> Menor:</b>" +
      min;
  } else {
    resultsDiv.innerHTML = "<p> Actualmente no hay valores registrados </p>";
  }
}

updateResults(); //Este updateResults sirve para la primera vez que se abre la página.

// Manejo lógica del botón agregar
const calcButton = document.getElementById("calc");
calcButton.addEventListener("click", function () {
  const number = document.getElementById("number").value;
  if (number) {
    list.push(number);
    sum += parseInt(number);
    updateResults();
  } else {
    alert("Debe ingresar un numero");
  }
});

//Manejo lógica de reset
const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", function () {
  list = [];
  sum = 0;
  updateResults();
});
