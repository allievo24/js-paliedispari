let parola;
parola = (prompt('Inserisci una parola'));


let parolaInversa = invertiParola(parola);
if(parola == parolaInversa){
    console.log('la parola è palindroma');
  } else {
    console.log('la parola non è palindroma');
}

function invertiParola(str){
 let parolaInversa=''; 

  let i = str.length - 1;

  while (i >= 0) {
    parolaInversa += str[i];
    i--;
  }

  return parolaInversa;
}
