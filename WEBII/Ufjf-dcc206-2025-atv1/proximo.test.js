import { test, expect } from 'vitest';
import { proximo } from './proximo.js';

test('Proximo(0) deve ser 1', () => {
    expect(proximo(0)).toBe(1);
});
test('Proximo(1) deve ser 3', () => {
    expect(proximo(1)).toBe(3);
});
test('Proximo(2) deve ser 5', () => {   
    expect(proximo(2)).toBe(5);
});
test('Proximo(3) deve ser 4', () => {       
    expect(proximo(3)).toBe(4);
});
test('Proximo(4) deve ser 6', () => {
    expect(proximo(4)).toBe(6);
});         