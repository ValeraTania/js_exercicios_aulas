/*let texto1 = "Isto é um teste ";
let texto2 = 'tu vais passar!';



console.log(texto1.concat(texto2));

let str1 = 'Isto é ' ;
let num1 = 1;
let str2 = ' string com ' ;
let num2 = 2 ;
let str3 = ' números';

console.log(str1 + num1+ str2 + num2 + str3); */

/* let data = new Date('2020 02 06');

console.log(data);
console.log(data.getDay());
console.log(data.getFullYear());

data.setMonth(2);
data.setFullYear(2021);
console.log(data); */

/* function calcularPreco(preco){
    return preco*2;
}

function avaliarPreco(funcao, numero, preco){
    if ( numero > 100){
      return  funcao(preco);
    } else{
        return "Não é possível avaliar o preço"
    }
} 



console.log(avaliarPreco(calcularPreco,101,60));*/

/* const devolverNome = function (){console.log('Tania Rodriguez Valera')};

console.log(devolverNome());

const soma = function (num1, num2){ return num1+ num2};

console.log(soma(2,10));

(function (){console.log('Tania Rodriguez Valera')})();
(function (num1, num2){ console.log( num1+ num2)})(2,13);*/

/* function dividirPorDois(){
    return function (numero){
        return numero / 2;
    }
}

const dividir = dividirPorDois();

console.log(dividir(8));
console.log(dividirPorDois()(12));

function dividirNumeros(numero1){
    return function (numero2){
        if (numero2 === 0) {
            return "A divisao por zero nao esta definida";
        }
        return numero1/numero2;
    }
}

console.log(dividirNumeros(100)(2));
console.log(dividirNumeros(100)(0)); */

/* function Livro(titulo,autor){
    this.titulo = titulo;
    this.autor = autor;
}

const livro1 = new Livro('Os tres mosqueteiros', 'Alexandre Dumas');
const livro2 = new Livro('Os Maias','Eça de Queiroz');

console.log(livro1.titulo);
console.log(livro1.autor);

console.log(livro2.titulo);
console.log(livro2.autor);


livro1.titulo = "O Conde do Monte Cristo";

console.log(livro1.titulo);
console.log(livro1.autor); */


var estudantes = [{ id: 1, nome: 'João', idade: 20 },{ 
    id: 2, nome: 'Maria', idade: 22 },{ id: 3, nome: 
    'Pedro', idade: 18 },{ id: 4, nome: 'Ana', idade: 21 }];


    //Cria uma arrow function que encontra o estudante pelo id. O id deve ser facultado como parâmetro;
    

    const estudantePorId =(idEstudante = 2)=> estudantes.find((estudante) => estudante.id === idEstudante);
    
        console.log(estudantePorId());


    //Cria uma arrow function que leia todos os estudantes e retorne os nomes, na seguinte estrutura: “Nome do estudante: João” 
    //Nota: apenas usar métodos de ES6;

    const retornarNomes = () => estudantes.map((estudante) => `Nome do estudante: ${estudante.nome}`);
    

    console.log(retornarNomes());


    //Cria uma arrow function que devolva todos os estudantes que tenham uma idade maior do que um valor passado por parâmetro;

    const idadeMaior = (idade = 18) =>  estudantes.filter((estudante) => estudante.idade > idade);
    

    console.log(idadeMaior(20));