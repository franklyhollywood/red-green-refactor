const copyPush = require('./CopyPush.js');

describe('CopyPush', () => {
  it('takes an array and pushes a number to the end', () => {
    const arr = [1, 2, 3];
    const item = 4;

    expect(copyPush(arr, item)).toEqual[(1, 2, 3, 4)];
  });
});
