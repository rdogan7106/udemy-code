//text
function getText(){
    fetch('fetch.txt')
    .then(response =>{
        //console.log(response.text())
        return response.text();
    }).then(data =>{
        console.log(data)
    }).catch(error =>{
        console.log(error)
    })
}
getText();

//json

function getJson(){
    fetch('fetch.json')
    .then(response =>{
        return response.json()
    }).then(data =>{
        console.log(data)
    }).catch(error =>{
        console.log(error)
    })
}

getJson();

//external Api
function getExternalApi(){
    fetch('https://randomuser.me/api/?results=5')
    .then(data =>{
        return data.json()
    }).then(users =>{
        let html = ""
        users.results.forEach(element => {
            console.log(element)
            html +=`
                    <div>
                        <img src ="${element.picture.medium}"
                        <div> ${element.name.first}</div>
                        <div> ${element.name.first}</div>
                    </div>
            `;
            
        });
        document.querySelector('#users').innerHTML = html
    }).catch(error =>{
        console.log(error)
    })
}
getExternalApi()

function postExternalApi(){
    const url = "https://jsonplaceholder.typicode.com/todos/"
    let data = {
        method :"POST",
        body : JSON.stringify({
            userId :1,
            title :"sample title",
            body : "sample body"
        }),
        headers : new Headers({
            'content-type':'application/json'
        })
    }
    fetch(url,data)
    .then(response =>{
        console.log(response)
    })
}
postExternalApi()