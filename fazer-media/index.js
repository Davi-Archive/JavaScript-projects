function adicionaNotas(){
//variables from document, transformed to number
let nota1 = parseFloat(document.getElementById("nota1").value)
let nota2 = parseFloat(document.getElementById("nota2").value)
let nota3 = parseFloat(document.getElementById("nota3").value)
let nota4 = parseFloat(document.getElementById("nota4").value)
let textoMedia = document.getElementById("texto-media");

    let media = (nota1 + nota2+ nota3 + nota4)/4 ;

    //algorithm checks all variables and return error if outside of range 0 to 10

if(nota1 >= 0 && nota1 <= 10 && nota2 >= 0 && nota2 <= 10 && nota3 >= 0 && nota3 <= 10 && nota4 >= 0 && nota4 <= 10){
    /* console.log('passou'); */
    if(media >= 9){
        textoMedia.innerHTML = "Aprovado:" + media + " Parabéns!";
        document.getElementById("texto-media").style.color = "blue";
        document.getElementById("texto-media").style.fontSize = "35px";
    }
    else if(media < 7 ){
        textoMedia.innerHTML = "Reprovado: " + media;
        document.getElementById("texto-media").style.color = "red";
        document.getElementById("texto-media").style.fontSize = "40px";
    } else{
        textoMedia.innerHTML = "Aprovado: " + media;
        document.getElementById("texto-media").style.color = "green";
        document.getElementById("texto-media").style.fontSize = "40px";
    }
    
} else {  //error because variable < 0 or variable > 10
    /* console.log('npassou'); */
    textoMedia.innerHTML = "A média é de 1 até 10, corrija os valores";
    document.getElementById("texto-media").style.color = "red";
    document.getElementById("texto-media").style.fontSize = "20px";
}

}

function limpar(){
    document.getElementById("texto-media").innerHTML = "MÉDIA"
    document.getElementById("texto-media").style.color = "black";
    document.getElementById("texto-media").style.fontSize = "40px";
    document.getElementById("nota1").value = "0";
    document.getElementById("nota2").value = "0";
    document.getElementById("nota3").value = "0";
    document.getElementById("nota4").value = "0";
}