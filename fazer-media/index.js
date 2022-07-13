function adicionaNotas(){
    let nota1 = parseFloat(document.getElementById("nota1").value)
    let nota2 = parseFloat(document.getElementById("nota2").value)
    let nota3 = parseFloat(document.getElementById("nota3").value)
    let nota4 = parseFloat(document.getElementById("nota4").value)
    let textoMedia = document.getElementById("texto-media");


    let media = (nota1 + nota2+ nota3 + nota4)/4 ;

    if(media >= 9){
        textoMedia.innerHTML = "Aprovado:" + media + " Parabéns!";
        document.getElementById("texto-media").style.color = "blue";
    }
    else if(media < 7 ){
        textoMedia.innerHTML = "Reprovado: " + media;
        document.getElementById("texto-media").style.color = "red";
    } else{
        textoMedia.innerHTML = "Aprovado: " + media;
        document.getElementById("texto-media").style.color = "green";
    }
}

function limpar(){

}