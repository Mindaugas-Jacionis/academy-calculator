function render(result) {
  document.getElementById("output").textContent = result;
}

document.getElementById("actions").addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    let result = null;
    const firstNumber = Number(
      document.querySelector("#inputs > input[type=number]:nth-child(1)").value
    );
    const secondNumber = Number(
      document.querySelector("#inputs > input[type=number]:nth-child(2)").value
    );

    switch (event.target.name) {
      case "sum":
        result = firstNumber + secondNumber;
        break;
      case "subtraction":
        result = firstNumber - secondNumber;
        break;
      case "division":
        result = firstNumber / secondNumber;
        break;
      case "addition":
        result = firstNumber * secondNumber;
        break;
      case "modulus":
        result = firstNumber % secondNumber;
        break;
      default:
        break;
    }

    render(result);
  }
});
