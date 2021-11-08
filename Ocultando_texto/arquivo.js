function mudar(el) {
    var tela = document.getElementById(el).style.display;
    var botao = document.getElementById("esconder");

    if (tela == "none") {

        document.getElementById(el).style.display = 'block';
        botao.innerHTML = "Esconder Texto";

    } else {

        document.getElementById(el).style.display = 'none';
        botao.innerHTML = "Mostrar Texto";

    }
}