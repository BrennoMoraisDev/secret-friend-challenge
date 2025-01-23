
let participantes = [];


function addParticipantes(){
    let participante = document.getElementById("amigo").value;

    if(participante == ""){
        alert("Insira um nome válido:")

    } else{
        participantes.push(participante);
        document.getElementById("amigo").value = "";
        atualizarLista();
    }
    
    
   
}


function atualizarLista (){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML ="";


    for(let i=0; i< participantes.length; i++){
        let li = document.createElement("li");
        li.innerHTML = participantes[i];
        lista.appendChild(li);
    }

}

function sortearAmigo(){
    if(participantes.length == 0){
        alert("erro! adicione amigos para sortear");
        return;


    }
        
    let numAleatorio = Math.floor(Math.random() * participantes.length);
    let amigoSorteado = participantes[numAleatorio];
    document.getElementById("resultado").innerHTML = `Sorteado: ${amigoSorteado}`;

}


