# Advanced Usage

> **Tutorial 2 of 3** - For users familiar with the basics

This tutorial covers advanced usage patterns and best practices for the math utilities.

## Chaining Operations

You can chain multiple operations together:

```javascript
import { sum, multiply, divide } from './main.js';

// Calculate average of three numbers
const average = (a, b, c) => divide(sum(sum(a, b), c), 3);

console.log(average(1, 2, 3)); // 2
```

## Working with Arrays

You can use the math utilities with array methods:

```javascript
import { sum, multiply } from './main.js';

const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
const total = numbers.reduce((acc, curr) => sum(acc, curr), 0);
console.log(total); // 15

// Multiply all numbers
const product = numbers.reduce((acc, curr) => multiply(acc, curr), 1);
console.log(product); // 120
```

## Error Handling Best Practices

Always wrap division operations in try-catch blocks:

```javascript
import { divide } from './main.js';

function safeDivide(a, b, defaultValue = 0) {
  try {
    return divide(a, b);
  } catch (error) {
    console.warn(`Division failed: ${error.message}`);
    return defaultValue;
  }
}

console.log(safeDivide(5, 0)); // 0
console.log(safeDivide(10, 2)); // 5
```

## Performance Considerations

- The math utilities are optimized for basic arithmetic operations
- For large arrays, consider using native array methods first
- Use the power function sparingly as it's more computationally expensive
