const figure = document.getElementById("figure")

figure.onclick = function() {
  if (figure.classList.contains("square")) {
    figure.className = "rounded transition"
  } else if (figure.classList.contains("rounded")) {
    figure.className = "triangle transition"
  } else {
    figure.className = "square transition"
  }
}
