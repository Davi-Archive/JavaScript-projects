let counter = 0;
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
}