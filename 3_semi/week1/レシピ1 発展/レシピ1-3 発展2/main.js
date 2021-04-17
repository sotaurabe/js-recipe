const figure = document.getElementById("figure")

figure.onclick = function() {
  if ((figure.className = "square")) {
    figure.className = "rounded"
  } else if ((figure.className = "rounded")) {
    figure.className = "triangle"
  } else {
    figure.className = "square"
  }
}
