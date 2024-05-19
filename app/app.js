let theNumber = document.getElementById("form-table");

let theMultiplier = document.getElementById("form-multiplier");

let tableTitle = document.getElementById("tableTitle");
let tableBody = document.getElementById("tableBody");
let btn = document.getElementById("btn");

function tableGenerator() {
  reset();
  if (theNumber.value == "" && theMultiplier.value == "") {
    tableTitle.innerText = "Please enter a valid number";
    tableBody.style.display = "none";
  } else {
    for (let counter = 1; counter <= theMultiplier.value; counter++) {
      // console.log(
      //   theNumber.value + " * " + counter + " = " + theNumber.value * counter
      // );
      tableTitle.innerText = "Table of " + theNumber.value;
      tableBody.innerText +=
        theNumber.value +
        " * " +
        counter +
        " = " +
        theNumber.value * counter +
        "\n";
    }
  }
}
function reset() {
  tableTitle.innerText = "";
  tableBody.innerText = "";
}
