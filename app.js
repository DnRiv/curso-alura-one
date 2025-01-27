let amigos = [];

const botonAñadir = document.querySelector('.button-add');
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');

botonAñadir.addEventListener('click', e =>{
    const nombre = inputAmigo.value.trim();
    
    if(nombre ===''){
    alert('Por favor, inserte un nombre.');
    return false };

    amigos.push(nombre);
    console.log(amigos);
    renderLists()
    inputAmigo.value = "";

    }
);

function renderLists() {
    const listaAmigosUl = document.getElementById('listaAmigos');
    listaAmigosUl.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosUl.appendChild(li);
    });
}

