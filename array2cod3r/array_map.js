let arr1 = [ 
    {nome: 'Davi', preco:10.0, desconto: 0.2},
    {nome: 'Marcos', preco:120.0, desconto: 0.7},
    {nome: 'nick', preco:140.0, desconto: 0.1},
    {nome: 'Maria', preco:50.0, desconto: 0.4},
    {nome: 'Jorge', preco:3.0, desconto: 0.9},
    {nome: 'Flavia', preco:1120.0, desconto: 0.5}
];

function conta(variavel){
    return variavel.preco * (1 - variavel.desconto)  // 1 é para mostrar oque sobra para pagar com o desconto
}

const result = arr1.map(conta);
console.log(result);