class Ecommerce{
    constructor(id,name,price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    

     addProduct(product) {
        listProduct.push(product);
    }

    setProductPrice(productID,newPrice){
        listProduct[productID].price = newPrice;
    }

    getAllProducts(){
        return listProduct;
    }

    
}

const product1 = new Ecommerce(0,'bag',15);
const product2 = new Ecommerce(1,'shoe',25);
const product3 = new Ecommerce(2,'tea',1);