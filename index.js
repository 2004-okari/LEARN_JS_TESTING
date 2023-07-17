// Length of string 
const stringLength = str => {
  const length = str.length;
  return length;
}

// Reverse string
const reverseString = str => {
  return str.split('').reverse().join('');
}

// Calculator class

class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  // Addition
  add() {
    return this.num1 + this.num2;
  }

  //  Subtraction
  subtract() {
    return this.num1 - this.num2;
  }

  //  Multiplication
  multiply() {
    return this.num1 * this.num2;
  }

  // Divide
  divide() {
    return this.num1 / this.num2;
  }
}

// Exportations

module.exports.stringLength = stringLength;
module.exports.reverseString = reverseString;