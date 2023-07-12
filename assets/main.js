var welcomeDiv = document.getElementById("welcome");
var welcomeHeader = welcomeDiv.querySelector("h1");
var containerDiv = document.getElementById("container");
var text = "Hello World :)";
var index = 0;

containerDiv.style.display = "none"; // Ukryj początkowo div "container"

welcomeDiv.style.opacity = "0"; // Ustaw początkową przezroczystość na 0

setTimeout(function() {
  welcomeDiv.style.opacity = "1"; // Zwiększ przezroczystość do 1
  welcomeDiv.style.display = "block"; // Wyświetl div

  var typingInterval = setInterval(function() {
    welcomeHeader.textContent += text[index];

    index++;
    if (index >= text.length) {
      clearInterval(typingInterval);

      setTimeout(function() {
        fadeOut(welcomeDiv); // Uruchom efekt zanikania po zakończeniu pisania
      }, 600);
    }
  }, 200);
}, 100);

function fadeOut(element) {
  var opacity = 1;
  var fadeInterval = setInterval(function() {
    opacity -= 0.1; // Zmniejsz przezroczystość o 0.1

    if (opacity <= 0) {
      clearInterval(fadeInterval);
      element.style.display = "none"; // Ukryj div po zaniknięciu

      containerDiv.style.opacity = "0"; // Ustaw początkową przezroczystość na 0
      containerDiv.style.display = "block"; // Wyświetl div "container"

      fadeIn(containerDiv); // Uruchom efekt pojawiania się "container"
    }

    element.style.opacity = opacity;
  }, 100);
}

function fadeIn(element) {
  var opacity = 0;
  var fadeInInterval = setInterval(function() {
    opacity += 0.1; // Zwiększ przezroczystość o 0.1

    if (opacity >= 1) {
      clearInterval(fadeInInterval);
    }

    element.style.opacity = opacity;
  }, 100);
}
