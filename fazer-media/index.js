let notasArr = [0, 0, 0, 0];

function mediaNotas(notasArr) {
    var i = 0; 
    somaNotas = 0;
    tamanhoArr = notasArr.length; 
    while (i < tamanhoArr) {
        somaNotas += notasArr[i++];
}
    return somaNotas / tamanhoArr;
}

/* tester */
var a = mediaNotas(notasArr);
console.log(a);






/* let counter = 0;
let counterEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el")

function increment(){
    counter++;
    counterEl.innerHTML = counter;
}

function save(){
    let saveCount = counter + " - "
    saveEl.textContent += saveCount;
    counter = 0;
    counterEl.innerText = 0;
}

function incrementThree(){
    counter += 3;
    counterEl.innerHTML= counter;
} */