function calculate(operation) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultElement = document.getElementById("result");

    switch (operation) {
      case 'add':
        resultElement.innerText = "Result: " + (num1 + num2);
        break;
      case 'subtract':
        resultElement.innerText = "Result: " + (num1 - num2);
        break;
      case 'multiply':
        resultElement.innerText = "Result: " + (num1 * num2);
        break;
      case 'divide':
        if (num2 === 0) {
          resultElement.innerText = "Cannot divide by zero";
        } else {
          resultElement.innerText = "Result: " + (num1 / num2);
        }
        break;
      default:
        resultElement.innerText = "Invalid operation";
    }
}
