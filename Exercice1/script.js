let books = [
    { id: 1, titre: "Clean Code", auteur: "R. Martin", prix: 250, stock: 12 },
    { id: 2, titre: "You Don't Know JS", auteur: "Kyle Simpson", prix: 70, stock: 5 },
    { id: 3, titre: "Eloquent JavaScript", auteur: "Marijn Haverbeke", prix: 150, stock: 0 }
];

function addBook(title,author,price,stockk){
    let max=0;
    books.map(item=>max<item.id?max=item.id:null);
    max+=1;
    let livre = { id: max, titre: title, auteur: author, prix: price, stock: stockk };
    books.push(livre);
}

addBook("TEST","author",12,4);

function getBooksByAuthor(author){
    return books.filter(item=>item.auteur===author);
}

function valeurStock(){
    let valeur=0;
    books.map(item=>valeur+=item.prix*item.stock);
    return valeur;
}

function updateStock(idd,newStock){
    books.map(item=>item.id===idd?item.stock=newStock:null);
}

function sortByPrice(){
    books.sort((a,b)=>a.prix-b.prix);
}
