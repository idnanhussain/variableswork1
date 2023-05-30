console.log("This is my variables file")

let myName = "Idnan"

let myAge = 29

let bornIn = "Warrington"

let favouriteDrink = "Coffee"

console.log(myName)
console.log(myAge)

console.log(`My name is ${myName}, I am ${myAge}, and i was born in ${bornIn}. My favoute drink is ${favouriteDrink}`);

myName = "Danny"

myAge = "30"

bornIn = "Cheshire"

console.log(`my name is ${myName}, I am ${myAge} and i was born in ${bornIn}.`);



// JavaScript program to illustrate 
    // calculation of no. of days between two date 
      
    // To set two dates to two variables
    var date1 = new Date("08/23/1993");
    var date2 = new Date("08/23/2023");
      
    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();
      
    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      
    //To display the final no. of days (result)
    console.log("Total number of days between dates  <br>"
               + date1 + "<br> and <br>" 
               + date2 + " is: <br> " 
               + Difference_In_Days);



console.log("     |      |     |    ")
console.log(" X   |  O   |     |    ")
console.log("     |      |     |    ")
console.log("-----------------------")                       
console.log("     |      |     |    ")
console.log("  X  |  X   |     |    ")
console.log("     |      |     |    ")
console.log("-----------------------")
console.log("     |      |     |    ")
console.log(" O   |      |     |    ")
console.log("     |      |     |    ")