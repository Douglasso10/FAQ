function respostaFaq () {
    const adicionar = document.getElementById("resposta");
    const botao = document.getElementById("btn");

    if(adicionar.style.display === "none"){
        adicionar.style.display = "inline";
    }else{
        adicionar.style.display = "none"
    }
}