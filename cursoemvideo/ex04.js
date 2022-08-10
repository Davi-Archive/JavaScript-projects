let num = [5 ,8 ,2 , 9, 3]
let lol
num.push(1)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor é ${num[0]}`)
console.log(`o array é colocado certo ${num.sort()}`)
console.log(`O array mapeado é ${num.map(String)}`)
console.log(`${num}`)
console.log(`o array filtrado é ${num.filter((num) => num < 6)}`)
console.log(`tem numero 6 no array? ${num.indexOf(6)} ( o valor -1 não encontrou nda )`)
console.log(`tem numero 8 no array? ${num.indexOf(8)} ( o valor -1 não encontrou nda )`)