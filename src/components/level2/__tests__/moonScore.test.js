import { describe, expect, it } from 'vitest';
import { getMoonScore } from '../utils/moonScore';

describe('getMoonScore', () => {
  // TODO: Add missing test cases here
  // for ALL possible outputs of this helper function
  // Tip: don't repeat implementation details in the test
  // just rely on inputs/outputs
  it('should return blank for score 0', () => {
    const score = getMoonScore(0);
    expect(score).toBe('');
  });

  it('should render half moon if score 10', () => {
    const score = getMoonScore(10);
    expect(score).toMatch(/^(🌗){1}$/);
  });

  it('should render one moon if score 20', () => {
    const score = getMoonScore(20);
    expect(score).toMatch(/^(🌕){1}$/);
  });

  it('should render one moon and a half if score 30', () => {
    const score = getMoonScore(30);
    expect(score).toMatch(/^(🌕){1}(🌗){1}$/);
  });

  it('should render two moons if score 40', () => {
    const score = getMoonScore(40);
    expect(score).toMatch(/^(🌕){2}$/);
  });

  it('should render one moon and a half if score 50', () => {
    const score = getMoonScore(50);
    expect(score).toMatch(/^(🌕){2}(🌗){1}$/);
  });

  it('should render three moons if score 60', () => {
    const score = getMoonScore(60);
    expect(score).toMatch(/^(🌕){3}$/);
  });

  it('should render one moon and a half if score 70', () => {
    const score = getMoonScore(70);
    expect(score).toMatch(/^(🌕){3}(🌗){1}$/);
  });

  it('should render four moons if score 80', () => {
    const score = getMoonScore(80);
    expect(score).toMatch(/^(🌕){4}$/);
  });

  it('should render one moon and a half if score 90', () => {
    const score = getMoonScore(90);
    expect(score).toMatch(/^(🌕){4}(🌗){1}$/);
  });

  it('should render 5 full moons if score 100', () => {
    const score = getMoonScore(100);
    // {n} matches the previous regex token exactly n times
    expect(score).toMatch(/^(🌕){5}$/);
  });
});
