let books = {
    "bookName":"war and peace",
    "author" :"Tolstoy",
    "price":24,
    "print":189
};

let jsonData = JSON.stringify(books);
let data = JSON.parse(jsonData);

alert(data.price);
alert(data.author)