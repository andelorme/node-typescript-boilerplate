import {describe, expect, test} from '@jest/globals';

describe('hello test', () => {
  test(' 1 + 1 = 2', () => {
    expect(1 + 1).toBe(2);
  });
});