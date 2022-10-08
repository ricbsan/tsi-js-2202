/*let e;

e = document.getElementsByClassName('collection-item');


let vetor = array.from(e);

console.log(vetor);*/

let v = ['Bono','Paulo','Carla'];

v.forEach(fazAlgo);

function fazAlgo(nome,id){
    
    console.log(nome);
    console.log(id);
    if(nome=='Paulo'){
        v[id]='novo nome'
    }   
};