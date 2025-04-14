/**
example JavaScript function (exported):
---------------------------------------

export function nameOfTheFunction(arg1, arg2, arg3) {
  const array1 = [1, 2, 3, 4, 5];
  const array2 = ["a", "b", "c", "d", "e"];

  for (let index = 1; index < 5; index++) {
    array2[index] = "x"; // elements inside `const` arrays can be reassigned
  } // array2 is now equal to ["x", "x", "x", "x", "x"]

  const stringAsArray = "abcde".split(""); // stringAsArray equals ["a", "b", "c", "d", "e"]
  const arrayAsString = stringAsArray.join(""); // arrayAsString equals "abcde"

  "abcde".includes("c"); // true
  "abcde".includes("x"); // false
  "ABCDE".toLowerCase(); // "abcde"

  return 42; // value to return from the function
}
*/
export const evaluateGuess = (guess, answer) => {
  if (guess === "" && answer === "") {
    return "";
  }
  let result = "";

  for (let i = 0; i < guess.length; i++) {
    if (isRightLetterInTheRightPosition(answer[i], guess[i])) {
      result += "g";
    } else if (isRightLetterInWrongPosition(answer, guess[i])) {
      result += "o";
    } else {
      result += "-"; //letter not in the answer
    }
  }

  return result;
}

export const evaluateGuessV2 = (guess, answer) => {
  if (guess === "" && answer === "") {
    return "";
  }
  let result = "";
  let lettersAlreadyDetected = new Set();

  for (let i = 0; i < guess.length; i++) {
    if (isLetterAlreadyDetected(guess[i], lettersAlreadyDetected)) {
      result += "-";
      continue;
    }
    if (isRightLetterInTheRightPosition(answer[i], guess[i])) {
      result += "g";
    } else if (isRightLetterInWrongPosition(answer, guess[i])) {
      result += "o";
    } else {
      result += "-"; //letter not in the answer
    }
    lettersAlreadyDetected.add(guess[i]);
  }

  return result;
}

function isRightLetterInTheRightPosition(guessLetter, answerLetter) {
  return guessLetter === answerLetter;
}

function isRightLetterInWrongPosition(guess, answerLetter) {
  return guess.includes(answerLetter);
}

function isLetterAlreadyDetected(guessLetter, lettersAlreadyDetected) {
  return lettersAlreadyDetected.has(guessLetter);
}
