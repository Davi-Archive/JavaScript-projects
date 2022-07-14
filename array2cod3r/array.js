let arr1 = [ 2, 4, 7, 12, 43, 1];
let result = arr1.map(conta);

function conta(num){
    return num * 2
}

console.log(result);