const capatilizeFilter = require('./CapitalizeFilter.js');

describe('capatilizeFilter', () => {
    it('capitalizes all strings in array and filter out any string that start with the letter F/f', () => {
        const noCap = ['animal', 'ball', 'cookie', 'dog', 'elephant', 'fear', 'gold']

        expect(capitalizeFilter(noCap)).toEqual(['ANIMAL', 'BALL', 'COOKIE', 'DOG', 'ELEPHANT', 'GOLD'])
    }
});
``