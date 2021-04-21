const button = document.getElementById("button")

let count = 1

const countUp = function() {
  if (count % 3 === 0) {
    console.log(`${count}!!!!!`)
    count += 1
  } else {
    console.log(count)
    count += 1
  }
}

let id = null

button.onclick = function() {
  if (id === null) {
    id = setInterval(countUp, 1000)
    button.textContent = "stop"
  } else {
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
