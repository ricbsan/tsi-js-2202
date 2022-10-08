//Como trabalhar com session storage
let btn = document.getElementById('botao');

btn.addEventListener('click', mostrar);

function mostrar(evento){
    evento.preventDefault();

    let entrada = document.getElementById('entrada');
    let mostrar = document.getElementById('mostrar');
    let valor = entrada.value;
    document.getElementById('mostrar').innerText = valor;
    mostrar.innerText = valor;
    entrada.value = '';

    //Após obtermos o dado do usuário vamos guardá-lo no local storage
    sessionStorage.setItem('dadoDoUsuario', valor);

    console.log('oi')


}
//Para recuperar o dado do local storage usamos o localstorage.getItem()
document.querySelector('#mostrar').innerText = sessionStorage.getItem('dadoDoUsuario');

    