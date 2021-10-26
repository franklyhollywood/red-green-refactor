const capatilizeFilter = require('./CapitalizeFilter.js');

describe('capatilizeFilter', () => {
    it('capitalizes all strings in array and filter out any string that start with the letter F/f', () => {
        const noCap = ['a', 'b', 'c', 'd', 'e', 'f', 'g']

        expect(capitalizeFilter(noCap)).toEqual(['A', 'B', 'C', 'D', 'E', 'G'] 
    )
    }


})