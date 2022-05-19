
let bubbleSort=require('./bubble-sort');

class Book{
    constructor(title, price){
        this.title=title;
        this.price=price;
    }
}

let books=[

    new Book("A",220),
    new Book("B",430),
    new Book("C",120),
    new Book("D",450),
    new Book("E",90)
];

bubbleSort(books, (b1,b2)=> b1.price>b2.price);

console.log('books',books);





