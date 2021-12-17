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
            {id:2,name:'Mouse',price:10},
            {id:3,name:'Klavye',price:20}
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
    const Selectors ={
        productList :"#item-list"
    }
    return {
        createProductList :function(products){
            let html = '';
            products.forEach(prd => {
                html +=`
                     <tr class="align-middle">
                        <td>${prd.id}</td>
                        <td>${prd.name}</td>
                        <td>${prd.price} $</td>                        
                        <td class="text-end">
                            <button type="submit" class="btn btn-warning mt-2">
                                <i class="fas fa-edit"></i> 
                            </button>
                        </td>
                     </tr>`
            });


            document.querySelector(Selectors.productList).innerHTML = html;


        },
        getSelectors :function(){
            return Selectors;
        }
    }

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