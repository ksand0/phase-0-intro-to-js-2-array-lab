const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    return cats.push(name);
}

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}


function appendCat(name){
    const copyCats = [...cats]; 
    const oldCats = copyCats.push(name);
    return copyCats;
}

function prependCat(name){
    const copyCats = [...cats]; 
    const oldCats = copyCats.unshift(name);
    return copyCats;
}

function removeLastCat(){
    const copyCats = [...cats]; 
    const oldCats = copyCats.pop();
    return copyCats;
}

function removeFirstCat(){
    const copyCats = [...cats]; 
    const oldCats = copyCats.shift();
    return copyCats;
}

