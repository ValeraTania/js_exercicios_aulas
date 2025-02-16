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
    div.setAttribute('class','product')
    document.body.prepend(div);
    Object.entries(result).forEach(([key,value]) => {
        if(key === "rating"){
            div.innerHTML+= (`<div class=product-rate><p><b>RATE:</b>${result.rating.rate}
                                                 <b>COUNT:</b>${result.rating.count}</p></div>`);

        } else if(key === "image"){
            div.insertAdjacentHTML('afterbegin',`<div class=product-image><img src=${result.image}></div>`);

        } 
        else{        
            div.innerHTML+= (`<div class=product-info><p><b>${key.toUpperCase()}:</b>${value}</p></div>`)
    }
    })

    relatedProducts(result.category);
});

function relatedProducts(category){
    fetch(`https://fakestoreapi.com/products/category/${category}`)
    .then(categoryResponse => categoryResponse.json())
    .then(categoryResult => {
        const firstResults = categoryResult.slice(0,4);
        const div = document.createElement('div');
        document.body.append(div);
        div.setAttribute('class','related-products-list')
        div.insertAdjacentHTML('beforebegin','<h3>Related products</h3>');
        console.log(categoryResult)
        firstResults.forEach(result => {
            if(result.id != productID){
                div.innerHTML+=(`<div class=related-product><p><b>Title</b>
                    ${result.title}</p>
                    <img src=${result.image}></div>`);
            }
        })
           
        const footer = document.createElement('footer');
        document.body.append(footer);
        footer.innerHTML = `<h3>Copyright ${new Date().getFullYear()}</h3>`;
    });



}




