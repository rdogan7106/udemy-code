let product = [
    {id:1,name:"Samsung S8",price:3000},
    {id:2,name:"Samsung S7",price:2000},
    {id:3,name:"Samsung S6",price:1000}
];

//let added = false;
let added = true;

function addProduct(prd,callback){
    if(added){
        setTimeout(()=>{
            product.push(prd);    
            callback(null,prd);
        },2000)
    }
    else{
        callback('500',prd)

    }
    
}
function getProducts(){
    setTimeout(()=>{
        product.forEach(p=>{
            console.log(p.name)
        }
    )},1000)
}
//addProduct({id:4,name:"Samsung S5",price:500},getProducts);
//getProducts();


addProduct({id:4,name:"Samsung S5",price:500},function(err,data){
    if(err){
        console.log('error :' + err);
    }
    else{
        console.log(data)
    }
});
