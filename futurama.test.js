const getQuotes = require('./futurama.js');

describe('getQuotes', () => {
  it('should fetch quotes from the API', async () => {
    const quotes = await getQuotes();

    const quoteResult = [
      {
        image: expect.any(String),
        item: expect.any(String),
        quote: expect.any(String),
      },
      {
        image: expect.any(String),
        item: expect.any(String),
        quote: expect.any(String),
      },
    ];

    expect(quotes).toEqual(quoteResult);
  });
});
