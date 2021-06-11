'use strict';

const palindrome = function (words) {
  //Return true if given string is a palindrome
  //Return false if string is not a palindrome

  //Using replace and regex to our advantage.
  //Also making all letters lowercase here
  const word = words.replace(/[^0-9a-z]/gi, '').toLowerCase();

  //Simply split to array, reverse it and then join it back together
  const reversedWord = word.split('').reverse().join('');

  //simply check if the two are are equal
  //if they are, return true
  //if not, return false
  return word === reversedWord ? true : false;
  //When the string is passed to function, We need to remove non-alphanumeric characters (spaces, symbols, punctuations)
  //and turn everything to lowercase
};

const testWord = '00000600000';

console.log(palindrome(testWord));
