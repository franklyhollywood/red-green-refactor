const getQuotes = require('./futurama.js');

describe('getQuotes', () => {
  it('should fetch quotes from the API', async () => {
    const quotes = await getQuotes();

    const quoteResult = [
      {
        image:
          'https://res.cloudinary.com/dzxqhkyqd/image/fetch/c_scale,w_500/https://res.cloudinary.com/dzxqhkyqd/image/upload/v1552429540/bender.png',
        item: 'Bender',
        quote: `He's a loser; he's the lobster equivalent of Fry.`,
      },
      {
        image:
          'https://res.cloudinary.com/dzxqhkyqd/image/upload/v1554904014/farnsworth.png',
        item: 'Professor Farnsworth',
        quote: expect.any(String),
      },
    ];

    expect(quotes).toEqual(quoteResult);
  });
});
