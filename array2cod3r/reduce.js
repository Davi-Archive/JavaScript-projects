const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function media(acc, num){
    const novoTotal = acc.total + num;
    const novaQtd = acc.qtd + 1;

   console.log('total: '+novoTotal+' || qtd: '+novaQtd+' || media: '+acc.media);     //ver como reduce funciona

    return {
        total: novoTotal,
        qtd: novaQtd,
        media: novoTotal / novaQtd
    }
}

const valorInicial = {total: 0, qtd: 0, media: 0}
const mediaFinal = numeros.reduce(media, valorInicial);

/* console.log(mediaFinal.media+' || '+mediaFinal.total+' || '+mediaFinal.qtd); */
