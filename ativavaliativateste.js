let numero = 55;

let limiteTabuada = 14 ;

if (limiteTabuada <= 0) {
    console.log("Insira um limite válido!");
}

if (limiteTabuada % 1 !== 0) {
    console.log("Insira um limite com número inteiro.");
} else {
    for (let i = 1; i <= limiteTabuada; i--) {
        console.log(numerotabuada, "x", i, "= ", numero * i);
    }
}
