function insert(obj){
    obj.id = idx++;
    arr.push(obj);
}

function list(){
    // let l = arr.length;
    // for(let i = 0; i < l; i++)
    //     console.log(arr[i]);
    arr.forEach((elem) => console.log(elem));
}

function searchByID(id){
    return arr[id];
}

function searchByCategory(category){
    let aux = [];
    let l = arr.length;
    for(let i = 0; i < l; i++){
        if(category === arr[i].categoria){
            aux.push(arr[i]);
        }
    }
    return aux;
}

function searchByName(nome){
    let l = arr.length;
    for(let i = 0; i < l; i++){
        if(arr[i].nome.includes(nome)){
            return arr[i];
        }
    }
}

function update(id, produto){
    let l = arr.length;
    for(let i = 0; i < l; i++){
        if(arr[i].id === id){
            produto.id = arr[i].id;
            arr[i] = produto;
            return;
        }
    }
}

function deleteByID(id){
    let l = arr.length;
    for(let i = 0; i < l; i++){
        if(arr[i].id === id){
            arr.splice(id, 1);
        }
    }
}

let arr = [];
let idx = 0;

module.exports = {insert, list, update, deleteByID, searchByCategory,
    searchByName, searchByID
};