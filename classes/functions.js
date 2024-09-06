//control stractures

// function to calculate age of a student based on their birth year

// function age() {
//   let currentYear = 2024;
//   let BirthYear = 2003;
//   console.log(currentYear - BirthYear);
// }
// age();

// function to issue bread and change to cutomers after a purchase,
let breadPrice = 50;
let ksh = 50;

function shop() {
  if (ksh === 50) {
    console.log("Enjoy Your Bread");
  } else if (ksh > 50) {
    let change = ksh - breadPrice;
    console.log("Enjoy bread,your change is: " + change + " ksh");
  }
}

shop();

// function to check time, and if time is less than 11.59 output message good morning
//if time is greter then 11.59 but less than 3.0 message good afternoon,
// otherwise good evening
