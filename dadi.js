console.log('js-ok');

/* 
1. generiamo un numero random per la cpu e per l'utente da 1 a 6
2. stampa il vincitore 
*/

const randomuser = Math.floor(Math.random() * 6) + 1;
console.log(randomuser);

const randomcpu = Math.floor(Math.random() * 6) + 1;
console.log(randomcpu);

let result = 'pareggio';

if (randomuser > randomcpu){
    result = 'HA VINTO L\'UTENTE'
}
else if(randomuser < randomcpu){
    result= 'HA VINTO LA CPU'
}
console.log(result);
