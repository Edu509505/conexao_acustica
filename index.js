const container = document.getElementById("container");
const imageStaticEfeito1 = document.getElementById("imageStaticEfeito1");
const imageStaticEfeito2 = document.getElementById("imageStaticEfeito2");
const imageStatic2Efeito = document.getElementById("imageStatic2Efeito");

const cardMidia1 = document.getElementById("cardMidia1")
const cardMidia2 = document.getElementById("cardMidia2")
const cardMidia3 = document.getElementById("cardMidia3")
const cardMidia4 = document.getElementById("cardMidia4")
const cardMidia5 = document.getElementById("cardMidia5")

window.addEventListener("scroll", () => {
    console.log(window.scrollY);

    if (scrollY >= 300) {
        container.classList.add("play");
    }

    if (scrollY >= 1000) {
        imageStaticEfeito1.classList.add("play");
        imageStaticEfeito2.classList.add("play");
    }

    if (scrollY >= 1700) {
        imageStatic2Efeito.classList.add("play");
    }

    if (scrollY >= 2600) {
        cardMidia1.classList.add("play");
        cardMidia2.classList.add("play");
        cardMidia3.classList.add("play");
        cardMidia4.classList.add("play");
        cardMidia5.classList.add("play");
    }
})