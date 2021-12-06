//Demo Numeric Range
let num = {
    min:0,
    max:100,
    checkNumericRange : function (value) {
        if(typeof value !== 'number'){
            return false
        }
        else{
            return value >= this.min && value <=this.max
        }
    }
}
console.log(num.checkNumericRange(20))
console.log(num.checkNumericRange(-20))

let num1={ min:40 , max:60 };
console.log(num.checkNumericRange.call(num1,30))
console.log(num.checkNumericRange.apply(num1,[43]))
let checkNum = num.checkNumericRange.bind(num1);
console.log(checkNum(55));