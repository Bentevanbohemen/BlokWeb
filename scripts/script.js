// JavaScript Document
console.log("hi");

// Klik op de h2 op de video en de link gaat draaien en verandert van kleur.
var deEersteH2;
deEersteH2 = document.querySelector("main section:first-of-type h2");

deEersteH2.onclick = veranderEersteA;

function veranderEersteA() {
    let eersteA = document.querySelector("main section:first-of-type a");
    eersteA.classList.toggle("anders"); 
}


// De button veranderd als de ul open en dicht klapt
var HamburgerButton = document.querySelector("button")
var HamburgerUl = document.querySelector("ul")

HamburgerButton.addEventListener("click", function () {
    HamburgerUl.classList.toggle("open");

    // Wissel tussen twee afbeeldingen voor de knop
    var buttonImg = HamburgerButton.querySelector("img");
    if (HamburgerUl.classList.contains("open")) {
        buttonImg.src = "links/close.png"; // Afbeelding wanneer menu uitgeklapt is
    } else {
        buttonImg.src = "links/menu.png"; // Afbeelding wanneer menu ingeklapt is
    }
});

