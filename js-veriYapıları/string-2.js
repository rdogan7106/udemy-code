let sentence = " Tamplete Literal or template strings is the ability  have multi strings without any funny business. ";
let url = "https://github.com/rdogan7106/udemy code rahman ö ı ü ş ğ  " 

// total character counts
console.log(sentence.length);


// total word counts
console.log(sentence.trim().split(' ').length);

//Lowercase

console.log(sentence.toLocaleLowerCase());

//Uppercase
console.log(sentence.toLocaleUpperCase())

//Delete leading and trailing spaces
console.log(sentence.trim());

//letter change
console.log(sentence.replace('a','b'));

//remove https:// from url
let str = 'https://';
console.log(url.substr(str.length));
console.log(url.slice(str.length));

//What protocol does the url use?
console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

// Does the url contain .com?

console.log(url.indexOf('.com'));
console.log(url.includes('.com'));

//
console.log(url.toLocaleLowerCase().
                replace(/ /g,'-').
                replace(/ı/g,i).
                replace(/ö/g,o).                                            
                replace(/ğ/g,g).                                           
                replace(/ş/g,s).                                           
                replace(/ç/g,c)                                           
                                                          
);
