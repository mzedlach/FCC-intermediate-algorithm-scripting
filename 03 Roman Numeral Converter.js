// FreeCodeCamp - Challenge #3
// Link : https://www.freecodecamp.org/challenges/roman-numeral-converter

// Instructions:  
// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

// # My Solution


function convertToRoman(num) {
  var digits = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var roman = ['M', 'CM','D', 'CD', 'C', 'XC', 'L','XL', 'X', 'IX', 'V','IV', 'I'];
  var convertedToRoman = [];
  
  for ( var i = 0 ; i < digits.length ; i++ ) {
   if ( digits[i] <= num ) {
     while ( digits[i] <= num ){
       num = num - digits[i];
       convertedToRoman.push(roman[i]);
     }
   } else {
     continue;
   }
  }
  return convertedToRoman.join('');
}

convertToRoman(97);
