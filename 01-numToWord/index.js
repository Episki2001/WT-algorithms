/**
 * Create a program that converts a number input to words
 * `function numToWord(n: number): string {}`
 * input n is 1 to 99
 *
 * coordinate with repository admin for further instructions
*/

const digitNames = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"]
const tenToNineteen = ["Ten","Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", 
      "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const tensDigits = ["Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"]
/**
 * This function returns the word equivalent of numbers between 1 to 99
 * @param {n} A Number between 1 to 9
 * @returns The name of the number
 */
function numToWord(n) {
  let word = "";

  if(n < 10)
    word += digitNames[n%10];
  else if(n < 20)
    word += tenToNineteen[n%10];
  else  {
    word += tensDigits[Math.floor((n/10)) - 2]
    if(n%10 != 0)
      word += "-" + digitNames[n%10];
  }
  
  return word;
}

for(let i = 0; i < 100; i++) {
  console.log(numToWord(i));
}