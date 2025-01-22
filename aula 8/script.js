//Exercicio de form data

/* const formulario = document.querySelector('form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(formulario);
    console.log(`Nome:  ${formData.get('nome')} Email: ${formData.get('email')} Mensagem: ${formData.get('message')}`);

}); */

/*
//Exercicio de manipulacao de conteudo

//Cria a div dinamicamente
const newDiv = document.createElement('div');
document.body.prepend(newDiv);

//Adiciona conteudo html na div
const div = document.querySelector('div');
div.innerHTML= '<ul><li>Exemplo 01</li><li>Exemplo 02</li></ul><p>Isto e uma div</p>';

//Seleciona o 1er li
const listFirstChild = document.querySelector('li');

//Adiciona um li no meio dos anteriores
listFirstChild.insertAdjacentHTML('afterend','<li>teste</li>');

//Remove o <p>
const aRemover = document.querySelector('p');
div.removeChild(aRemover); */

//Exercicio de manipulacao de clases
const mySpan = document.createElement('span');
document.body.prepend(mySpan);
mySpan.innerText = 'Span de teste';

mySpan.classList.add('semClicar');

// mySpan.addEventListener('click', () => mySpan.classList.replace('semClicar','clicado'));
mySpan.addEventListener('click', () => {
    mySpan.classList.remove('semClicar');
    mySpan.classList.add('clicado');
});


const botao = document.createElement('button');
document.body.append(botao);
botao.innerText = 'Button';

 // botao.addEventListener('mouseover', () => botao.classList.add('mouseOver'));
//botao.addEventListener('mouseout', () => botao.classList.remove('mouseOver'));

function toggleClass(){
    return botao.classList.toggle('mouseOver');
}

botao.addEventListener('mouseover',  toggleClass);
botao.addEventListener('mouseout', toggleClass);

