// cmlabs Back-end Dev Pre-assessment Test

// 1. Task 1 - FizzBuzz

// Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) { // If the number is divisible by 3 and 5, print FizzBuzz
    console.log('FizzBuzz');
  } else if (i % 3 === 0) { // If the number is divisible by 3, print Fizz
    console.log('Fizz');
  } else if (i % 5 === 0) { // If the number is divisible by 5, print Buzz
    console.log('Buzz');
  } else { // If the number is not divisible by 3 or 5, print the number
    console.log(i);
  }
}