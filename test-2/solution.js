const square = (value) => value * value;
const ascending = (a, b) => a - b;

const solution = (intArray = []) => {
  return intArray.map(square).sort(ascending);
};

module.exports = solution; 
