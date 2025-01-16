 /* console.log(document.getElementsByTagName('button'));

console.log(document.querySelectorAll('.container button'));


console.log(document.getElementById('teste'));
console.log(document.querySelector('p#teste')); */


/* const newDiv = document.createElement('div');
document.body.prepend(newDiv);

newDiv.append('isto e apenas para um exercicio ');

newDiv.append("muito dificil");

newDiv.setAttribute('aria-label','teste-teste'); */


//Exercicios de eventos do DOM

function mouseOn(){
  console.log('O mouse esta sob o elemento') ;
}

function mouseOut(){
    console.log('O mouse esta fora do elemento');
}

function focado(){
    console.log('Focado');
}

function desfocado(){
    console.log('Desfocado');
}