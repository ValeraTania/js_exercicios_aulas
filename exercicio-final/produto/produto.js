// Obter produto com o endpoint https://fakestoreapi.com/products/1:
// ○ Podem escolher o id do produto que entenderem: vai de 0 a 20;
// ○ Preencher dinamicamente a página com o máximo de elementos que a api vos fornece.
// - No final da página deverás listar numa grelha produtos relacionados:
// ○ Deverás listar os 3 primeiros produtos da mesma categoria: https://fakestoreapi.com/products/category/jewelery
// ○ Obtém o id da categoria a partir do produto.
// - No footer da página deverá ser adicionado o texto “Copyright 2025”, sendo que 2025 deverá ser dinamicamente gerado.

const productID = prompt("Enter the ID of the product");

fetch(`https://fakestoreapi.com/products/${productID}`)
.then(response => response.json())
.then(result => {
    const div = document.createElement('div');
    document.body.prepend(div);
    Object.entries(result).forEach(([key,value]) => {
        if(key === "image"){
            div.insertAdjacentHTML('beforebegin',`<img src=${result.image}>`);
        } else if(key === "rating"){
            div.insertAdjacentHTML('beforebegin',`<b>Rate:</b><p>${result.rating.rate}</p>
                                                  <b>Count</b><p>${result.rating.count}</p>`);
        } 
        else{        
            div.insertAdjacentHTML('afterbegin',`<b>${key}:</b> <p>${value}</p>`)
    }
console.log(result)
    })

    relatedProducts(result.category);
});

function relatedProducts(category){
fetch(`https://fakestoreapi.com/products/category/${category}`)
.then(categoryResponse => categoryResponse.json())
.then(categoryResult => {
    const firstResults = categoryResult.slice(0,3);
    const div = document.createElement('div');
    document.body.append(div);
    console.log(categoryResult)
    firstResults.forEach(result => div.insertAdjacentHTML('beforebegin',`<b>Title</b>
                                                                        <p>${result.title}</p>
                                                                        <img src=${result.image}>`))
});

}

const footer = document.createElement('footer');
document.body.append(footer);
footer.innerHTML = `<h3>Copyright ${new Date().getFullYear()}</h3>`;


// ○ Pontos bónus: obter id do produto através do URL, com query string:
// ■ Deverás perceber por ti como se obtém o id;
// ■ Pistas: deverás obter o endereço e depois apenas o número do id.

