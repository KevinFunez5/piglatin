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

test: "if string begins with a consonant return value of true"

function whatLetter(element) {
  element.charAt(0)
  const vowelArray = ["A", "E", "I", "O", "U", "a", "e", "i", "o", "u"]
  const consonantArray = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
  for (let arrayPosition = 0; arrayPosition <= vowelArray.length -1; arrayPosition ++){
    if (element.charAt(0) === vowelArray[arrayPosition]) {
      element = element.concat("way")
      console.log(element)
    }
  }
}









/*
let lowerCaseConsonants = "bcdfghjklmnpqrstvwxyz"
let consonantsUpperCase = lowerCaseConsonants.toUpperCase();

let arrayLower = lowerCaseConsonants.split("");
let arrayUpper = consonantsUpperCase.split("");

let consonantArray = arrayLower.concat(arrayUpper);

console.log(consonantArray)
*/