console.log('js-ok');

/* 
1. creiamo array di mail in archivio
2. prompt per chidere la mail all'utente
3. controlliamo se è presente in archivio
4. se è presente gli diamo il benvenuto 
    - altrimenti allert 'non puoi accedere'
*/

const arraymail=['ciao@gmail.com','bella@gmail.com','marco@gmail.com','giovanni@gmail.com','claudio@gmail.com'];

console.log(arraymail);
const usermail= prompt('scrivi la tua mail').trim();


for(i = 0 ; i < arraymail.length ; i++){
    const mail = arraymail[i];
    if(usermail === mail){
    result= 'benvenuto'
    }
    else{
    result= 'non puoi accedere'
    }
    
}
console.log(result);




