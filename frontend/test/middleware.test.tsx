// Test Subject
import { describe } from 'node:test';
import { expect, test } from 'vitest';

describe('Test Suite: middleware', () => {
  test.each([[10, 10, 20]])('add (%i, %i) -> %i', (a, b, expected) => {
    expect(a + b).toBe(expected);
  });
});
