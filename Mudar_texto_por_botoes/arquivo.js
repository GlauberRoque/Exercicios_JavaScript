function fonte(cor) {
    document.getElementById("texto").style.color = cor;
}

function fundo(cor) {
    document.getElementById("texto").style.backgroundColor = cor;
}

var tamanho = 16;

function aumentarFonte() {
    tamanho++;
    document.getElementById("texto").style.fontSize = tamanho + "px";
}

function diminuirFonte() {
    tamanho--;
    document.getElementById("texto").style.fontSize = tamanho + "px";
}

function maiusculo() {
    var maiuscula = document.getElementById("texto").innerHTML;
    maiuscula = maiuscula.toUpperCase();
    document.getElementById("texto").innerHTML = maiuscula;
}

function minuscula() {
    var minuscula = document.getElementById("texto").innerHTML;
    minuscula = minuscula.toLowerCase();
    document.getElementById("texto").innerHTML = minuscula;
}