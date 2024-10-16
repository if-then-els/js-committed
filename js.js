function max(a, b) {
  if (a > b) {
    console.log(a);
  } else {
    console.log(b);
  }
}

// max(2, 5);

// another way of doing it

function maxNum(a, b) {
  return a >= b ? a : b;
}

// console.log(maxNum(3, 4));

function go(a) {
  if (a % 3 === 0 && a % 5 === 0) {
    console.log("FizzBuzz");
  } else if (a % 3 === 0) {
    console.log("Fizz");
  } else if (a % 5 === 0) {
    console.log("buzz");
  } else if (a % 3 !== 0 || a % 5 !== 0) {
    console.log(a);
  }
}

go(15);
