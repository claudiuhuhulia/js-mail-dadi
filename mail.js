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
const usermail= document.getElementById('mail');
const resultElement= document.getElementById('msg');
const buttonElement = document.getElementById('button')



buttonElement.addEventListener('click', function(){
let result='non puoi accedere'
const mailvalue= usermail.value;



for(i = 0 ; i < arraymail.length ; i++){
    
    
    
    const mail = arraymail[i];
    if(mailvalue === mail){
    result= 'benvenuto';
    }
   
}

console.log(result);
resultElement.innerText=result;
}
);






