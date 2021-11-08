function verificar() {

    var cboxes = document.getElementsByName("tecnologia");

    var contagem = 0;

    for (let i = 0; i < cboxes.length; i++) {

        if (cboxes[i].checked == true) {
            contagem++;
        }

    }

    if (contagem >= 2) {
        document.getElementById("enviar").removeAttribute("disabled");

    } else {

        document.getElementById("enviar").setAttribute("disabled", "enabled");

    }

}