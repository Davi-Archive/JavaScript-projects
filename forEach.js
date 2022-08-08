let listaDePessoasAprovadas = [
    'ada.lovelace@example.com',
    'marie.curie@emails.com',
    'margaret.oka@email.com',
    'alan.turing@gmail.com'
];

const enviarEmail = (email) => {
    console.log(`Email para ${email} foi enviado com sucesso!`);
}

listaDePessoasAprovadas.forEach((item, posicao, array) => {
 enviarEmail(item);
 console.log(`Sua posição é ${posicao}`)
 console.log(`a posiçao total é ${array.length}`)
})


let listaDeMap = listaDePessoasAprovadas.map((item) => item)
console.log(listaDeMap);
