fetch('https://fakestoreapi.com/products')
.then(result => result.json())
.then(formatedData => {

    const div = document.createElement('div');
    document.body.prepend(div);
    div.setAttribute('class','products-grid');
    div.insertAdjacentHTML("beforebegin","<h1>List of products</h1>");
    formatedData.forEach(data => { 
        div.insertAdjacentHTML('beforeend',`<div class=product>
                                            <img src='${data.image}'>
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
    let quantity=1;

   function addToCart(productId) {
    let existingProduct = cart.findIndex(item => item.productId === productId);
    if(existingProduct === -1){
        cart.push({ productId,  quantity:1 });
    }
    else  {
        let quantity = cart[existingProduct].quantity;
        cart[existingProduct].quantity = quantity+1;
    } 
   
    updateCart(productId);
}


 function updateCart(productId) {
    const selectedProduct = {
        userId: 1, 
        date: new Date().toISOString().split('T')[0],
        products: cart
    };

    fetch(`https://fakestoreapi.com/carts/${productId}`,{
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(selectedProduct)
    })
    .then(response => response.json())
    .then(result => console.log(result.date,result.products))
}
    



