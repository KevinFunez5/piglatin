Describe: whatLetter()

test: "tell me if the first item in the string is a vowel"
code: whatLetter("argyle")
expected outcome: (true)

test: "tell me if the first in the string is a vowel, when it's a capital letter"
code: whatLetter("Argyle")
expected outcome: (true)

test: "if string begins with a vowel add 'way' to string"
code: whatLetter("Eagle")
expected outcome: ("Eagleay")


function whatLetter(element) {
  
  const vowelArray = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]

  for (let arrayPosition = 0; arrayPosition <= vowelArray.length -1; arrayPosition ++){
    if (element.charAt(0) === vowelArray[arrayPosition]) {
      element = element.concat("way")
      console.log(element)
    }
  }
}


Describe: whatLetterCon()

test: "if string begins with a consonant return value of true"
code: whatLetterCon("hat")
expected outcome: (true)

test: "if string begins with a consonant that is a capital, return true"
code: whatLetterCon("Hat")
expected outcome: (true)

test: "if word starts with qu should return true"
code: whatLetterCon("quick")
expected outcome: (true)

test: "if word starts with QU should return true"
code: whatLetterCon(" QUick")
expected outcome: (true)




function whatLetterCon(element) {
  element.charAt(0)
  const consonantArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
  const vowelArray = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]

  for (let arrayPosition = 0; arrayPosition <= consonantArray.length -1; arrayPosition ++){
    if (element.charAt(0) === consonantArray[arrayPosition]) {
      return true;
    } 
}

function whatLetterQu(element) {
  const consonantArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
  const vowelArray = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]

  if (element.charAt(0) === consonantArray[12] || element.charAt(0) === consonantArray[33]) {
    if (element.charAt(1) === vowelArray[9] || element.charAt(1) === vowelArray[4]) {
      sliceElement = element.slice(2)
      quayElement = sliceElement.concat("quay")
      return quayElement
    }
  }
}

sliceElement = element.slice(i)


/*
let lowerCaseConsonants = "bcdfghjklmnpqrstvwxyz"
let consonantsUpperCase = lowerCaseConsonants.toUpperCase();

let arrayLower = lowerCaseConsonants.split("");
let arrayUpper = consonantsUpperCase.split("");

let consonantArray = arrayLower.concat(arrayUpper);

console.log(consonantArray)
*/