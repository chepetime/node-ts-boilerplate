import { sum } from '@/utils/math';

describe('Math operations', () => {
  test('sum() returns `3`', async () => {
    expect(sum(1, 2)).toEqual(3);
  });
});
