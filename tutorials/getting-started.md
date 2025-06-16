# Getting Started with Math Utilities

> **Tutorial 1 of 3** - Start here if you're new to the project

This tutorial will help you get started with our math utility functions.

## Installation

First, install the package:

```bash
pnpm install
```

## Basic Usage

The math utilities provide basic arithmetic operations. Here's how to use them:

```javascript
import { sum, subtract, multiply, divide, power } from './main.js';

// Addition
console.log(sum(2, 3));      // 5
console.log(sum(-1, 1));     // 0

// Subtraction
console.log(subtract(5, 3)); // 2
console.log(subtract(1, 1)); // 0

// Multiplication
console.log(multiply(2, 3)); // 6
console.log(multiply(-2, 3)); // -6

// Division
console.log(divide(6, 2));   // 3
console.log(divide(5, 2));   // 2.5

// Power
console.log(power(2, 3));    // 8
console.log(power(2, 0.5));  // 1.4142135623730951
```

## Error Handling

The `divide` function includes error handling for division by zero:

```javascript
try {
  divide(5, 0);
} catch (error) {
  console.error(error.message); // "Division by zero"
}
```
