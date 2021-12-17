const products =[
    { name :'Samsung S7',price:3000},
    { name :'Samsung S8',price:4000},
    { name :'Samsung S9',price:5000},
    { name :'Samsung S6',price:2000}
]

let productController = (function(data){
    //private members
    let collections =data || [];
    const addProduct = function(product){
        collections.push(product)
    }
    const removeProduct = function(product){
        let index = collections.indexOf(product)
        if(index>=0){
            collections.splice(index,1)
        }
    }   
    const getProduct = function(){
        return collections;
    }
    //public member
    return{
        addProduct,
        removeProduct,
        getProduct
    }
})(products);


productController.addProduct(products[0]);
productController.addProduct(products[1]);
productController.addProduct(products[2]);
productController.addProduct(products[3]);
productController.removeProduct(products[3]);
console.log(productController.getProduct());

//Module Extenting
let extented = (function(m){
    m.sayHello = function(){
        console.log('Hello from extented Module')
    }
    return m;

})(productController || {})
extented.sayHello();
console.log(extented.getProduct());