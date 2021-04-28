const breedsList = document.getElementById("breeds-list")
const button = document.getElementById("button")
const number = document.getElementById("number")
const imgContainer = document.getElementById("img-container")

const createImg = function() {
  const img = document.createElement("img")
  img.src = ""
  let breed = breedsList.value
  // 指定したサーバーにデータを取りに行く
  fetch("https://dog.ceo/api/breed/" + breed + "/images/random")
    .then((res) => {
      return res.json() // 結果を json として読み込む
    })
    .then((data) => {
      img.src = data.message // 画像を表示する
    })
  imgContainer.append(img)
}

button.onclick = function() {
  imgContainer.innerHTML = ""
  let num = number.value

  for (let i = 1; i <= num; i++) {
    createImg()
  }
}
