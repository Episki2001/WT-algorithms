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
const tensDigits = ["Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
const nextZeroes = ["","Thousand","Million"];


/**
 * This function returns the word equivalent of numbers between 1 to 999 it will be used if the numbers
 * continue to scale for ease of code
 * @param {n} A Number between 1 to 999
 * @returns The name of the number
 */
function oneToNineHundredNinetyNine(n){
  let word = "";

  if(n >= 100 && n < 1000)
    word += digitNames[Math.floor(n/100)] + " Hundred" + " ";

  // eleven to nineteen
  if(Math.floor(n % 100 / 10) == 1) {
    word += tenToNineteen[n%10];
  } 
  else if (Math.floor(n % 100 / 10) > 1) {
    word += tensDigits[Math.floor((n % 100 / 10)) - 2];
    if(n%10 != 0)
      word += "-" + digitNames[n % 10];
  } else word += digitNames[n%10];
  
  return word;
}

/**
 * This function returns the word equivalent of numbers between 1 to 9999
 * @param {n} A Number between 1 to 9
 * @returns The name of the number
 */
function numToWord(n) {
  let word = "";
  let numLength = n.toString().length;

  for(let i = numLength - 1; i > 3; i-=3) {
    word += oneToNineHundredNinetyNine(Math.floor(n / Math.pow(1000,Math.floor(i/3)))) + " " + nextZeroes[Math.ceil(i/3) - 1]+ " ";
    n = n % Math.pow(1000, Math.floor(i/3));
  }
  
  word += oneToNineHundredNinetyNine(n);

  return word;
}

console.log(numToWord(102220812))