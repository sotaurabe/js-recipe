const itemsContainer = document.getElementById("items-container")
const teaButton = document.getElementById("tea-button")
const cokeButton = document.getElementById("coke-button")
const beerButton = document.getElementById("beer-button")
const myMoneyDisplay = document.getElementById("my-money")
const amountMoneyDisplay = document.getElementById("amount-money")
const addMyMoneyButton = document.getElementById("add-my-money")
const addAmountMoneyButton = document.getElementById("add-amount-money")
const changeBUtton = document.getElementById("oturi-button")

let myMoney = 0
let amountMoney = 0

addMyMoneyButton.onclick = function() {
  myMoney = myMoney + 1000
  myMoneyDisplay.textContent = myMoney
}

addAmountMoneyButton.onclick = function() {
  if (myMoney >= 100) {
    myMoney = myMoney - 100
    myMoneyDisplay.textContent = myMoney
    amountMoney = amountMoney + 100
    amountMoneyDisplay.textContent = amountMoney
  }
}

teaButton.onclick = function() {
  if (amountMoney >= 100) {
    amountMoney = amountMoney - 100
    console.log(amountMoney)
    amountMoneyDisplay.textContent = amountMoney
    const image = createImage("tea")
    itemsContainer.append(image)
  }
}

cokeButton.onclick = function() {
  if (amountMoney >= 130) {
    amountMoney = amountMoney - 130
    amountMoneyDisplay.textContent = amountMoney
    const image = createImage("coke")
    itemsContainer.append(image)
  }
}

beerButton.onclick = function() {
  if (amountMoney >= 150) {
    amountMoney = amountMoney - 150
    amountMoneyDisplay.textContent = amountMoney
    const image = createImage("beer")
    itemsContainer.append(image)
  }
}

changeBUtton.onclick = function() {
  myMoney = myMoney + amountMoney
  amountMoney = 0
  amountMoneyDisplay.textContent = amountMoney
  myMoneyDisplay.textContent = myMoney
}

const createImage = (drink) => {
  let drinkImgSrc = ""

  if (drink === "tea") {
    drinkImgSrc =
      "https://www.itoen.jp/files/products/japanese_tea/210315%20ikiikiPKG.jpg"
  } else if (drink === "coke") {
    drinkImgSrc =
      "https://www.cocacola.jp/images/product/cola_bottle_img_2020.png"
  } else if (drink === "beer") {
    drinkImgSrc =
      "https://image.itmedia.co.jp/news/articles/2104/22/l_ts0153_zenkai01.jpg"
    ;("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.biccamera.com%2Fbc%2Fi%2Ftopics%2Fosusume_beer%2Findex.jsp&psig=AOvVaw2ENfbLvxV-65qcMGUGhuJD&ust=1620035322838000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLjw74LcqvACFQAAAAAdAAAAABAV")
  }
  /* switch (drink) {
    case "tea":
      drinkImgSrc =
        "https://www.itoen.jp/files/products/japanese_tea/210315%20ikiikiPKG.jpg";
      break;
    case "coke":
      drinkImgSrc =
        "https://www.cocacola.jp/images/product/cola_bottle_img_2020.png";
      break;
    default:
      drinkImgSrc =
        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"; */
  //}
  const figure = document.createElement("figure")
  figure.classList.add("vending-machine__items-container__figure")
  const img = document.createElement("img")
  img.src = drinkImgSrc
  img.classList.add("vending-machine__items-container__figure__img")
  figure.append(img)
  return figure
}
