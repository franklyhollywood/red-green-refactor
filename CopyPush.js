function copyPush(array, item) {
  const newarr = [...array, item];

  return newarr;
}

module.exports = copyPush;

//oops we were supposed to return a copy
//add another test that makes sure that the original array is unchanged
//update code, use spread to copy and append
