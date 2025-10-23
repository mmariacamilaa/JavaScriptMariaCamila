// Reto 1:
let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let operacion = prompt("Elige una operación (+, -, *, /):");
let resultado;

switch (operacion) {
  case "+":
    resultado = num1 + num2;
    break;
  case "-":
    resultado = num1 - num2;
    break;
  case "*":
    resultado = num1 * num2;
    break;
  case "/":
    resultado = num1 / num2;
    break;
  default:
    console.log("Operación no válida");
}

alert("El resultado es: " + resultado);