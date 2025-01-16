  /*  const firstButton = document.querySelector('button');
    firstButton.addEventListener('mouseover', ()=> console.log('Mouse over button 1'));
    firstButton.addEventListener('mouseout', () => console.log('Mouse out button 1'));

    const secondButton = document.querySelector('button:nth-child(2)');
    secondButton.addEventListener('mouseover', () => console.log('Mouse over button 2'));
    secondButton.addEventListener('mouseout', () => console.log('Mouse out button 2'));
//secondButton.addEventListener('mouseout', setTimeout(() => { firstButton.setAttribute('id', 'first-btn')} , 3000));


setTimeout(() => { firstButton.setAttribute('id', 'first-btn')} , 3000); */

function captureEvent(event){
 console.log(event);
 if(event.type === 'click'){
    firstButton.setAttribute('class','clicked');
 } else if (event.type === 'mouseover'){
    firstButton.setAttribute('class','hover');
 }
}

const firstButton = document.querySelector('button');
firstButton.addEventListener('click',captureEvent);
firstButton.addEventListener('mouseover',captureEvent);