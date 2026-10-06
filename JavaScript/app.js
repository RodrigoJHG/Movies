let typeCard = "Debid Card";
switch (typeCard) {
    case "Debid Card":
        console.log("This is a debid card");
        break;
    case "Credit Card":
        console.log("This is a credit card");
        break; 
    default:
        console.log("No card");
}


let count = 50;

while (count > 0) {
    console.log(count);
    count = count - 1;
}

let names = ["Ryan", "Joe","John"];

for (let i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}

function greeting(Name) {
    console.log("Hello " + Name);
}

greeting("Markus");

function add(n1, n2) {
    console.log(n1 + n2);

}

add(3, 2);