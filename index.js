// 2. Write a program to check if a string or word or number is palindrome ?
// Examples of palindrome words are: racecar, madam.

// const checkIsPalindrome = (str) => {
//   let _tempReverse = "";
//   for (let i = str.length; i >= 0; i--) {
//     _tempReverse += str.charAt(i);
//   }
//   str == _tempReverse ? console.log("True") : console.log("False");
// };
// checkIsPalindrome("madam");

// check is palindrom is second ways check string

const checkIsPalindrome = (str) => {
  let isPalindrom = "";
  console.log("length of string is :: ", str.length);
  for (let i = str.length; i >= str.length / 2; i--) {
    if (str.charAt(i - 1) != str.charAt(str.length - i)) {
      isPalindrom = "false";
      break;
    } else {
      isPalindrom = "True";
    }
  }
  console.log("isPalindrom :: ", isPalindrom);
};
// checkIsPalindrome("4334");

// check number is palindrom
const checkNumberIsPalindrom = (num) => {
  /*
  454
   first task is reverse the number 
   after that check is equal or not    
   100%10 = 0
   108%10 = 8
   10%10=0
   1%10 =1
  */
  let _tempNumber = num;
  let _reversNumber = 0;
  while (_tempNumber > 0) {
    let remender = Math.floor(_tempNumber % 10);
    _tempNumber = Math.floor(_tempNumber / 10);
    _reversNumber = _reversNumber * 10 + remender;
  }

  console.log(
    "if both are equal then its palindrom number :: ",
    _reversNumber == num
  );
};
// checkNumberIsPalindrom(344);

// 3. Write a program to check if value/target exists or not in ascending array in O(log n) time complexity ??
// console.log(customInArray([1, 3, 5, 6, 9, 14, 29, 57, 89], 29));

const checkTargerExistOrNot = (arr, target) => {
  /*
In this case we need to know about binary search 
if we have sorted arr like 1,2,3,4,5,6 and our target is 4
so we need just start point endpoint and middle points 
let start point is = 0 , end points is arr.length-1 and
middler point  = start+end/2
0+3/2 = 
*/
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    console.log(middle);
    if (arr[middle] == target) {
      console.log("Its have value");
      return;
    } else if (arr[middle] < target) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
};
// checkTargerExistOrNot([1, 2, 3, 4, 5], 2);

//4. Write a program to get total vowel count from String ?

const getVowelCount = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (["a", "e", "i", "o", "u"].includes(str.charAt(i))) {
      console.log("e");
      count++;
    }
  }
  console.log(count, "count");
};
// getVowelCount("aeiou");

// 5. Write a program to prints factorial of any number ?

const factorialNumbers = (num) => {
  /*
    factorial number is nothing but a number of multiplication of all the integers small than
    that positive integer
    like if need to factorial number of 5 is 120 = 5*4*3*2*1= 120
    first we need check condition the number is greater than 0 
    if number <= 0 return else continue the operations like 
    multiply the number of factorial and decrease the original number 
    */
  let _tempNum = num;
  let factorialNumber = 1;
  while (_tempNum > 0) {
    factorialNumber = factorialNumber * _tempNum;
    _tempNum--;
  }
  console.log(factorialNumber, "factorial number");
};
// factorialNumbers(5);
//https://www.linkedin.com/pulse/javascript-most-commonly-asked-data-structure-questions-sanjay-kumar

// 6. Write a program for check number is prime or not ?
