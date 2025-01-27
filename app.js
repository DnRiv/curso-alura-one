//Amigo Secreto.

const botonAñadir = document.querySelector('.button-add');
const botonSortear = document.querySelector('.button-draw');
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const listaResultado = document.getElementById('resultado');

let amigos = [];

//evento click botón añadir.
botonAñadir.addEventListener('click', e =>{
    const nombre = inputAmigo.value.trim();
    
    if(nombre ===''){
    alert('Por favor, inserte un nombre.');
    return false };

    amigos.push(nombre);
    renderLists()
    inputAmigo.value = "";

    }
);

//Carga de lista de amigos.
function renderLists() {
    listaAmigos.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
};

//Evento click boton sortear.
botonSortear.addEventListener('click', e =>{
        if(amigos.length === 0){
            alert('Debe ingresar al menos dos participantes para realizar el sorteo.');
            return;
            }
            let randomIndex = Math.floor(Math.random() * amigos.length);
            const li = document.createElement('li');

            listaResultado.innerHTML = "";
            li.textContent = `El amigo secreto sorteado es: ${amigos[randomIndex]}.`;
            listaResultado.appendChild(li);
      
    }
);

//Validación solo texto.
inputAmigo.addEventListener('input', () => {
    inputAmigo.value = inputAmigo.value.replace(/[^A-Za-zÀ-ÿ\s]/g, '');
});

