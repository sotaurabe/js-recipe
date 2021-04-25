const imageElement = document.getElementById("dog-image")
const breedsList = document.getElementById("breeds-list")
const button = document.getElementById("button")

button.onclick = function() {
  let breed = breedsList.value

  // 指定したサーバーにデータを取りに行く
  fetch("https://dog.ceo/api/breed/" + breed + "/images/random")
    .then((res) => {
      return res.json() // 結果を json として読み込む
    })
    .then((data) => {
      imageElement.src = data.message // 画像を表示する
    })
}
