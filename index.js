// Write your solution here!
const cats =(["Milo", "Otis", "Garfield"]);

function destructivelyAppendCat() {
cats.push('Ralph');
return cats
} 

function destructivelyPrependCat() {
cats.unshift('Bob');
return cats
}

function destructivelyRemoveLastCat() {
    cats.pop('');
    return cats
} 


function destructivelyRemoveFirstCat() {
    cats.shift('');
    return cats 
} 

function appendCat() {
        cats.slice('Broom');
        const copyOfCats =[...cats, "Broom"];
        return copyOfCats; 
} 


function prependCat() {
    //cats.unshift("");
    const copyOfCats =["Arnold", ...cats];
    return copyOfCats ;
} 

function removeLastCat() {
    const copyOfCats = cats.slice(0,2);
    return copyOfCats ;
} 
function removeFirstCat() {
    const copyOfCats=cats.slice(1);
    return (copyOfCats);

}
