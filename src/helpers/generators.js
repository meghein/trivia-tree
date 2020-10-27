// Loops through an array and prints a new randomly ordered array of a specified length.
export function generateRandomArr(arr, newLength) {
  const resultsArr = [];
  for (let i = 0; i < newLength; i++) {
    const newElm = arr[Math.floor(Math.random() * arr.length)];
    resultsArr.includes(newElm) ? newLength += 1 : resultsArr.push(newElm);
  }
  return resultsArr;
};

export function generateAnswers(incorrect, correct) {
  
}