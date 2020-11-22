import { entities } from './htmlEntities';

// Removes html entities and replaces them with correct symbol:
export function removeEntities(str) {
  for (const entity in entities) {
    if(str.includes(entity)) {
      str = str.replaceAll(entity, entities[entity])
    }
  }
  return str;
}

// Loops through an array and prints a new randomly ordered array of a specified length:
export function generateRandomArr(arr, newLength) {
  const resultsArr = [];
  for (let i = 0; i < newLength; i++) {
    const newElm = arr[Math.floor(Math.random() * arr.length)];
    resultsArr.includes(newElm) ? newLength += 1 : resultsArr.push(newElm);
  }
  return resultsArr;
}

// Creates a randomly ordered array of answers:
export function generateRandomAnswers(correct, incorrect) {
  const answersArr = [removeEntities(correct)];
  for (const answer of incorrect) {
    answersArr.push(removeEntities(answer));
  }
  return generateRandomArr(answersArr, answersArr.length);
}

// Creates an answers object that holds booleans for each answer:
export function generateAnswersKey(correct, incorrect) {
  const answersObj = {};
  answersObj[correct] = true; 
  for (const wrong of incorrect) {
    answersObj[wrong] = false;
  }
  return answersObj;
}

// Creates an array with the choices in the same order as before
// and the correct answer highlighted in green:
export function generateCorrect(options, answers, choice) {
  const correctArr = options.map((option, index) => {
    if (option === choice && answers[choice]) {
      return(
        <button
          key={index}
          className={`option opt${index+1}`}
          style={{backgroundColor: '#6A994E'}}
        >
          {option}
        </button>
      );
    } else {
      return(<button key={index} className={`option opt${index+1}`}>{option}</button>);
    }
  })
  return correctArr;
}

// Creates an array with the choices in the same order as before
// and the user's choice highlighted in red and the correct answer highlighted in green:
export function generateIncorrect(options, answers, choice) {
  const incorrectArr = options.map((option, index) => {
    if (option === choice && !answers[choice]) {
      return(
        <button
          key={index}
          className={`option opt${index+1}`}
          style={{backgroundColor: '#DD6E429D'}}
        >
          {option}
        </button>
      );
    } else if (answers[option]) {
      return(
        <button
          key={index}
          className={`option opt${index+1}`}
          style={{backgroundColor: '#6A994E'}}
        >
          {option}
        </button>
      );
    } else {
      return(<button key={index} className={`option opt${index+1}`}>{option}</button>);
    }
  })
  return incorrectArr;
}