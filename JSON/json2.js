$(document).ready(function(){
    let books = [
        {
            "bookName":"war and peace",
            "author" :"Tolstoy",
            "price":24,
            "print":189
        },
        {
            "bookName":"Harry Potter",
            "author" :"J.K Rowling",
            "price":25,
            "print":23
        },
        {
            "bookName":"Crime and Punishment",
            "author" :"Dostoyevski",
            "price":32,
            "print":312
        }    
    ];
    let jsonData = JSON.stringify(books);
    let data = JSON.parse(jsonData);

    console.log(data[1].author);
    console.log(data[2].bookName);
    console.log(data[0].price);

  
    for(let i=0; i<books.length; i++){
       let row = "<tr>";
       row +="<td>" + books[i].author +"</td>";
       row +="<td>" + books[i].bookName +"</td>";
       row +="<td>" + books[i].price +"</td>";
       row +="<td>" + books[i].print +"</td>";
       row +="</tr>";
       $('#tableBooks').append(row);
    }
   
});