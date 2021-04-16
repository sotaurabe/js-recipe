const button = document.getElementById("button")

const alertMessaga = function() {
  alert("クリックしたね")
}

button.onclick = alertMessaga

//練習問題２
const buttonDiv = document.getElementById("button-div")
const buttonSpan = document.getElementById("button-span")

buttonDiv.onclick = function() {
  alert("こんにちは")
}

buttonSpan.onclick = function() {
  alert("こんばんは")
}

//練習問題２（別解）
const buttonDiv2 = document.getElementById("button-div2")
const buttonSpan2 = document.getElementById("button-span2")

const createAlertMessage = function(message) {
  return function() {
    alert(message)
  }
}

buttonDiv2.onclick = createAlertMessage("こんにちは")
buttonSpan2.onclick = createAlertMessage("こんばんは")

//input 要素と input イベント
const inputText = document.getElementById("input-text")
const inputDate = document.getElementById("input-date")

const sayHello = function(e) {
  console.log(e.target.value)
}

inputText.oninput = sayHello
inputDate.oninput = sayHello

//練習問題3
document.onkeydown = function(e) {
  console.log(e.key)
}
