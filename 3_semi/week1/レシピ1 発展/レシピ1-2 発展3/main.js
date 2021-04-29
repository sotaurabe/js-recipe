const display = document.getElementById("display")

const button1 = document.getElementById("button-1")
const button2 = document.getElementById("button-2")
const button3 = document.getElementById("button-3")
const button4 = document.getElementById("button-4")
const button5 = document.getElementById("button-5")
const button6 = document.getElementById("button-6")
const button7 = document.getElementById("button-7")
const button8 = document.getElementById("button-8")
const button9 = document.getElementById("button-9")
const button0 = document.getElementById("button-0")

const plusButton = document.getElementById("button-+")
const minusButton = document.getElementById("button--")
const multiButton = document.getElementById("button-*")
const perButton = document.getElementById("button-/")

const point = document.getElementById("button-.")

const equarlButton = document.getElementById("button-=")
const clearButton = document.getElementById("button-C")

let count = 0
let total = 0

const getPointLength = function(number) {
  let numbers = String(number).split(".")

  return numbers[1] ? numbers[1].length : 0
}

function up(n) {
  total = total * 10 + n
  display.textContent = total
}

clearButton.onclick = function() {
  total = 0
  display.textContent = ""
}

/*point.onclick = function() {
  let len = getPointLength(total)

  button1.onclick = function() {
    count = total
    total = 1
    for (let i = 0; i <= len; i++) {
      total = total / 10
    }
    total = total + count
    count = 0
    display.textContent = total
  }
} */

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
  }
}
