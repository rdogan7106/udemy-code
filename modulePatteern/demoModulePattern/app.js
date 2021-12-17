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
        products :[],
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
        },
        addProduct :function(name,price){
            let id;
            if(data.products.length>0){
                id = data.products[data.products.length - 1].id +1;
            }else{
                id = 0;
            }
            const newProduct = new Product(id,name,parseFloat(price));
            data.products.push(newProduct);
            return newProduct;
        }
    }
})();


// UI Controller
const UIController = (function(){
    const Selectors ={
        productList :"#item-list",
        addButton : '#addBtn',
        productName: '#productName',
        productPrice :'#productPrice', 
        productCard :'#productCard'
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
        },
        addProduct :function(prd){
            document.querySelector(Selectors.productCard).style.display = 'block';
            let item =`
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
            document.querySelector(Selectors.productList).innerHTML +=item            
        },
        clearInput :function(){
            document.querySelector(Selectors.productName).value ='';
            document.querySelector(Selectors.productPrice).value ='';
        },
        hideCard :function(){
            document.querySelector(Selectors.productCard).style.display = 'none';
        }
    }

})()


// App Controller
const AppController = (function(ProductCtrl,UICtrl){
    const UISelectors = UIController.getSelectors();
    //Load EventListener
    const loadEventListener = function(){
        //add product event
        document.querySelector(UISelectors.addButton).addEventListener('click',productAddSubmit)
    }
    const productAddSubmit =  function(e){
        const productName = document.querySelector(UISelectors.productName).value;
        const productPrice = document.querySelector(UISelectors.productPrice).value;
        //console.log(productName,productPrice)
        if(productName!=='' && productPrice!==''){
            //Add product
           const newProduct = ProductController.addProduct(productName,productPrice);
            // add item to list
           UIController.addProduct(newProduct)
          // Clear Input
           UIController.clearInput();
        }
        e.preventDefault();
    }
    return{
        init : function(){
            console.log('starting app...');
            const products = ProductCtrl.getProducts();
            if(products.length==0){
                UIController.hideCard();
            }
            else{
                UICtrl.createProductList(products)
            }
            
            //loadEventListeners
            loadEventListener()
        }
    }
    
})(ProductController,UIController)
AppController.init();