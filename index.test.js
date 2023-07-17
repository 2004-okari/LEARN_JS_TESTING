const { stringLength, reverseString, Calculator, capitalizeFirstLetter } = require('./index.js');

// Length of string and reverse string
describe('Tests', () => {
  test('should return the correct length of a string', () => {
    expect(stringLength('Hello')).toBe(5);
  });

  test('should reverse a string correctly', () => {
    expect(reverseString('Hello')).toBe('olleH');
  });
});

// Class methods tests
describe('Class methods', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  })

  test('should return the correct evaluation for addition', () => {
    expect(calculator.add(1,9)).toBe(10);
    expect(calculator.add(2,8)).toBe(10);
    expect(calculator.add(3,-7)).toBe(-4);
    expect(calculator.add(4,26)).toBe(30);
    expect(calculator.add(-5,5)).toBe(0);
    expect(calculator.add(13,4)).toBe(17);
    expect(calculator.add(7,-3)).toBe(4);
  });

  test('should return the correct evaluation for subtracting', () => {
    expect(calculator.subtract(1,9)).toBe(-8);
    expect(calculator.subtract(3,-7)).toBe(10);
    expect(calculator.subtract(4,26)).toBe(-22);
    expect(calculator.subtract(5,5)).toBe(0);
    expect(calculator.subtract(2,8)).toBe(-6);
    expect(calculator.subtract(13,4)).toBe(9);
    expect(calculator.subtract(7,3)).toBe(4);
  });

  test('should return the correct evaluation for multiplication', () => {
    expect(calculator.multiply(1,9)).toBe(9);
    expect(calculator.multiply(2,8)).toBe(16);
    expect(calculator.multiply(3,-7)).toBe(-21);
    expect(calculator.multiply(4,26)).toBe(104);
    expect(calculator.multiply(-5,5)).toBe(-25);
    expect(calculator.multiply(13,4)).toBe(52);
    expect(calculator.multiply(4,3)).toBe(12);
  });

  test('should return the correct evaluation for division', () => {
    expect(calculator.divide(9,3)).toBe(3);
    expect(calculator.divide(-24,6)).toBe(-4);
    expect(calculator.divide(21,14)).toBe(1.5);
    expect(calculator.divide(4,26)).toBeCloseTo(0.15);
    expect(calculator.divide(-5,5)).toBe(-1);
    expect(calculator.divide(13,4)).toBeCloseTo(3.249);
    expect(calculator.divide(7,-3)).toBeCloseTo(-2.33);
  });
});

// Capitalise first letter
describe('capitalise first letter', () => {
  test('should return the correct evaluation for capitalization', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
    expect(capitalizeFirstLetter('Spotify')).toBe('Spotify');
    expect(capitalizeFirstLetter('okari')).toBe('Okari');
    expect(capitalizeFirstLetter('podcasts')).toBe('Podcasts');
    expect(capitalizeFirstLetter('hElLo')).toBe('HElLo');
  })
})