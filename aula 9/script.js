
const soma = (num1,num2) => {  

const result = num1 + num2;

const promise = new Promise((success,unsuccesful) =>{
    if ( result % 2 === 0){
        success('Numero par');
    } else {
         unsuccesful('Numero impar');
        }
});

 promise.then(resultado => console.log(resultado))
.catch(resultado => console.log(resultado)); 
}

