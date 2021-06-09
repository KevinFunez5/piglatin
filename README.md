Describe: pigLatinWay()

Test: "It will add 'way' to the end of words that begin with a, e, i, o, or u."
Code: piglatin("a");
Expected Output: "away"

Describe: pigLatinAy

Test: "It will add 'ay' to the end of words"
code: pigLatinAy ("atc")
Expected Output: ("atcay")

Describe: movesLetters()

Test: "It will move letters to end of word"
code: movesConsonant("c","cat")
Expected Output: "atc"

Describe: startsWith()

Test: "It will determine if a string begins with a vowel"
code: startsWithVowel("alberta")
Expected Output: true

Describe: startsWithConsonant()

Test: "it will determine if a string begins with a consonant"
code: startsWithConsonant()
Expected Output: true

Describe: whichLettersToMove()

Test "It will define which letters to move in a string. Either single consonant, qu, or multiple consonants at the beginning of a word"
Code: whichLettersToMove("quick")
Expected Output: ("qu")

















Goal: We want to return a phrase in PigLatin or one word in PigLatin?

ex phrase: "Here there be dragons, I think."

ex output: "erehay erethay ebay agonsdray, iway inkthay"

split.array

broad function (array) {
  for ( i = 0, array.length-1, i ++) {
    if (vowel) {
      new string = element.Run add way function
      push to finalArray
    } else if (consonant) {
      if (qu) {
        define what to move FUNCTION
        newString = element.move qu in move function 
        newerString = newString.add ay function
        push to finalArray
      } else if (single consonant) {
        define what to move FUNCTION
        newString = element.move single consonant in move function
        newerString = add ay to string function
        push to finalArray
      } else if (multiple consonants) {
        define what to move FUNCTION
        newString = element.move determined character length in move function
        newerString = add ay to string function
        push to finalArray
      }
    }
  finalArray to finalString
  return finalString(should be in origial order and in pigLatin)
}