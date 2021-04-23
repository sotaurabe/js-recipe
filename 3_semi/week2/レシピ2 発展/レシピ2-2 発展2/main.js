const quizText = document.getElementById("quiz-text")
const quizImage = document.getElementById("quiz-image")
const choicesContainer = document.getElementById("choices-container")
const feedback = document.getElementById("feedback")

// クイズの内容
const quiz = {
  text: "この漢字の読み方は何でしょう？",
  image: "kannzi1.jpeg",
  choices: [
    {
      text: "まわす",
      feedback: "残念！バーカ",
    },
    {
      text: "ぼかす",
      feedback: "正解!!!!!!",
    },
    {
      text: "つるす",
      feedback: "残念！バーカ",
    },
    {
      text: "からす",
      feedback: "残念！バーカ",
    },
  ],
}

const choice1 = document.createElement("button")
const choice2 = document.createElement("button")
const choice3 = document.createElement("button")
const choice4 = document.createElement("button")

choicesContainer.append(choice1)
choicesContainer.append(choice2)
choicesContainer.append(choice3)
choicesContainer.append(choice4)

// quiz を画面に表示する関数
const reloadQuiz = function() {
  // 問題文を表示
  quizText.textContent = "Q. " + quiz.text

  // 画像を表示
  quizImage.src = quiz.image

  // 選択肢（ボタン）の中身を表示
  choice1.textContent = quiz.choices[0].text
  choice2.textContent = quiz.choices[1].text
  choice3.textContent = quiz.choices[2].text
  choice4.textContent = quiz.choices[3].text
}

// choiceNumber番目の選択肢を選択
const choose = function(choiceNumber) {
  // フィードバックを表示
  feedback.textContent = quiz.choices[choiceNumber].feedback
}

choice1.onclick = function() {
  // 0 番目の選択肢を選択
  choose(0)
}
choice2.onclick = function() {
  // 1 番目の選択肢を選択
  choose(1)
}
choice3.onclick = function() {
  // 2 番目の選択肢を選択
  choose(2)
}
choice4.onclick = function() {
  choose(3)
}

// reloadQuiz関数 を実行して、クイズを画面に表示する
reloadQuiz()
