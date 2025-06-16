/**
 * @module math
 * @description A collection of mathematical utility functions
 */

/**
 * @function sum
 * @description Adds two numbers together
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The sum of a and b
 * @example
 * sum(2, 3) // returns 5
 * sum(-1, 1) // returns 0
 */
export const sum = (a, b) => a + b;

/**
 * @function subtract
 * @description Subtracts the second number from the first
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The difference between a and b
 * @example
 * subtract(5, 3) // returns 2
 * subtract(1, 1) // returns 0
 */
export const subtract = (a, b) => a - b;

/**
 * @function multiply
 * @description Multiplies two numbers together
 * @param {number} a - The first number
 * @param {number} b - The second number
 * @returns {number} The product of a and b
 * @example
 * multiply(2, 3) // returns 6
 * multiply(-2, 3) // returns -6
 */
export const multiply = (a, b) => a * b;

/**
 * @function divide
 * @description Divides the first number by the second
 * @param {number} a - The first number (dividend)
 * @param {number} b - The second number (divisor)
 * @returns {number} The quotient of a divided by b
 * @throws {Error} If b is 0 (division by zero)
 * @example
 * divide(6, 2) // returns 3
 * divide(5, 2) // returns 2.5
 * @example
 * // This will throw an error
 * divide(5, 0) // throws Error: Division by zero
 */
export const divide = (a, b) => {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
};

/**
 * @function power
 * @description Raises a number to the power of another
 * @param {number} a - The base number
 * @param {number} b - The exponent
 * @returns {number} The result of a raised to the power of b
 * @example
 * power(2, 3) // returns 8
 * power(2, 0.5) // returns 1.4142135623730951
 */
export const power = (a, b) => a ** b;
