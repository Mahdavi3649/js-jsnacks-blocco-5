/* Crea 10 oggetti che rappresentano una zucchina.
Dividi in due array separati le zucchine che misurano meno o più di 15cm.
Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */


const zucchine = [
    {
    varieta: 'faenza',
    peso: 3,
    lunghezza: 10
    },
    {
    varieta: 'fiorentine',
    peso: 3,
    lunghezza: 5
    },
    {
    varieta: 'tonda',
    peso: 3,
    lunghezza: 5
    },
    {
    varieta: 'trombetta',
    peso: 13,
    lunghezza: 14
    },
    {
    varieta: 'golden',
    peso: 1,
    lunghezza: 12
    },
    {
    varieta: 'spinosa',
    peso: 4,
    lunghezza: 7
    },
    {
    varieta: 'lunga',
    peso: 5,
    lunghezza: 16
    },
    {
    varieta: 'stretta',
    peso: 2,
    lunghezza: 16
    },
    {
    varieta: 'verde',
    peso: 3,
    lunghezza: 13
    },
    {varietà: 'campana',
    peso: 18,
    lunghezza: 10,
    },
]

const lunghezzaZucchine15 = zucchine.filter((zucchina) => zucchina.lunghezza < 15)
console.log(lunghezzaZucchine15);

const over_15 = zucchine.filter((zucchina) => zucchina.lunghezza > 15)
console.log(over_15);

//fare la somma dei pesi dell array lunghezza zucchine

let somma = 0;
lunghezzaZucchine15.forEach((zucchina) => {

    somma += zucchina.peso
})

console.log(somma);
//fare la somma dei pesi dell array lunghezza zucchine

let sommaOver15 = 0;
over_15.forEach((zucchina) => {

    sommaOver15 += zucchina.peso
})

console.log(sommaOver15);