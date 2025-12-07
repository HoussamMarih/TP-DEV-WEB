let panier=[];

function addItem(n,p){
    let obj={
        nom:n,
        prix:p
    };
    panier.push(obj);
}

function removeItem(name){
    panier=panier.filter(item=>item.nom!==name);
}

function total(){
    let tot=0;
    panier.map(item=>tot+=item.prix);
    return tot;
}

function list(){
    panier.map(item=>console.log(`${item.nom} ${item.prix}dh`));
}

addItem("Phone",12000);
addItem("Computer",5000);
addItem("Pencil",2);

list();

console.log(`Total : ${total()}dh`);

removeItem("Computer");

list();

console.log(`Total : ${total()}dh`);