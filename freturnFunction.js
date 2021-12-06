//Functions that returns Functions
function Question(hobby){
    switch(hobby){
        case 'car':
            return function(name){
                console.log(name + ' do you have a car')
            }
            break;

        case 'book':
            return function(name){
                console.log(name + ' what is your favorite book')
            }
            break;

        case 'software':
            return function(name,type){
                console.log(name + ` are you interested in ${type}`)
            }
            break;
        
            default:
                return function(name){
                    console.log(name + ' What is your hobbu')
                }
    }
}

let carQuestion = Question('car');
carQuestion('zehra');

let bookQuestion = Question('book');
bookQuestion('rahman');
bookQuestion('selim');

let softwareQuestion  =Question('software');
softwareQuestion('rahman','java');
softwareQuestion('zehra','C#');