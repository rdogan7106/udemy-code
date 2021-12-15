document.querySelector('#getOne').addEventListener('click',getOne);
document.querySelector('#getAll').addEventListener('click',getAll);

function getOne(){
    let id = document.getElementById('postId').value;
    let url = "https://jsonplaceholder.typicode.com/posts/"+id
    let xhr = new XMLHttpRequest();

    xhr.open('GET',url,true);
    xhr.onload = function(){
        if(this.status === 200){
            let post = JSON.parse(this.responseText)
            let html = "";          
                html +=`
                <div class="card mb-2 " style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title bg-success text-white text-center">${post.id} - ${post.title}</h5>
                        <p class="card-text">${post.body}</p>
                    </div>
                    </div>`         
       
            document.querySelector('#results').innerHTML = html
        }
    }
    xhr.send();

}
function getAll(){
    let url = "https://jsonplaceholder.typicode.com/posts"
    let xhr = new XMLHttpRequest();

    xhr.open('GET',url,true);
    xhr.onload = function(){
        if(this.status === 200){
            let posts = JSON.parse(this.responseText)
            let html = "";
            posts.forEach(element => {
                html +=`
                <div class="card mb-2 " style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title bg-success text-white text-center">${element.title}</h5>
                        <p class="card-text">${element.body}</p>
                    </div>
                    </div>`
    
                
            });
       
            document.querySelector('#results').innerHTML = html
        }
    }
    xhr.send();
}