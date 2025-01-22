// PROMISES usando .then().catch()

/* const soma = (num1,num2) => {  

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
*/


// PROMISES usando async/await
const soma = async (num1,num2) => {  

    const result = num1 + num2;
    
    const promise = new Promise((success,unsuccesful) =>{
        if ( result % 2 === 0){
            success('Numero par');
        } else {
             unsuccesful('Numero impar');
            }


    });   

    try{
        const resultPromise = await promise;
        console.log(resultPromise) ;
    } catch (e){
        console.log(e);
    }
    
    }
