document.addEventListener("DOMContentLoaded", function () {
    // Adiciona a classe 'fade-in' aos elementos que você deseja animar
    var elementsToAnimate = document.querySelectorAll(".fade-in");
    for (var i = 0; i < elementsToAnimate.length; i++) {
        elementsToAnimate[i].style.animationPlayState = "running";
    }
});