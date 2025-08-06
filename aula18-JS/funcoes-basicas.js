document.getElementById("mudar").onclick = function () {
    mudacor();
};

function mudacor() {
    document.getElementsByClassName("mudafonte")[0].style.fontFamily = "arial";
    document.getElementById("texto").style.backgroundColor = "gray";
    document.getElementById("texto").innerHTML =
        "A cor do plano de fundo mudou!";
}
