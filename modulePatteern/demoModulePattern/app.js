// Storage Controller
const StorageController = (function(){

})();

// Product Controller
const ProductController = (function(){
    //private
    const Product = function(id,name,price){
        this.id = id;
        this.name = name;
        this.price = price;
    }
    const data = {
        products :[
            {id:0,name:'Monitor',price:100},
            {id:1,name:'RAM',price:30},
            {id:0,name:'Mouse',price:10}
        ],
        selectedProduct:null,
        totalPrice:0
    }

    //public
    return{
        getProducts : function(){
            return data.products;
        },
        getData : function(){
            return data;
        }
    }
})();


// UI Controller
const UIController = (function(){

})()


// App Controller
const AppController = (function(ProductCtrl,UICtrl){
    return{
        init : function(){
            console.log('starting app...');
            const products = ProductCtrl.getProducts();
            UICtrl.createProductList(products)
        }
    }
    
})(ProductController,UIController)
AppController.init();