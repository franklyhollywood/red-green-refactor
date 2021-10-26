const getname = require('./GetName.js');

const spot = { name: 'spot', age: 5, weight: '20 lbs' };

describe('objectName', () => {
  it('Gets object name from object', () => {
    const name = 'spot';

    expect(getname(spot)).toEqual(name);
  });
    
});
