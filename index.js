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
/*
A prime number is a number that has only two factors, that is, 1 and the number itself.
means its divide only 1 and itself
to solve this problem  1,  we check the number is greater than 0
2. check the number is not divide half of the lowest number 
2 s3 5 
*/
const checkIsPrimeNumber = (number) => {
  if (number <= 0) return;
  let _tempNum = Math.floor(number / 2);
  let i = 2;
  while (i <= _tempNum) {
    if (number % i == 0) {
      console.log("not prime number");
      return;
    }
    i++;
  }
  console.log("its prime number");
};
// checkIsPrimeNumber(8);

// 7. Write a program to check whether number is perfect number or not ?
// Prime Number: whose SUM of all factors equal to value expect value itself factor.

/*
 A perfect number is a positive integer whose sum of its proper divisors is equal to one.
*/

const checkIsPerfectNumber = (num) => {
  let _temp = Math.floor(num / 2);
  if (num < 0) {
    console.log("Invalid number ");
    return;
  }
  let i = 1;
  let perfectNumber = 0;
  while (i <= _temp) {
    if (num % i == 0) {
      perfectNumber += i;
    }
    i++;
  }
  perfectNumber == num
    ? console.log(num, "is Perfect number")
    : console.log("is Not Perfect number");
};
// checkIsPerfectNumber(27);

// 8. Write a program to find duplicate numbers in an integer array ?

const findDuplicateNumberInArray1 = (arr) => {
  let duplicateArr = [];
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (element == arr[j]) {
        !duplicateArr.includes(element) && duplicateArr.push(element);
      }
    }
  }
  console.log(duplicateArr);
};
const findDuplicateNumberInArray = (arr) => {
  let duplicateArr = [];
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    } else {
      !duplicateArr.includes(arr[i]) && duplicateArr.push(arr[i]);
    }
  }
  console.log(duplicateArr, uniqueArr);
};
// findDuplicateNumberInArray([1, 2, 3, 4, 4, 5]);

// 9. How do you remove duplicates from an integer array ?
const removDuplicatesFromArray = (arr) => {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  console.log(uniqueArr);
};
// removDuplicatesFromArray([1, 2, 3, 4, 4, 5]);

// Q: Write a program, Selena wants to save money for his first car. She puts money in the ABC bank every day. She starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, she will put in $1 more than the day before. On every subsequent Monday, she will put in $1 more than the previous Monday. Given n, return the total amount of money Selena will have in the ABC bank at the end of the nth day.

// const totalAmount = (num) => {
//   let totalAmount = 0;
//   for (let i = 1; i <= num; i++) {
//     let remender = i % 7 == 0 ? 0 : 1;
//     let totalMonday = Math.floor(i / 7) + remender;
//     let day = i % 7 == 0 ? 7 : i % 7;
//     totalAmount += day + totalMonday - 1;
//   }
//   console.log(totalAmount, "total amount...");
// };
// totalAmount(12);

const totalAmount = (num) => {
  let totalAmount = 0;
  for (let i = 1; i <= num; i++) {
    let remainder = i % 7;
    console.log(Math.floor(i / 7) + 1, remainder, "remainder");
    if (remainder === 1) {
      totalAmount += Math.floor(i / 7) + 1;
    } else {
      totalAmount += remainder;
    }
  }
  console.log(totalAmount, "total amount...");
};

totalAmount(12);
