const  parioDispari =prompt('scegli Pari o Dispari');
const numeroUser =parseInt(prompt('scegli un numero da 1 a 5'))  

 const numerPc = GeneraNumero(1,5);
   console.log(numerPc);

 const sommaNumeri = numeroUser + numerPc;
  console.log(sommaNumeri);

  const ParioDispari = controllaParioDispari(sommaNumeri);
  if(parioDispari == ParioDispari ){ alert('hai vinto');}
  else{alert('hai perso')}
  
  





function GeneraNumero(min,max ){
 return Math.floor(Math.random() * ( max - min + 1 )) +  min;
}
function controllaParioDispari (numero){
    if(numero % 2 == 0 ){return 'pari'}
    else {return 'dispari'};
}
