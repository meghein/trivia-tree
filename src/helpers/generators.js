// Loops through an array and prints a new randomly ordered array of a specified length.
export function generateRandomArr(arr, newLength) {
  const resultsArr = [];
  for (let i = 0; i < newLength; i++) {
    const newElm = arr[Math.floor(Math.random() * arr.length)];
    resultsArr.includes(newElm) ? newLength += 1 : resultsArr.push(newElm);
  }
  return resultsArr;
};

// Creates an answers object that holds booleans for each answer
export function generateAnswersKey(incorrect, correct) {
  const answersObj = {};
  answersObj[correct] = true; 
  for (const wrong of incorrect) {
    answersObj[wrong] = false;
  }
  return answersObj
}