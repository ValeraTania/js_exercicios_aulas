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
        return `There's no product in the cart with the ID ${productID}`
      } else {
        this.listOfProducts[productIndex].price = newPrice;
        return `The price of the product was updated. The new price is ${this.listOfProducts[productIndex].price}`;

      }
    }

    getAllProducts(){
      return  this.listOfProducts.map(product => product);
    }

    // getAllProductsNames: devolve uma string com todos os nomes dos produtos, 
    // separados por ponto e virgula “;” ;

    getAllProductsNames(){ 
        let productsName = [];
        this.listOfProducts.forEach(product => productsName.push(product.name))
        const listOfNames = productsName.join(";");
        return `List of products names: ${listOfNames}`;
       
    }
    getProductById(productID){
        const productIndex =  this.listOfProducts.findIndex((product) => product.id === productID)
       if(productIndex === -1){
        return `There's not product with ID: ${productID}`;
       } else{
        return this.listOfProducts[productIndex];  
    }
}

    
    getProductByName(productName){
        const productIndex =  this.listOfProducts.findIndex((product) => product.name === productName)
        if(productIndex === -1){
            return `There's not a product with name: ${productName}`
           } else{
            return this.listOfProducts[productIndex];  
        }
    }

    // ○ getProductsByPrice: 
    // ■ aceita 2 parametros: initialPrice e finalPrice
    // ■ Devolve os produtos que sejam iguais ou superiores a initialPrice e menores ou iguais a finalPrice;
    getProductsByPrice(initialPrice,finalPrice){
        const productsByPrice = this.listOfProducts.filter((product) => product.price >=initialPrice && product.price <= finalPrice);
        if(productsByPrice.length === 0){
            return `No products in the price range of ${initialPrice}-${finalPrice} euros`;
        }else{
            return productsByPrice;
        }
    }
    
    
    // ○ addProductToCart: aceita um produto e adiciona esse produto ao carrinho de compras;
    addProductToCart(product){
        this.cart.push(product);
    }

    // ○ getCart: devolve a lista de produtos do carrinho de compras;
    getCart(){
      return this.cart.map(product =>  product)
    }
    // ○ getCartTotalPrice: devolve a soma de todos os produtos do carrinho;
    getCartTotalPrice(){
        const initialValue = 0;
        const cartListOfPrices = this.cart.map((product) => product.price);
        const totalPrice =  cartListOfPrices.reduce((accumulator, currentValue) => 
                                            accumulator + currentValue,initialValue);
        return totalPrice;

    }
    
}

//Test products
const ecommerce = new Ecommerce();
 ecommerce.addProductToCart( {id: 1, name: "Bag", price: 45 });
 ecommerce.addProductToCart( {id: 4, name: "Dress", price: 55 });

 ecommerce.addProduct( {id: 2, name: "Shoes", price: 25 });
 ecommerce.addProduct( {id: 3, name: "Jean", price: 50 });

