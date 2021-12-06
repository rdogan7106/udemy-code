let welcome = function() {
    console.log(`Welcome ${this.name}`);    
}
let zehra = {name:'zehra'};
let rahman ={name:'rahman'}
welcome.call(zehra);
welcome.call(rahman);

welcome.apply(rahman);
welcome.apply(zehra);

welcomeRahman = welcome.bind(rahman);
welcomeZehra = welcome.bind(zehra);
welcomeRahman();
welcomeZehra();

console.log("**********************************************")

let welcome2 =function(a,b) {
    console.log(`welcomwn ${this.name} . Are you interested in ${a} and ${b}`);
};
welcome2.call(rahman,'java','javaScript');
welcome2.call(zehra,'toys','Doll');

welcome2.apply(rahman,['java,javaScript']);
welcome2.apply(zehra,['toys','Doll']);

welcomeRahman2 = welcome2.bind(rahman);
welcomeZehra2 = welcome2.bind(zehra);
welcomeRahman2('java','javaScript');
welcomeZehra2('toys','Doll');
