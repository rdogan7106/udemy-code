// Maps : key value  pairs (collection)

let val;

const numbers = new Map();
numbers.set(1,'one');
numbers.set('2','two');
numbers.set(3,'there');
numbers.set('four','four');
val = numbers;
val = numbers.get(1)
val = numbers.get('2')
val = numbers.get('four')
val = numbers.size;
val = numbers.has('2')
val = numbers.has(1);
val = numbers.has('four');
val = numbers.delete('four')
val = numbers.has('four')
// numbers.clear();
for(let [key,value] of numbers){
    console.log(key +' = '+value )
}
for(let [key,value] of numbers.entries()){
    console.log(key +' = '+value )
}
for(let key of numbers.keys()){
    console.log(key)
}
for(let value of numbers.values()){
    console.log(value)
}

numbers.forEach(function(key,value){
    console.log(val + ' - ' +value)
})
console.log(val);
let first = new Map(
   [ [1,'one'],
    [2,'two'],
    [3,'three'],]
)

let second = new Map(
   [ [4,'four'],
    [5,'five'],
    [6,'six'],]
    )

let merged =  new Map([...first,...second]);
console.log(merged)
