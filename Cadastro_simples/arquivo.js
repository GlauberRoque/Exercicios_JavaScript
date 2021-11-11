function validar() {

    var email = document.getElementById("email").value;
    var senha1 = document.getElementById("senha1").value;
    var senha2 = document.getElementById("senha2").value;

    if (email != "" && senha1 != "" && senha2 != "") {

        if (senha1 == senha2) {
            if (senha1.length > 5 && senha1.length <= 10) {
                alert("Cadastro realizado com sucesso!");
            } else {
                alert("Senha fora do padão!");
            }

        } else {
            alert("As senhas não conferem!");
        }

    } else {
        alert("Preencha todos os campos!");
    }

}