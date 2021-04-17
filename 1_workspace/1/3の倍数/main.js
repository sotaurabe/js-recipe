/* const number = 24

for (let n = 1; n <= number; n++) {
  if (n % 3 === 0) {
    console.log(n + "!!!!!")
  } else {
    console.log(n)
  }
}  */

const genkiFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!`)
    } else {
      console.log(n)
    }
  }
}

genkiFunction(100)
