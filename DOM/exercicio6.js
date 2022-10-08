//Como atualizar um elemento com JS



//Criamos um novo elemento
const novoTitulo = document.createElement('h2');
//Colocamos as caracteristicas que desejamos
novoTitulo.id = 'task-title';
novoTitulo.appendChild(document.createTextNode('Nova Lista'));

//Capturamos o elemento h5 atual (que está originalmente no HTML)
const tituloAtual = document.getElementById('task-title');

//Capturamos o elemento mãe/pai do elemento que queremos atualizar
let divMaeDoTitulo = document.getElementsByClassName('card-action');

console.log(divMaeDoTitulo);

divMaeDoTitulo[0].replaceChild(novoTitulo, tituloAtual);

console.log(divMaeDoTitulo);


