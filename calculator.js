function calculator(firsNumber, secondNumber, sign) {
  switch (sign) {
    case "+":
      return (firsNumber += secondNumber);
    case "-":
      return (firsNumber -= secondNumber);
    case "*":
      return (firsNumber *= secondNumber);
    case "/":
      return (firsNumber /= secondNumber);
  }
}
console.log(calculator(1, 2, "+"));
