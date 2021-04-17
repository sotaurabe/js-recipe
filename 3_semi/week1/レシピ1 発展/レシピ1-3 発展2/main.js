const figure = document.getElementById("figure")

figure.onclick = function() {
  if ((figure.className = "square")) {
    figure.classList.replace("square", "rounded")
  } else if ((figure.className = "rounded")) {
    figure.classList.replace("rounded", "triangle")
  } else {
    figure.classList.replace("triangle", "square")
  }
}
