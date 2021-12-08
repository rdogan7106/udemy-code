// Sets (Collections - Unique value);

let val = 0;
let mySet = new Set();
mySet.add(1); 
mySet.add(1)
mySet.add(2);
mySet.add(2);
mySet.add('iki');
mySet.add('2');
mySet.add({a:5,b:6});

let obj = {a:5,b:6}

mySet.add(obj)
val = mySet.has(1);
val = mySet.has(obj)
val = mySet.size
 
mySet.delete(1)
console.log(val);
for(let item of mySet){
    console.log(item)
};
for(let item of mySet.keys()){
    console.log(item)
};
for(let item of mySet.values()){
    console.log(item)
};
for(let [keys,value] of mySet.entries()){
    console.log(keys,value)
};

console.log(Array.from(mySet));

let mySet2 = new Set([1,2,3,4]);

console.log(mySet2);

// intersect
let intersect = new Set(Array.from(mySet).filter(x => mySet2.has(x)));
let intersect2 = new Set([...mySet].filter(x => mySet.has(x)));



// difference

let difference = new Set([...mySet].filter(x =>!mySet2.has(x)))

console.log(intersect);
console.log(intersect2);
console.log(difference);
