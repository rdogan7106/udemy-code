let models = [
    {
        name:'image1',
        image:'https://cdn.pixabay.com/photo/2021/11/22/17/25/birds-6816960_960_720.jpg',
        link: 'https://pixabay.com/tr/photos/ku%c5%9flar-karabatak-ornitoloji-t%c3%bcrler-6816960/'
    },
    {
        name:'image2',
        image:'https://cdn.pixabay.com/photo/2020/06/14/22/46/the-caucasus-5299607_960_720.jpg',
        link:'https://cdn.pixabay.com/photo/2020/06/14/22/46/the-caucasus-5299607_960_720.jpg'
    },
    {
        name:'image3',
        image:'https://cdn.pixabay.com/photo/2020/06/29/00/26/iris-5350997_960_720.jpg',
        link:'https://pixabay.com/tr/photos/%c4%b1ris-wild-%c4%b1ris-sar%c4%b1-%c3%a7i%c3%a7ek-flowers-5350997/'
    },
    {
        name:'image4',
        image:'https://cdn.pixabay.com/photo/2019/02/25/00/17/kitten-4018756_960_720.jpg',
        link:'https://pixabay.com/tr/photos/kedi-yavrusu-k%c4%b1rm%c4%b1z%c4%b1-two-small-4018756/'
    }
];
let index = 0;
let sliderCount = models.length;
let interval;
let settings={
    duration : '2000',
    random : false
}


init(settings)

document.querySelector('#left').addEventListener('click',function(){
    index--;
    showSlide(index);
})
document.querySelector('#right').addEventListener('click',function(){
    index++;
    showSlide(index);
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval)
    })
})
document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings)
    })
})

function init(settings){
   interval =  setInterval(function(){
        let prev;
        if(settings.random){
            do {
                index = Math.floor(Math.random()*sliderCount)
            } while (index===prev) 
            prev = index           
        }        
        else{
            if(sliderCount==index+1){
                index = -1;
            }
            showSlide(index);
            index++;
        }
        showSlide(index)

    },settings.duration)


}
function showSlide(i){
    index=i;
    if(i<0){
        index = sliderCount-1;

    }
    if(i >= sliderCount){
        index = 0;
    }
    document.querySelector('.card-title').textContent = models[index].name
    document.querySelector('.card-img-top').setAttribute('src',models[index].image);
    document.querySelector('.card-link').setAttribute('href',models[index].link);
    }




