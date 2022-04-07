// Given an array of positive integers representing the values of coins in your possession,
// write a function that returns the minimum amount of change (the minimum sum of money) that you CANNOT create.
// The given coins can have any positive integer value and aren't necessarily unique 
// (i.e., you can have multiple coins of the same value).

// [5, 7, 1, 1, 2, 3, 22]
// 20


// 

const ascending = (a, b) => a - b;
const descending = (a, b) => b - a;

const solution = (inputArray = []) => {
  // Sort coins ascending
  const sortedCoins = inputArray.sort(ascending);
  console.log(sortedCoins);

  const sumCoins = inputArray.reduce((sum, coin) => sum + coin);
  console.log(sumCoins);

  for (let change = 1; change <= sumCoins; change++) {
    console.log('Analyzing change', change);
    const changeCombinations = [];

    if (sortedCoins.includes(change)) {
      console.log('Found exact change');
      changeCombinations.push([change]);

      continue;
    }

    const smallerCoins = sortedCoins.filter((coin) => coin <= change);    

    // 1, 1, 2, 3, 5, 7, 22
    for (let smallerCoinIndex = 0; smallerCoinIndex < smallerCoins.length; smallerCoinIndex++) {
      // == change
    }

    if (changeCombinations.length === 0) {
      return change;
    }
  }

  return sumCoins + 1;
};

solution([5, 7, 1, 1, 2, 3, 22]);

module.exports = solution;

// for (let smallCoinIndex = smallerCoins.length - 1; smallCoinIndex >= 0; smallCoinIndex--) {
    //   const smallCoin = smallerCoins[smallCoinIndex];

    //   smallCoin
      
    // }
