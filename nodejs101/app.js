function displayEvenNumbers(numbers) {
  for (const number of numbers) {
    if (number % 2 === 0) {
      console.log(number);
    } else console.log("fuck off");
  }
}

displayEvenNumbers([1, 3, 5, 7]);
