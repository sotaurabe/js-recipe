const inputElement1 = document.getElementsByClassName("input-todo1")
const container1 = document.getElementsByClassName("cards-container1")
const addButton1 = document.getElementsByClassName("add-button1")

addButton1.onclick = function() {
  // カードを作成する
  const card = createCard(inputElement1.value)
  container1.append(card)

  // 入力欄を空にする
  inputElement1.value = ""
}

// 共通の処理：テキストからカードを作成する
const createCard = function(text) {
  // カードの枠を作る
  const card = document.createElement("div")
  card.className = "card"

  // テキストを表示する部分を作る
  const todo = document.createElement("div")
  todo.className = "todo"
  todo.textContent = text
  card.append(todo)

  // 削除ボタンを作る
  const deleteButton = document.createElement("div")
  deleteButton.className = "delete"

  // 削除ボタンを押したときの処理を登録
  deleteButton.onclick = function() {
    // カードを削除する
    card.remove()
  }
  card.append(deleteButton)

  return card
}

const inputElement2 = document.getElementsByClassName("input-todo2")
const container2 = document.getElementsByClassName("cards-container2")
const addButton2 = document.getElementsByClassName("add-button2")

addButton2.onclick = function() {
  // カードを作成する
  const card = createCard(inputElement2.value)
  container2.append(card)

  // 入力欄を空にする
  inputElement2.value = ""
}

const inputElement3 = document.getElementsByClassName("input-todo3")
const container3 = document.getElementsByClassName("cards-container3")
const addButton3 = document.getElementsByClassName("add-button3")

addButton3.onclick = function() {
  // カードを作成する
  const card = createCard(inputElement3.value)
  container3.append(card)

  // 入力欄を空にする
  inputElement3.value = ""
}
