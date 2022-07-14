const preco = [1, 2 ,3 , 4, 20, 50, 34, 23, 56];

function altoCusto(num){
    return num >= 10
}

function desconto(num){
    return num * 0.3
}

result = preco.filter(altoCusto)
        .map(desconto);
console.log(result);

