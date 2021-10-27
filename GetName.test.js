const getname = require('./GetName.js');

const dog = { name: 'spot', age: 5, weight: '20 lbs' };
const character = { _id: '5cf5679a915ecad153ab68c9', name: 'Aang' };

describe('objectName', () => {
  it('Gets object name from object', () => {
    const name2 = 'Aang';
    const name = 'spot';
    expect(getname(dog)).toEqual(name);
    expect(getname(character)).toEqual(name2);
  });
    
});

