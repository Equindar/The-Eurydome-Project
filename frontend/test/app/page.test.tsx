// Test Subject
import Page from '@/app/[lng]/(main)/page';
import { render, screen } from '@testing-library/react';
import { describe } from 'node:test';
import { expect, test } from 'vitest';

describe('Test Suite: Basic-Tests', () => {
  test.skip('Testing h1-Tag in Page', async () => {
    render(<Page params={{ lng: 'de' }} />);
    expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined();
  });

  test.each([
    [1, 1, 2],
    [1, 2, 3],
    [3, 5, 8],
  ])('add (%i, %i) -> %i', (a, b, expected) => {
    expect(a + b).toBe(expected);
  });
});
