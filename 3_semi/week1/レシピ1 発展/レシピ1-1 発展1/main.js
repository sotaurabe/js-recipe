const fizzBuzz = function(number) {
  for (let i = 0; 1 <= number; i++) {
    if (number % 5 === 0 && number % 3 === 0) {
      console.log("FizzBuzz")
    } else if (number % 5 === 0) {
      console.log("Buzz")
    } else if (number % 3 === 0) {
      console.log("Fizz")
    } else {
      console.log(i)
    }
  }
}

fizzBuzz(15)
