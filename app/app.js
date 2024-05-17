let theNumber = document.getElementById("table");
let tableTitle = document.getElementById("tableTitle");
let tableBody = document.getElementById("tableBody");
function tableGenerator() {
  reset();
  if (theNumber.value == "") {
    tableTitle.innerText = "Please enter a valid number";
    tableBody.innerText = "";
  } else {
    for (let counter = 1; counter <= 20; counter++) {
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
