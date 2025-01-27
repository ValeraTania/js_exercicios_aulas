//Exercicio 01
const newDiv = document.createElement('div');
document.body.prepend(newDiv);

newDiv.setAttribute('id','container');
newDiv.setAttribute('class', 'exercicio');


newDiv.innerHTML = '<span class=exercicio>Isto é o conteúdo da span</span>'



const classExercicio = document.querySelectorAll('.exercicio');
console.log(classExercicio);

const buttonTop = document.createElement('button');
document.body.prepend(buttonTop);
buttonTop.innerText= 'Button top';

const buttonBottom = document.createElement('button');
document.body.append(buttonBottom);
buttonBottom.innerText= 'Button bottom';


newDiv.addEventListener('click', ()=>
    setTimeout(()=>console.log('o setTimeout começou!'),2000));


