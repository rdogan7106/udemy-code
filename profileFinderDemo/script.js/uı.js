class UI{
    constructor(){
        this.profilContainer = document.querySelector('#profileContainer');
        this.alert = document.querySelector('#alert');
    }
     showProfile(profile) {
         this.profilContainer.innerHTML = `
            <div class="card card-body">
                <div class = "row">
                    <div class="col-md-3">
                       <a href="https://placeholder.com/" ><img class="img-thumbnail" src="https://via.placeholder.com/150"></a>                                         
                    </div>
                    <div class="col-md-9">
                        <h4>Contact</h4>
                        <ul class="list-group">
                            <li class="list-group-item">name: ${profile.name}</li>
                            <li class="list-group-item">username: ${profile.username}</li>
                            <li class="list-group-item">email: ${profile.email}</li>
                            <li class="list-group-item">address: ${profile.address.street}</li>
                                                                 ${profile.address.city}
                                                                 ${profile.address.zipcode}
                                                                 ${profile.address.suite}
                            <li class="list-group-item">email: ${profile.website}</li>
                            <li class="list-group-item">email: ${profile.company.name}</li>
                        </ul>
                        <h4 class="mt-4">Todo List</h4>
                        <ul id="todo" class="list-group"></ul>
                    </div>
                </div>
            </div>         
        `        
    }
    showAlert(text){

        this.alert.innerHTML =`${text} is not found`
    }
    showTodo(todo){
        let hmtl = "";
        todo.forEach(item =>{
            if(item.completed){
                hmtl += `<li class = "list-group-item bg-success">${item.title}</li>`
            }
            else{
                html += `<li class = "list-group-item bg-secondary">${item.title}</li>`
            }
        })
        this.profilContainer.querySelector('#todo').innerHTML = html;        
    }
    clear(){
        this.profilContainer.innerHTML ="";
        this.alert.innerHTML = "";
    }
}