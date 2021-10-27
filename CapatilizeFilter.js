function capitalizeFilter(array) {}

const newArray = [];

for (const item of array) {
  const upperCase = item.toUpperCase();
  newArr.push(upperCase);

  return newArr.filter((words) => words.startsWith('F'));
}

module.exports = capitalizeFilter;
