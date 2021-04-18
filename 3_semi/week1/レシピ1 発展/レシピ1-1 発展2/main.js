const count = function(number) {
  for (let n = 1; n < number; n++) {
    if (n.toString().includes("3")) {
      console.log("!!!!!")
    } else {
      console.log(n)
    }
  }
}

count(100)
