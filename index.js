const container = document.getElementById("container");
const imageStaticEfeito1 = document.getElementById("imageStaticEfeito1");
const imageStaticEfeito2 = document.getElementById("imageStaticEfeito2");
const imageStatic2Efeito = document.getElementById("imageStatic2Efeito");

const cardMidia1 = document.getElementById("cardMidia1")
const cardMidia2 = document.getElementById("cardMidia2")
const cardMidia3 = document.getElementById("cardMidia3")
const cardMidia4 = document.getElementById("cardMidia4")
const cardMidia5 = document.getElementById("cardMidia5")

const videoShow1 = document.getElementById("video1")
const videoShowBackground = document.getElementById("backgroundVideo")

const videoDinamico = document.getElementById("videoDinamico")

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

const videoPrincipal = document.getElementById("backgroundVideo");
const triggers = document.querySelectorAll('.trigger'); // Certifique-se de usar uma classe comum

triggers.forEach(trigger => {
    trigger.addEventListener("mouseover", () => {
        const videoPath = trigger.getAttribute('data-video');

        // 1. Define o vídeo e carrega
        videoPrincipal.src = videoPath;
        videoPrincipal.load();

        // 2. Adiciona as classes para iniciar a animação de opacidade (CSS)
        videoShow1.classList.add("play");
        videoShowBackground.classList.add("play");

        videoPrincipal.play().catch(e => console.log("Erro ao dar play:", e));
    });

    trigger.addEventListener("mouseout", () => {
        // 1. Remove a classe para iniciar o fade-out de 300ms do CSS
        videoShow1.classList.remove("play");
        videoShowBackground.classList.remove("play");

        // 2. Esperamos os 300ms da animação antes de "limpar" o vídeo
        setTimeout(() => {
            // Verifica se o mouse não voltou para o gatilho nesse meio tempo
            if (!videoShowBackground.classList.contains("play")) {
                videoPrincipal.pause();
                videoPrincipal.src = "";
                videoPrincipal.load();
            }
        }, 300); // Exatos 300ms que você definiu no CSS
    });
});