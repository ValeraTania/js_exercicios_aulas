//https://dog.ceo/api/breeds/list/all
//fetch dos resultados, e vao escrever na página a lista das raças numa lista = ul + vários li



/* fetch('https://dog.ceo/api/breeds/list/all')
.then((response) => response.json())
.then((formatedData) => { 
    const title = document.createElement("h1");
    document.body.prepend(title);
    title.innerText = 'List of dogs';

    const list = document.createElement('ul');
    document.body.append(list);
    
    const listOfDogs = Object.keys(formatedData.message);
    listOfDogs.forEach((dog) => list.insertAdjacentHTML('afterbegin', `<li>${dog}</li>`));
});
*/

class Carro {
    constructor(marca,modelo){
        this.marca = marca;
        this.modelo = modelo;
    }

    display(){
        console.log(`Este é um ${this.marca} ${this.modelo}`);
    }
}


const car1 = new Carro('BMW', 'modelXYU');
const car2 = new Carro('Audi','modelCDH');

class Suv extends Carro{
    constructor(marca,modelo,color){
        super(marca,modelo);
        this.color = color;
    }

    getDetails(){
        console.log(`Este ${this.marca} e dar cor ${this.color}`);
    }
}

const suv = new Suv('Audi','modeloX','vermelho');