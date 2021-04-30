const display = document.getElementById("display")

//const button1 = document.getElementById("button-1")
//const button2 = document.getElementById("button-2")
//const button3 = document.getElementById("button-3")
//const button4 = document.getElementById("button-4")
//const button5 = document.getElementById("button-5")
//const button6 = document.getElementById("button-6")
//const button7 = document.getElementById("button-7")
//const button8 = document.getElementById("button-8")
//const button9 = document.getElementById("button-9")
//const button0 = document.getElementById("button-0")

const plusButton = document.getElementById("button-+")
const minusButton = document.getElementById("button--")
const multiButton = document.getElementById("button-*")
const perButton = document.getElementById("button-/")

const point = document.getElementById("button-.")

const equarlButton = document.getElementById("button-=")
const clearButton = document.getElementById("button-C")

let count = 0
let total = 0

const getPointLength = function(v) {
  if (v.toString().includes(".")) {
    let array = v.toString().split(".")
    return array[1].length
  } else {
    return 0
  }
}

function up(n) {
  if (total.toString().includes(".")) {
    //total = total.replace(".", "")
    total = Number(total)
    let s = 10 ** (getPointLength(total) + 1)
    let f = n / s
    total = total + f
    console.log(total)
    total = Math.round(total * s)
    console.log(total)
    total = total / s
    console.log(total)
    f = 0
    display.textContent = total
  } else {
    total = total * 10 + n
    display.textContent = total
  }
}

clearButton.onclick = function() {
  total = 0
  display.textContent = ""
}

point.onclick = function() {
  if (getPointLength(total) === 0) {
    total = total + "."
    display.textContent = total
  }
}

plusButton.onclick = function() {
  count = total
  total = 0

  equarlButton.onclick = function() {
    total = count + total
    count = 0
    display.textContent = total
  }
}

minusButton.onclick = function() {
  count = total
  total = 0

  equarlButton.onclick = function() {
    total = count - total
    count = 0
    display.textContent = total
  }
}

multiButton.onclick = function() {
  count = total
  total = 0

  equarlButton.onclick = function() {
    total = count * total
    count = 0
    display.textContent = total
  }
}

perButton.onclick = function() {
  count = total
  total = 0

  equarlButton.onclick = function() {
    total = count / total
    count = 0
    display.textContent = total
    console.log(getPointLength(total))
  }
}
