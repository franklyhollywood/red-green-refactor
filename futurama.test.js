const getQuotes = require('./futurama.js');

describe('getQuotes', () => {
  it('should fetch quotes from the API', async () => {

    const quotes = await getQuotes();

    expect(quotes).toEqual(expect.any('string'));
  });
});
