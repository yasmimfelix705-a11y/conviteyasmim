// ==========================
// ABRIR CONVITE
// ==========================

function abrirConvite() {

    const envelopeTela = document.getElementById("tela-envelope");
    const conviteTela = document.getElementById("tela-convite");
    const envelope = document.querySelector(".envelope");


    // inicia efeito do envelope

    envelope.classList.add("abrindo");


    setTimeout(() => {


        envelopeTela.style.opacity = "0";

        envelopeTela.style.visibility = "hidden";


        conviteTela.style.visibility = "visible";

        conviteTela.style.opacity = "1";


    }, 1500);

}





// ==========================
// CONFIRMAR PRESENÇA
// ==========================

function confirmarPresenca() {

    window.open(
        "https://yasmimfelix705-a11y.github.io/convite-yasmim-15/",
        "_blank"
    );

}





// ==========================
// LOCAL DA FESTA
// ==========================

function verLocal() {

    window.open(
        "https://maps.app.goo.gl/mfc4JibumckWUFtp7",
        "_blank"
    );

}





// ==========================
// LISTA DE PRESENTES
// ==========================

function listaPresentes() {

    window.open(
        "lista-presentes.html",
        "_blank"
    );

}
