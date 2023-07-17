const { stringLength, reverseString } = require('./index.js');
// Length of string

describe('String Length', () => {
  test('should return the correct length of a string', () => {
    expect(stringLength('Hello')).toBe(5);
  });

  test('should reverse a string correctly', () => {
    expect(reverseString('Hello')).toBe('olleH');
  });
});