//activity 1//

let age = 18;

let country = ("Uk");

if (age > 17 && country== "uk") {console.log("Yes, I can serve you.");
} else {
  console.log("You aren't old enough.");
}


//activity 2// 

let topping = "mushrooms";

switch (topping) {
  case "mushrooms":
    console.log("These are important ingredients for my pizza.");
    break;
  case "olives":
    console.log("These are important ingredients for my pizza.");
    break;
  case "pepperoni":
    console.log(`I don't mind having ${topping}, but it should not be on a pizza.`);
    break;
  default:
    console.log(`I'm not a fan of ${topping} on pizza.`);
}

//activity 3

let password = "secure1";

if (password.length < 7) {
  console.log("The password is too short.");
} else {
  console.log(`The password is: ${password}`);
}

// activity 3 stretch//

let num = 15;

if (num % 3 === 0 || num % 5 === 0) {
  console.log("This number is divisible by 3 or 5.");
} else {
  console.log("This number is not divisible by 3 or 5.");
}

//activity 4//

// let num = 18;

// if (num % 3 === 0 && num % 5 === 0) {
//   console.log("fizz buzz");
// } else if (num % 3 === 0) {
//   console.log("fizz");
// } else if (num % 5 === 0) {
//   console.log("buzz");
// } else {
//   console.log(num);
// }

//Activity 5

// let num = 1001;
// let numString = num.toString();
// let reversedString = numString.split('').reverse().join('');

// if (numString === reversedString) {
//   console.log("The number is a palindrome.");
// } else {
//   console.log("The number is not a palindrome.");
// }


// Activity 6//

let time = 8;
let placeOfWork = "Office";
let townOfHome = "Home";

if (time === 7) {
  console.log("I'm at " + townOfHome);
} else if (time === 8) {
  console.log("I'm commuting to " + placeOfWork);
} else if (time === 9) {
  console.log("I'm at " + placeOfWork);
} else {
  console.log("I'm somewhere else.");
}


//activity 7//

let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let vowels = "aeiou";

let lastIndex = -1;

for (let i = string.length - 1; i >= 0; i--) {
  if (vowels.includes(string[i])) {
    lastIndex = i;
    break;
  }
}

console.log("Index of the last vowel:", lastIndex);


//activity 8//

let word = "example";

if (word.charAt(0) === word.charAt(word.length - 1)) {
  console.log(true);
} else 
  console.log(false);


//activity 9//

let num1 = 5;
let num2 = 4;
let sum = num1 + num2;

if (sum % 2 === 0) {
  console.log(sum);
} else {
  console.log(num1 * num2);
}
