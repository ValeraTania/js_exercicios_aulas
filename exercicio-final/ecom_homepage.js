fetch('https://fakestoreapi.com/products')
.then(result => result.json())
.then(formatedData => {

    const div = document.createElement('div');
    document.body.prepend(div);
    div.setAttribute('class','products-grid');
    formatedData.forEach(data => { 
        div.insertAdjacentHTML('beforeend',`<div class=product><p>${data.id}</p><img src='${data.image}'><b>${data.title}</b></div></b><button id=${data.id}>Add to cart</button>`);

    });
    console.log(formatedData);
    const actionButton = document.querySelectorAll('button');
   
 //   actionButton.forEach(button => button.addEventListener('click', () => console.log(`button ${button.id} clicked`)));
    actionButton.forEach(button => button.addEventListener('click', () => addToCart()));

}
);

function addToCart(){
    // const request = new XMLHttpRequest();
    // request.open('PUT','https://fakestoreapi.com/carts/7');
    // request.send();
    // request.responseText = 'json';
    // request.onload = () => {
    //     if (request.readyState == 4 && request.status == 200) {
    //       const data = request.response;
    //       console.log(data);
    //     } else {
    //       console.log(`Error: ${request.status}`);
    //     }
    //   };
    fetch('https://fakestoreapi.com/carts/7',{
        method: "PUT",
        body: JSON.stringify({
            userId: 1,
            Date.getFullYear(),
            product: [
                {productID: 1, quantity: 1}
            ]
  })
  
})
.then((response) => response.json())
.then((json) => console.log(json));
        
    
}


