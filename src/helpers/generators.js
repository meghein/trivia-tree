// Loops through an array and prints a new randomly ordered array of a specified length:
export function generateRandomArr(arr, newLength) {
  const resultsArr = [];
  for (let i = 0; i < newLength; i++) {
    const newElm = arr[Math.floor(Math.random() * arr.length)];
    resultsArr.includes(newElm) ? newLength += 1 : resultsArr.push(newElm);
  }
  return resultsArr;
};

// Creates a randomly ordered array of answers:
export function generateRandomAnswers(correct, incorrect) {
  const answersArr = [correct]
  for (const answer of incorrect) {
    answersArr.push(answer)
  }
  return generateRandomArr(answersArr, answersArr.length)
}

// Creates an answers object that holds booleans for each answer:
export function generateAnswersKey(correct, incorrect) {
  const answersObj = {};
  answersObj[correct] = true; 
  for (const wrong of incorrect) {
    answersObj[wrong] = false;
  }
  return answersObj
}

export function generateCorrect(options, answers, choice) {
  const results = []
  options.map((option, index) => {
    if (option === choice && answers[choice]) {
      results.push(
        <li
          key={index}
          className={`opt${index +1}`}
          style={{backgroundColor: 'green'}}
        >
          {option}
        </li>
      )
    } else {
      results.push(<li key={index} className={`opt${index +1}`}>{option}</li>)
    }
  })
  return results;
}

export function generateIncorrect(options, answers, choice) {
  const results = []
  options.map((option, index) => {
    if (option === choice && !answers[choice]) {
      results.push(
        <li
          key={index}
          className={`opt${index +1}`}
          style={{backgroundColor: 'red'}}
        >
          {option}
        </li>
      )
    } else if (option === answers[option] && answers[option]) {
      results.push(
        <li
          key={index}
          className={`opt${index +1}`}
          style={{backgroundColor: 'green'}}
        >
          {option}
        </li>
      )
    } else {
      results.push(<li key={index} className={`opt${index +1}`}>{option}</li>)
    }
  })
  return results;
}



