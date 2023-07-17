// Length of string 
const stringLength = str => {
  if (typeof str !== 'string') {
    throw new Error('The value inserted is not a string');
  }

  const length = str.length;

  if ( length < 1 || length > 10 ) {
    throw new Error('The length must be between 1 and 10');
  }

  return length;
}

// Reverse string
const reverseString = str => {
  return str.split('').reverse().join('');
}

// Calculator class

class Calculator {
  // Addition
  add(a, b) {
    return a + b;
  }

  //  Subtraction
  subtract(a, b) {
    return a - b;
  }

  //  Multiplication
  multiply(a, b) {
    return a * b;
  }

  // Divide
  divide(a, b) {
    if (b === 0) {
      throw new Error('Invalid number! Pick a value more than 0');
    }
    return a / b;
  }
}

// Capitalization of first letter in a word
const capitalizeFirstLetter = str => {
  if (typeof str !== 'string') {
    throw new Error('Input must be a string');
  }

  if (str.length === 0) {
    return '';
  }

  return str[0].toUpperCase() + str.slice(1);
}


// Exportations

module.exports.stringLength = stringLength;
module.exports.reverseString = reverseString;
module.exports.Calculator = Calculator;
module.exports.capitalizeFirstLetter = capitalizeFirstLetter;