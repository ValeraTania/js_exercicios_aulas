class Ecommerce{
    constructor() {
        this.listOfProducts = [];
        this.cart = [];
    }
    
   
     addProduct(product) {     
        this.listOfProducts.push(product);
    }

    setProductPrice(productID,newPrice){
       const productIndex =  this.listOfProducts.findIndex((product) => product.id === productID)
      if(productIndex === -1){
        console.log(`There's no product in the cart with the ID ${productID}`)
      } else {
        this.listOfProducts[productIndex].price = newPrice;
        console.log(`The price of the product was updated. The new price is ${this.listOfProducts[productIndex].price}`);

      }
    }

    getAllProducts(){
        this.listOfProducts.forEach(product => console.log(product))
    }

    // getAllProductsNames: devolve uma string com todos os nomes dos produtos, 
    // separados por ponto e virgula “;” ;

    getAllProductsNames(){ //funciona, simplificar
        let productsName = [];
        this.listOfProducts.forEach(product => productsName.push(product.name))
        const listOfNames = productsName.join(";");
        console.log(`List of products names: ${listOfNames}`);
       
    }
    getProductById(productID){
        const productIndex =  this.listOfProducts.findIndex((product) => product.id === productID)
       if(productIndex === -1){
        console.log(`There's not a product with ID: ${productID}`)
       } else{
        console.log(this.listOfProducts[productIndex]);  
    }
}

    // ○ getProductByName: aceita um nome de produto e devolve esse produto;
    getProductByName(productName){
        const productIndex =  this.listOfProducts.findIndex((product) => product.name === productName)
        if(productIndex === -1){
            console.log(`There's not a product with name: ${productName}`)
           } else{
            console.log(this.listOfProducts[productIndex]);  
        }
    }

    // ○ getProductsByPrice: 
    // ■ aceita 2 parametros: initialPrice e finalPrice
    // ■ Devolve os produtos que sejam iguais ou superiores a initialPrice e menores ou iguais a finalPrice;
    getProductsByPrice(initialPrice,finalPrice){
        const productsByPrice = this.listOfProducts.filter((product) => product.price >=initialPrice && product.price <= finalPrice);
        if(productsByPrice.length === 0){
            console.log(`No products in the price range of ${initialPrice}-${finalPrice} euros`);
        }else{
            console.log(productsByPrice);
        }
    }
    
    
    // ○ addProductToCart: aceita um produto e adiciona esse produto ao carrinho de compras;
    addProductToCart(product){
        this.cart.push(product);
        console.log('Product added to cart')
    }

    // ○ getCart: devolve a lista de produtos do carrinho de compras;
    getCart(){
        this.cart.forEach(product => console.log(product))

    }
    // ○ getCartTotalPrice: devolve a soma de todos os produtos do carrinho;
    getCartTotalPrice(){
        const initialValue = 0;
        const cartListOfPrices = this.cart.map((product) => product.price);
        const totalPrice =  cartListOfPrices.reduce((accumulator, currentValue) => 
                                            accumulator + currentValue,initialValue);
        console.log(totalPrice);

    }
    
}
const ecommerce = new Ecommerce();
 ecommerce.addProductToCart( {id: 1, name: "Bag", price: 45 });
 ecommerce.addProductToCart( {id: 4, name: "Dress", price: 55 });

 ecommerce.addProduct( {id: 2, name: "Shoes", price: 25 });
 ecommerce.addProduct( {id: 3, name: "Jean", price: 50 });

