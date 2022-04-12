/* Crea un array di 10 oggetti che rappresentano una zucchina, indicando per ognuna varietà, peso e lunghezza.
Calcola quanto pesano tutte le zucchine.
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

let somma = 0;
zucchine.forEach((zucchina)=>{

    console.log(zucchina.peso);
    const peso = zucchina.peso;

    somma += peso
})

console.log(somma);


