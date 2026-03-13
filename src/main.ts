/*
Snack 1
Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.

Se è una stringa: stampala in maiuscolo

Se è un numero: moltiplicalo per due e stampalo

Se è un booleano: stampa “Sì” o “No” in base al suo valore

In tutti gli altri casi: stampa “Tipo non supportato”
*/


let dato: unknown = 'ciao'


if (typeof dato === 'string') {
  console.log(dato.toUpperCase())
} else if (typeof dato === 'boolean') {
  console.log(dato)
} else if (typeof dato === 'number') {
  console.log(dato * 2)
} else {
  console.log('tipo non supportato')
}



/*
Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati:

nome → stringa
cognome → stringa
annoNascita → numero
sesso → Può essere solo "m" o "f".
anniDiServizio (array di numeri, es. [2014, 2015, 2017, 2018])
*/


type Dipendente = {
  nome: string,
  cognome: string,
  annoNascita: string,
  sesso: 'm' | 'f'
  anniDiServizio: number[]
}