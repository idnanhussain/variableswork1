// //arrow function//

// const favColor = (color) => {
//     console.log(`my favourite color is ${color}.`);
// }

// favColor(red);

// let coffeeGrind = false;
// const pressGrindBeans = () => {
//     if (coffeeGrinding) {
//         console.log("stopping the grind");
//         coffeeGrinding = false;

//     } else {
//         console.log("grinding is about to begin");
//         coffeeGrinding = true;
//     }
// }


// consts cashWithdrawal = (amount, accAmount) => {
//     console.log("withdrawing ${amount} from account, new balance is ${accAmount - amount}");




// const addTwoNumbers = (numOne, numtwo) => {
//     return numOne + numtwo;

    // }
    // let result = addTwoNumbers(7, 3) - 5;

    // console.log(result);



    // Task 1//

    // Arrow function for factorial calculation
//     const factorial = (n) => {
//         if (n === 0 || n === 1) {
//             return 1;
//         } else {
//             return n * factorial(n - 1);
//         }
//     };
  
//     // Example usage
// console.log(factorial(33));
    

// task 2// 
// let orderCount = 0;

// const takeOrder = (topping, size) => {
//   console.log(`Pizza with ${topping} and size ${size}`);
//   orderCount++;
// };

// takeOrder("pineapple", "large");
// takeOrder("mushroom", "medium");
// takeOrder("pepperoni", "small");

// console.log(`Total orders taken: ${orderCount}`);

//Task 3// 

let pinNumber = "1234"; // Correct PIN number
let accountBalance = 1000; // Account balance

const withdrawCash = (requestedAmount, enteredPin) => {
  // Check if the PIN number is correct
  if (enteredPin === pinNumber) {
    // Check if the account balance is sufficient
    if (accountBalance >= requestedAmount) {
      // Withdraw the cash
      accountBalance -= requestedAmount;
      console.log(`Successfully withdrew $${requestedAmount}. Remaining balance: $${accountBalance}`);
    } else {
      console.log("Insufficient account balance. Unable to withdraw cash.");
    }
  } else {
    console.log("Invalid PIN number. Unable to withdraw cash.");
  }
};

// Example usage
withdrawCash(500, "1234"); // Correct PIN and sufficient balance
withdrawCash(1500, "1234"); // Correct PIN but insufficient balance
withdrawCash(200, "5678"); // Incorrect PIN

