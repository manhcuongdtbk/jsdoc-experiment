import { sum, subtract, multiply, divide, power } from './main.js';
import { test } from 'node:test';
import assert from 'node:assert';

test('sum function', async (t) => {
  await t.test('adds two positive numbers', () => {
    assert.strictEqual(sum(2, 3), 5);
  });

  await t.test('adds negative and positive numbers', () => {
    assert.strictEqual(sum(-1, 1), 0);
  });
});

test('subtract function', async (t) => {
  await t.test('subtracts two positive numbers', () => {
    assert.strictEqual(subtract(5, 3), 2);
  });

  await t.test('subtracts negative numbers', () => {
    assert.strictEqual(subtract(1, -1), 2);
  });
});

test('multiply function', async (t) => {
  await t.test('multiplies two positive numbers', () => {
    assert.strictEqual(multiply(2, 3), 6);
  });

  await t.test('multiplies with negative numbers', () => {
    assert.strictEqual(multiply(-2, 3), -6);
  });
});

test('divide function', async (t) => {
  await t.test('divides two positive numbers', () => {
    assert.strictEqual(divide(6, 2), 3);
  });

  await t.test('divides with decimal result', () => {
    assert.strictEqual(divide(5, 2), 2.5);
  });

  await t.test('throws error when dividing by zero', () => {
    assert.throws(() => divide(5, 0), {
      message: 'Division by zero'
    });
  });
});

test('power function', async (t) => {
  await t.test('raises to positive power', () => {
    assert.strictEqual(power(2, 3), 8);
  });

  await t.test('raises to fractional power', () => {
    assert.strictEqual(power(2, 0.5), Math.sqrt(2));
  });
});
