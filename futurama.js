const fetch = require('cross-fetch');

const getQuotes = async () => {
  const res = await fetch('futuramaapi.herokuapp.com/api/quotes?search=Fry');
  const body = await res.json();
  console.log(body);
  return body.map((item) => {
    return { item: item.character, quote: item.quote, image: item.image };
  });
};

module.exports = getQuotes;
