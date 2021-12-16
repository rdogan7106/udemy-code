// function fn(){
//     return Promise.resolve('hello');
// }
// fn().then(res => console.log(res))

// async function fn(){
//     return Promise.resolve('hello');
// }
// fn().then(res => console.log(res)); 
let isError = false;
function getCategory(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            if(!isError){
                resolve('phone')
            }
            else{
                reject('erroe')
            }
        }, 1000);
    })
}
function getProducts(category){
    return new Promise(resolve =>{
        setTimeout(() => {
            resolve(`5 product in ${category}`)
        }, 1000);

    })
}

getCategory()
.then(getProducts)
.then(res => console.log(res))
.catch(error =>{console.log(error)})

console.log("***************************")

// async function getProduct() {
//    let category = await getCategory();
//    let result = await getProducts(category);
//    console.log(result)
    
// }

async function getProduct() {
    try{
        let category = await getCategory();
        let result = await getProducts(category);
    }catch(error){
        console.log(result);
    }    
 }
getProduct();