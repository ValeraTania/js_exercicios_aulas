fetch('https://fakestoreapi.com/products')
.then(result => result.json())
.then(formatedData => {

    const div = document.createElement('div');
    document.body.prepend(div);
    div.setAttribute('class','products-grid');
    div.insertAdjacentHTML("beforebegin","<h1>List of products</h1>");
    formatedData.forEach(data => { 
        div.insertAdjacentHTML('beforeend',`<div class=product>
                                            <p>${data.id}</p><img src='${data.image}'>
                                            <b>${data.title}</b></b>
                                            <button id=${data.id}>Add to cart</button></div>`);

    });
    console.log(formatedData);
    const actionButton = document.querySelectorAll('button');
   
    actionButton.forEach(button => button.addEventListener('click', () => {
        const productId = button.id;
       addToCart(productId);
       }));
        

});


    let cart = [];

   
   function addToCart(productId) {
   
    const existingProduct = cart.find(item => item.productId === productId);
    if (existingProduct) {
        const quantity =+1 ;
    } else {
        cart.push({ productId, quantity: 1 });
    }
    updateCart();
}



 function updateCart() {
    const selectedProduct = {
        userId: 1, 
        date: new Date().toISOString().split('T')[0],
        products: cart
    };

    fetch("https://fakestoreapi.com/carts/7",{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(selectedProduct)
    })
    .then(response => response.json())
    .then(result => console.log(result.date,result.products))
}
    



