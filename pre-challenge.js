/*Gabe Thexton - Galvanize Pre-Challenge*/

/*Function to perfomr the folloiwng task:
For this challenge, we are interested in finding the phone number whose digits sum to the largest number.
Write a single function that outputs the “largest” phone number in an input array (if multiple numbers are equally large, return the last one).
Assume that the phone numbers are strings of 10 digits separated by dashes.
We encourage you to complete this in Javascript, but you can choose any language.
Your program should be general enough to work with any input, but here is an example of its functionality in Ruby:
largest_phone_number(['123-456-7777', '963-481-7945', '111-222-3333'])
#=> '963-481-7945'
largest_phone_number(['555-555-5555','111-111-1111','555-555-5456','222-121-2121'])
#=> '555-555-5456'
largest_phone_number(['123-456-7899'])
#=> '123-456-7899'
*/

/*Here goes nothing!*/


function largestPhoneNumber () {

  /*Here's some stuff to use later...*/
  var digitSums = [];
  var locCurrentLargest = 0;
  var realMccoy = 0;

  /*Turn the inputs into useful strings*/
  var phoneNumbers = Array.prototype.slice.call(arguments);
  console.log("The phone numbers given were: " + phoneNumbers);
  console.log(" ");

  /*Loop through phoneNumbers and as long as there's another phone number in the call...*/
  for (var a = 0; a < arguments.length; a++) {

    /*Turn the phone number into a variable string*/
    var digitsString = phoneNumbers[a];
    console.log("A phone number: " + digitsString);
    
    /*Create an array from the string*/
    var digitsArray = digitsString.split("");
    console.log("Its' values: " + digitsArray);
    
    /*Chop out the dashes*/
    digitsArray.splice(3, 1);
    digitsArray.splice(6, 1);
    console.log("Minus the dashes: " + digitsArray);

    /*Turn the array string values into integers*/
    for(var i = 0; i < digitsArray.length; i++) {
        digitsArray[i] = +digitsArray[i];
    }
    console.log("Turned into numbers: " + digitsArray);

    /*Add the digits together*/
    /*I really wanted to use reduce() here but I don't understand it well enough yet to make it work*/
    sumDigits = 0;
    for(var b = 0; b < digitsArray.length; b++) {
        sumDigits += digitsArray[b];
    }
    console.log("Added together: " + sumDigits);

    /*Push the result to digitSums*/
    digitSums.push(sumDigits);
    console.log("Current list of digit sums: " + digitSums);
    console.log(" ");
    console.log(" ");
  }

  /*Find the largest number in the array*/
  /*Set up a var to use and make it equal to the largest value in the array*/
  var currentLargest = 0;
  for (var d = 0; d < digitSums.length; d++) {
    if (digitSums[d] >= currentLargest) {
    currentLargest = digitSums[d];
    console.log("Current largest sum is: " + currentLargest);
    
    /*Store the location of the current largest in locCurrentLargest*/
    locCurrentLargest = [d];
    console.log("It's located in the array at: " + locCurrentLargest);
    console.log(" ");
    } else {
        console.log("The largest sum has been found.");
        console.log(" ");
    }
            
  /*Match locCurrentLargest to the relevant value in largestPhoneNumber */
  realMccoy = phoneNumbers[locCurrentLargest];
  }
  console.log("The phone number with the largest sum of its' digits is: " + realMccoy);
}

/*Call the function to see if it works!*/
largestPhoneNumber("303-241-5253", "303-877-0543", "970-555-1234", "503-776-4852", "601-443-6849");
/*                      28        -      40      -        41     -       47      -       45      */
/*largestPhoneNumber("666-666-6666", "222-222-2222", "333-333-3333", "444-444-4444", "555-555-5555");*/
/*largestPhoneNumber("111-111-1111", "222-222-2222", "333-333-3333", "444-444-4444", "555-555-5555");*/

/*The End! - Thank you for your time! - Gabe*/
