let amigos = [];

const botonAñadir = document.querySelector('.button-add');
const inputAmigo = document.getElementById('amigo');

botonAñadir.addEventListener('click', e =>{
    const nombre = inputAmigo.value;
    
    if(nombre ===''){
        alert('Por favor, inserte un nombre.');
    } return false;

    amigos.push(nombre);
    console.log(amigos);
    nombre = "";
});

