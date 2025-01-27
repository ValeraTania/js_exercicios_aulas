const textArea = document.querySelector('textarea');

textArea.addEventListener('focus', () => console.log('Isto é um evento focus numa textarea'));

textArea.addEventListener('blur', () => console.log('Isto é um evento blur numa textarea'));

const buttons = document.querySelectorAll('button');

let interval;

 buttons[0].addEventListener('click', () => {  interval = setInterval(() => console.log('setInterval começou!'), 2000)});


buttons[buttons.length-1].addEventListener('click', () => clearInterval(interval));
