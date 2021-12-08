 // 'this' Keyword

 // ES5
//  let list = {
//      category : 'phone',
//      names : ['IPhone','Samsung S8', 'Iphone 7'],
//      call: function(){
//          let self = this;
//          this.names.map(function(name){
//              console.log(`${this.category} ${name}`)
//          })
//      }
//  }

//ES6
 let list = {
    category : 'phone',
    names : ['IPhone','Samsung S8', 'Iphone 7'],
    call: function(){
        this.names.map((name) =>{
            console.log(`${this.category} ${name}`)
        })
    }
}

list.call();

//ES6 
function Game(){
    this.live = 0;
    this.addLive = function(){
        this.Oneup = setInterval(() => {
            console.log(++this.live)
        },1000)
    }
}
let player = new Game();
player.addLive();