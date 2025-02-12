class Ecommerce{
    constructor() {
        this.listOfProducts = [];
    }
    
   
     addProduct(product) {     
        this.listOfProducts.push(product);
        console.log(this.listOfProducts);
    }

    setProductPrice(productID,newPrice){
        if(this.listOfProducts.includes(product.productID)){
            this.listOfProducts[productID].price = newPrice;

        }else {
            console.log("This product is not on the list of products");
        }
    }

    getAllProducts(){
        return listOfProduct;
    }

    
}
const ecommerce = new Ecommerce();
 ecommerce.addProduct( {id: 1, name: "Bag", price: 45 });
 ecommerce.addProduct( {id: 2, name: "Shoes", price: 25 });
 ecommerce.addProduct( {id: 3, name: "Jean", price: 50 });

