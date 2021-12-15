let myObj = {
   // method:'POST',
    url :"https://randomuser.me/api/?result=5",
    // body:{
    //     name:"Zehra",
    // }
    //headers :{ "content-type":"application/json"}

}
let request = obj =>{
    return new Promise((resolve,reject)=>{
        let xhr =  new XMLHttpRequest();
        xhr.open(obj.method || 'GET', obj.url);
        if(xhr.headers){
            Object.keys[obj.headers].foreEach(key =>{
                xhr.setRequestHeader(key,obj.headers[key])
            })
        }
        xhr.onload = () =>{
            if(xhr.status >=200 && xhr.status<300){
                resolve(xhr.response);
            }
            else{
                reject(xhr.statusText)
            }
        }
        xhr.onerror = () =>{
            reject(xhr.statusText);           
        }
        xhr.send(obj.body);
    })
    }
    let buildHTML = function(data){
        let users =JSON.parse(data);
        let html ="";
        users.foreEach(user =>{
            html +=`
                <div>
                    <img src = "${user.picture.medium}">
                    <div>
                    ${user.name.title}
                    ${user.name.first}
                    ${user.name.last}
                    </div>
                </div>
            `
        })
        document.querySelector('#users').innerHTML = html
    return Promise.resolve('HTML is Loaded')

    }
    request(myObj).then(buildHTML).
        then(message =>{
            console.log(message);
        } )
        .catch(error =>{
        console.log(error)
    })
    